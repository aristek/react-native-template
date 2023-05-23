module.exports = async (plop) => {
  await plop.load("plop-action-eslint");

  plop.setGenerator("UI", {
    description: "Creates new shared UI component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "UI Component name (casing will be changed to PascalCase)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/shared/ui/{{pascalCase name}}.tsx",
        templateFile: "plop/component.hbs",
      },
      {
        type: "modify",
        path: "src/shared/ui/index.ts",
        pattern: /(\/\/ UI COMPONENTS EXPORT)/g,
        template: `$1\nexport { default as {{pascalCase name}} } from "./{{pascalCase name}}";`,
      },
      {
        type: "eslint",
        path: "src/shared/ui/index.ts",
      },
    ],
  });
  plop.setGenerator("component", {
    description: "Creates new shared component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (casing will be changed to PascalCase)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/shared/components/{{pascalCase name}}.tsx",
        templateFile: "plop/component.hbs",
      },
      {
        type: "modify",
        path: "src/shared/components/index.ts",
        pattern: /(\/\/ COMPONENTS EXPORT)/g,
        template: `$1\nexport { default as {{pascalCase name}} } from "./{{pascalCase name}}";`,
      },
      {
        type: "eslint",
        path: "src/shared/components/index.ts",
      },
    ],
  });
  plop.setGenerator("module", {
    description: "Creates new shared module",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Module name (casing will be changed to PascalCase)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/shared/modules/{{kebabCase name}}/index.ts",
        templateFile: "plop/module/index.hbs",
      },
      {
        type: "add",
        path: "src/shared/modules/{{kebabCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop/module/module.hbs",
      },
      {
        type: "add",
        path: "src/shared/modules/{{kebabCase name}}/duck/index.ts",
        templateFile: "plop/module/duck/index.hbs",
      },
      {
        type: "modify",
        path: "src/shared/modules/index.ts",
        pattern: /(\/\/ MODULES EXPORT)/g,
        template: `$1\nexport { default as {{pascalCase name}} } from "./{{kebabCase name}}";`,
      },
      {
        type: "eslint",
        path: "src/shared/modules/index.ts",
      },
    ],
  });
  plop.setGenerator("screen", {
    description: "Creates new screen",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Screen name (casing will be changed to PascalCase)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/screens/{{kebabCase name}}/index.ts",
        templateFile: "plop/module/index.hbs",
      },
      {
        type: "add",
        path: "src/screens/{{kebabCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop/module/module.hbs",
      },
      {
        type: "add",
        path: "src/screens/{{kebabCase name}}/duck/index.ts",
        templateFile: "plop/module/duck/index.hbs",
      },
      {
        type: "modify",
        path: "src/screens/index.ts",
        pattern: /(\/\/ SCREENS EXPORT)/g,
        template: `$1\nexport { default as {{pascalCase name}} } from "./{{kebabCase name}}";`,
      },
      {
        type: "eslint",
        path: "src/screens/index.ts",
      },
    ],
  });
  plop.setGenerator("slice", {
    description: "Creates new store slice",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Slice name (casing will be changed to camelCase)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/store/slices/{{camelCase name}}.ts",
        templateFile: "plop/slice.hbs",
      },
      {
        type: "modify",
        lint: true,
        path: "src/store/slices/index.ts",
        pattern: /(\/\/ IMPORTS)/g,
        template: `$1\nimport {{camelCase name}}, { {{camelCase name}}Actions, {{camelCase name}}Selectors } from "./{{camelCase name}}";`,
      },
      {
        type: "modify",
        path: "src/store/slices/index.ts",
        pattern: /(\/\/ REDUCERS EXPORT)/g,
        template: `$1\n  {{camelCase name}},`,
      },
      {
        type: "modify",
        path: "src/store/slices/index.ts",
        pattern: /(\/\/ ACTIONS EXPORT)/g,
        template: `$1\n  ...{{camelCase name}}Actions,`,
      },
      {
        type: "modify",
        path: "src/store/slices/index.ts",
        pattern: /(\/\/ SELECTORS EXPORT)/g,
        template: `$1\n  ...{{camelCase name}}Selectors,`,
      },
      {
        type: "eslint",
        path: "src/store/slices/index.ts",
      },
    ],
  });
};
