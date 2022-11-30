const { alias } = require("react-app-rewire-alias");

module.exports = {
  webpack: (config, env) => {
    alias({
      // define these based on your needs
      "@components": "./src/components",
      "@assets": "./src/assets",
      "@pages": "./src/pages",
      "@redux": "./src/redux",
      "@utils": "./src/utils",
      // errorDetails: true,
      // children: true
    })(config);

    return config;
  },
};
