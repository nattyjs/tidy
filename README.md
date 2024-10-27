## **Tidy.js: Effortless Form Validation**

**A lightweight, flexible, and powerful form validation library for modern web development.**

### Installation

```bash
npm install @nattyjs/tidy
```

### Basic Usage

```javascript
import { useForm, Validators } from '@nattyjs/tidy';

const form = useForm({
  name: '',
  email: '',
}, {
  validators: {
    name: Validators.required(),
    email: [Validators.required(), Validators.email()],
  },
});
```

### Key Features

* **Simple and Declarative:** Define validation rules with a clean and concise syntax.
* **Customizable Validation:** Create custom validation rules to fit your specific needs.
* **Asynchronous Validation:** Perform validation checks in the background for a seamless user experience.
* **Lightweight and Flexible:** Integrate easily into your projects and customize to your requirements.

## Why choose @tidy?
Crafting robust forms with clear and maintainable validation is vital for any SPA application. Existing libraries might leave you with cluttered templates, complex rule configurations, and scattered error handling. it does have some potential drawbacks in terms of code readability, maintainability, and usability:

| Aspect                                |        Drawbacks                                                   |     
| --------------------------------------| -------------------------------------------------------------------|
| Code Readability                      | Inline validation rules can clutter templates                      |
| Maintainability                       | Complex rule configuration and spread-out error handling.          |
| Usability                             | Customization overhead and potential for errors in templates.      |

But there's a better way! With @tidy validation package tackles these challenges head-on, offering a streamlined and developer-friendly solution built with comprehensive type safety.


### Example:
#### VUE
```vue
<script setup lang="ts">
import { reactive } from 'vue'
import { useForm, Validators } from '@nattyjs/tidy';

const form = reactive(useForm({
  name: '',
  email: '',
}, {
  validators: {
    name: Validators.required(),
    email: [Validators.required(), Validators.email()],
  },
}));
</script>

<template>
  <div>
    <input type="text" v-model="form.name" />
    <span v-if="form.errors?.name">{{ form.errorMessage.name }}</span>

    <input type="email" v-model="form.email" />
    <span v-if="form.errors?.email">{{ form.errorMessage.name }}</span>

    <button :disabled="!form.valid">Submit</button>
  </div>
</template>
```
#### Sevlte

```javascript
<script>
  import { useForm, Validators } from '@nattyjs/svelte';

  export let form;

  const initForm = () => {
    form = useForm({ name: '', email: '' }, {
      validators: {
        name: Validators.required(),
        email: [Validators.required(), Validators.email()],
      },
    });
  };

  initForm();
</script>

<div>
  <input type="text" bind:value={form.name} />
  <span if={form.errorMessage.name}>{form.errorMessage.name}</span>

  <input type="email" bind:value={form.email} />
  <span if={form.errorMessage.email}>{form.errorMessage.email}</span>

  <button disabled={!form.valid}>Submit</button>
</div>
```

### License

This project is licensed under the MIT License.

**Contributing**

We welcome contributions to <b>@tidy!</b> Please refer to our contribution guidelines for more information.
