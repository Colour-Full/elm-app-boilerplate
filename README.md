#### Elm App Starter Boilerplate

A basic boilerplate for building elm apps that use webpack to bundle the elm code to javascript and Koa js to serve the assets. This is not intended to be used as `zero configuration`. The idea of the boilerplate is to give you some basic configuration to get you started but everything is there for you to be able to reconfigure it to your specific needs, due to this some knowledge around the elm and node.js ecosystem is expected. Please be a responsible developer and take time to learn your tools.

### Use

Clone the repository:

```bash
git clone ...
```

Then start the server
```bash
yarn start
```

Checkout your app at `localhost:9000`

### Setting up env vars

The boilerplate use the dotenv package to set env vars. Take a look at the `.env.template` file to see what options are available.

### Enable Hot Module Replacement for rapid development

The boilerplate provide HMR trough webpack, to enable it set the environment variable HOT_MODULES to true.

