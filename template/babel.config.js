module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "#components": "./src/shared/components",
          "#config": "./src/shared/config",
          "#constants": "./src/shared/constants",
          "#hooks": "./src/shared/hooks",
          "#modules": "./src/shared/modules",
          "#types": "./src/shared/types",
          "#ui": "./src/shared/ui",
          "#utils": "./src/shared/utils",
          "#api": "./src/api",
          "#assets": "./src/assets",
          "#navigation": "./src/navigation",
          "#screens": "./src/screens",
          "#store": "./src/store",
        },
      },
    ],
  ],
};
