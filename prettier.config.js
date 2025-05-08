/** @type {import('prettier').Config} */
const config = {
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "none",
  semi: true,
  importOrder: [
    "^(react/(.*)$)|^(react$)|^(react-dom/(.*)$)|^(react-dom$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/pages/(.*)$",
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
