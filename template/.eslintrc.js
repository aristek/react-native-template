module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "aristek",
    "aristek/typescript",
    "aristek/prettier",
  ],
  rules: {
    "@typescript-eslint/consistent-type-definitions": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "react-hooks/exhaustive-deps": 0,
  },
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
