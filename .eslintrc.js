module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["./node_modules/gts"],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "no-process-exit": "off",
        indent: ["error", 4, {"ignoredNodes": ["PropertyDefinition"]}],
        "prettier/prettier": 0,
        "quotes": ["error", "double"]
    },
};
