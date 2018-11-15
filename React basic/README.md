# Initial Template

[https://github.com/shermendev/template](https://github.com/shermendev/template)

---

## How to use

First let's use `create-react-app` (change `my-app` to your project name)

```bash
npx create-react-app ./my-app
```

Copy files from `files` folder to `my-app` root directory and then go to your project's directory.

```bash
cd my-app
```

Install additional packages.

```bash
npm i -D customize-cra eslint-config-airbnb eslint-plugin-array-func eslint-plugin-css-modules eslint-plugin-promise eslint-plugin-react eslint-plugin-sort-destructure-keys eslint-plugin-unicorn node-sass prettier react-app-rewired sass-lint sass-lint-auto-fix webpack-notifier
```

Change scripts in package.json

```json
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
"eject": "react-scripts eject",
"sass:fix": "sass-lint-auto-fix"
```

That's it, now you can use your slightly enhanced React app!
