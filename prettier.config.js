/** @type {import('prettier').Config} */
const config = {
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "none",
  semi: true,
  importOrder: [
    "^(react/(.*)$)|^(react$)|^(react-dom/(.*)$)|^(react-dom$)",
    "^(react-router/(.*)$)|^(react-router$)|^(react-router-dom/(.*)$)|^(react-router-dom$)",
    "^(@tanstack/react-router/(.*)$)|^(@tanstack/react-router$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/route-tree.gen",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/routes/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "",
    "^[./]",
    "",
    "<TYPES>^(node:)",
    "<TYPES>",
    "<TYPES>^@/types(?:/(.*))?$",
    "<TYPES>^[.]"
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: false,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ]
};

export default config;
