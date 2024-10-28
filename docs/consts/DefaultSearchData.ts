// To get this just hit search.json.get.ts in the search bar with '' as the query
export const DEFAULT_SEARCH_DATA = [
  {
      name: 'What is @tidy',
      items: [
          {
              title: 'What is @tidy?',
              description: 'Say goodbye to messy templates and complex validation rules!  @tidy empowers you to build robust forms with clear, maintainable validation in your prefered Single Page Application Framework (Vue.js, Sevlte, etc.) based applications.',
              link: '/getting-started'
          }
      ]
  },
  {
      name: 'Getting Started',
      items: [
          {
              title: 'Installation',
              description: 'Get started with @tidy, Effortless Form Validation for Popular Single Page Application Frameworks (Vue.js, Sevlte, etc.)',
              link: '/getting-started/installation'
          },
          {
              title: 'Quick Start',
              description: 'Build a simple form with clear validation using @tidy\'s core features in this quick guide.',
              link: '/getting-started/building-your-first-form'
          }
      ]
  },
  {
      name: 'Core Concepts',
      items: [
          {
              title: 'Global Configuration',
              description: 'Configure error messages, date format, & validation strategy globally.',
              link: '/core-concepts/global-configuration'
          },
          {
              title: 'useForm',
              description: 'Effortlessly manage and validate forms in Vue.js or Sevlte with the useForm composition API function and built-in validation from "@tidy".',
              link: '/core-concepts/use-form'
          },
          {
              title: 'Validators',
              description: 'Effortlessly manage and validate forms in Vue.js with the useForm composition API function and built-in validation from "@tidy".',
              link: '/core-concepts/validators'
          }
      ]
  },
  {
      name: 'How To',
      items: [
          {
              title: 'Create Simple Form',
              description: 'This page introduces form validation concepts by creating a simple form with basic validation rules for user input.',
              link: '/how-to/create-simple-form'
          },
          {
              title: 'Create Nested Forms',
              description: 'This page dives into nested forms, a method for structuring complex data and independent validation within forms.',
              link: '/how-to/create-nested-form'
          },
          {
              title: 'Create Nested Form Arrays',
              description: 'This page introduces form validation concepts through creating a simple form with basic validation rules for user input.',
              link: '/how-to/create-nested-form-array'
          },
          {
              title: 'Validate Form on Submit',
              description: 'This page explains how to validate a form when the submit button is clicked using @tidy. Here, validation occurs only when the user attempts to submit the form, ensuring a smoother user experience.',
              link: '/how-to/validate-form-on-submit'
          },
          {
              title: 'Cross Field Validation (Compare Password)',
              description: 'This page explains cross-field validation, ensuring form data consistency by checking fields against each other.',
              link: '/how-to/cross-field-validation'
          },
          {
              title: 'Conditional Validation',
              description: 'This page unveils conditional validation in @nattyjs/tidy forms, validation rules adapt to user input for a flexible experience.',
              link: '/how-to/conditional-validation'
          },
          {
              title: 'Async Validation',
              description: 'Leverage asynchronous validation in your forms. Ensure real-time data checks and enhance user experience with instant feedback.',
              link: '/how-to/async-validation'
          },
          {
              title: 'Custom Validation',
              description: 'This page empowers you to craft custom validation rules for your forms, going beyond built-in options.',
              link: '/how-to/custom-validation'
          },
          {
              title: 'Validate Checkbox or Radio Button',
              description: 'Validate checkboxes & radio buttons, Ensure user choices in your forms!.',
              link: '/how-to/validate-checkbox-and-radiobutton'
          }
      ]
  },
  {
      name: 'Api Reference',
      items: [
          {
              title: 'AlphaConfig',
              description: 'Configure validation for alphabetic input, allowing customization of whitespace, locale, and additional valid characters..',
              link: '/api-reference/alpha-config'
          },
          {
              title: 'ArrayConfig',
              description: 'Configure array-based validations (like allOf, noneOf, oneOf), specifying expected values and potentially customizing error messages.',
              link: '/api-reference/array-config'
          },
          {
              title: 'BaseValidatorConfig',
              description: 'This interface defines a set of configuration options that can be applied to various validators.',
              link: '/api-reference/base-validator-config'
          },
          {
              title: 'CreditCardConfig',
              description: 'Configure credit card validation, allowing specification of accepted types.',
              link: '/api-reference/credit-card-config'
          },
          {
              title: 'DefaultConfig',
              description: 'Configure to restrict the user input with the defined value.',
              link: '/api-reference/default-config'
          },
          {
              title: 'DifferentConfig',
              description: 'Configure to provide a way to associate a field name with a validator.',
              link: '/api-reference/different-config'
          },
          {
              title: 'ExtensionConfig',
              description: 'Configuration options for validating file extensions.',
              link: '/api-reference/extension-config'
          },
          {
              title: 'FactorConfig',
              description: 'Configuration options for validators that perform comparison-based validation.',
              link: '/api-reference/factor-config'
          },
          {
              title: 'HexColorConfig',
              description: 'Configuration options for validators that perform comparison-based validation.',
              link: '/api-reference/hex-color-config'
          },
          {
              title: 'IpConfig',
              description: 'Configure IP address validation with version and CIDR notation options.',
              link: '/api-reference/ip-config'
          },
          {
              title: 'MaxDateConfig',
              description: 'Configure date validation (optional value, field name, ISO format), with adding support for maximum date comparison operators (< or <=).',
              link: '/api-reference/max-date-config'
          },
          {
              title: 'MaxTimeConfig',
              description: 'Configure maximum allowed time validation with comparison operators (<, <=), optional time value, field name, and allowing seconds in the format.',
              link: '/api-reference/max-time-config'
          },
          {
              title: 'MinDateConfig',
              description: 'Configure minimum date validation with optional value, field name, ISO format support, and comparison operators (\'>\' or \'>=\').',
              link: '/api-reference/min-date-config'
          },
          {
              title: 'MinTimeConfig',
              description: 'Define minimum allowed time validation with comparison operators (\'>\', \'>=\') along with optional time value, field name, and allowing seconds in the format.',
              link: '/api-reference/min-time-config'
          },
          {
              title: 'NumberConfig',
              description: 'Configure basic number validation.',
              link: '/api-reference/number-config'
          },
          {
              title: 'PasswordConfig',
              description: 'Configures password validation rules (min length, character types), conditional enforcement, and custom error messages.',
              link: '/api-reference/password-config'
          },
          {
              title: 'PatternConfig',
              description: 'Configure validation based on regular expressions for different keys within a provided expression object.',
              link: '/api-reference/pattern-config'
          },
          {
              title: 'RangeConfig',
              description: 'Define a range validation for numbers with optional minimum and maximum allowed values.',
              link: '/api-reference/range-config'
          },
          {
              title: 'RelationalOperatorConfig',
              description: 'Configure validation based on relational operators (likely used with other configs), with optional field name, value, and flag for array control.',
              link: '/api-reference/relational-operator-config'
          },
          {
              title: 'TimeConfig',
              description: 'Configure validation based on relational operators (likely used with other configs), with optional field name, value, and flag for array control.',
              link: '/api-reference/time-config'
          },
          {
              title: 'DateConfig',
              description: 'This configuration interface enables date-based validation customization, providing options for setting minimum and maximum date ranges.',
              link: '/api-reference/date-config'
          },
          {
              title: 'JsonConfig',
              description: 'This configuration interface supports JSON structure validation, with options for defining required properties and valid JSON paths.',
              link: '/api-reference/json-config'
          }
      ]
  }
]
