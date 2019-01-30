# Initial Template

[https://github.com/shermendev/template](https://github.com/shermendev/template)

---

## How to use

First let's use `create-react-app` with `--typescript` flag (change `my-app` to your project name)

```bash
npx create-react-app ./my-app --typescript
```

Copy files from `files` folder to `my-app` root directory and then go to your project's directory.

```bash
cd my-app
```

Install additional packages.

```bash
npm i -D customize-cra tslint-config-airbnb tslint node-sass prettier react-app-rewired sass-lint sass-lint-auto-fix webpack-notifier
```

Change scripts in package.json

```json
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
"eject": "react-scripts eject",
"sass:fix": "sass-lint-auto-fix"
```

Add this to tsconfig.json

```json
"lib": [
  "es2015", "dom"
]
```

That's it, now you can use your slightly enhanced React app with Typescript!
