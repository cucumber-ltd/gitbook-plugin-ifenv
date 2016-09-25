# Conditional content for GitBook

Conditionally render content based on environment variables.
This plugin should *not* be used for gitbook.com hosted books, as there is no
way to define environment variables there.

The purpose of the plugin is *only* to generate different variations of ebooks
and PDFs.

```json
{
  "plugins": [
    "ifenv@git+https://github.com/cucumber-ltd/gitbook-plugin-ifenv.git"
  ]
}
```

## Example

```
{% ifenv env="java" %}
Run `mvn test` to build the project
{% endifenv %}

{% ifenv env="javascript" %}
Run `npm test` to build the project
{% endifenv %}
```

Conditional blocks are *only* rendered if the environment variable specified by
the `env` attribute is defined. Example:

    javascript=true gitbook serve

This would render the `{% ifenv env="javascript" }` block, but not the other one.
