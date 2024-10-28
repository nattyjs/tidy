import { serverQueryContent } from "#content/server";

export default eventHandler(async (event) => {
  const queryObj = getQuery(event);
  const query =
    queryObj && typeof queryObj.q === "string"
      ? queryObj.q.toLowerCase().trim()
      : "";

  // Fetch content with the initial filter
  const items = await serverQueryContent(event)
    .where({ _type: "markdown", navigation: { $ne: false } })
    .find();

  // First, search only by title
  let filteredItems = items.filter((item) =>
    item.title?.toLowerCase().includes(query)
  );

  // If no results found in titles, search in descriptions & section title
  if (filteredItems.length === 0) {
    filteredItems = items.filter((item) =>
      item.description?.toLowerCase().includes(query) || getTitleCase(item._dir ?? '').toLowerCase().includes(query)
    );
  }

  // Format data to include only required fields
  const formattedData = filteredItems
    .map((item) => ({
      section: getTitleCase(item._dir ?? '') || "What is @tidy",
      title: item.title || "",
      description: item.description || "",
      link: item._path,
    }))
    .filter((item) => item.title !== "");

  // Group data by section
  const groupedData = formattedData.reduce((sections, item) => {
    if (!sections[item.section]) {
      sections[item.section] = [];
    }
    sections[item.section].push({
      title: item.title,
      description: item.description,
      link: item.link || "",
    });
    return sections;
  }, {} as Record<string, { title: string; description: string; link: string }[]>);

  const response = Object.entries(groupedData).map(([name, items]) => ({
    name,
    items,
  }));

  return response;
});

const getTitleCase = (item: string): string => {
  return item
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
