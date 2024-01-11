module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["nativewind/babel"],
      ['expo-router/babel'],
      ["module-resolver", {
          root: ["./src"],
          alias: {
            "@app": "./src/app",
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@theme": "./src/theme",
            "@assets": "./src/assets",
            "@utils": "./src/utils",
          }
        }
      ],
    ],
  };
};
