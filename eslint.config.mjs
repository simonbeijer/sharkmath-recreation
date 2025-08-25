import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      // Enforce consistent import order
      "@typescript-eslint/consistent-type-imports": "error",
      // Prevent unused variables except those starting with _
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      // Consistent naming conventions
      "@typescript-eslint/naming-convention": [
        "error",
        { "selector": "typeAlias", "format": ["PascalCase"] },
        { "selector": "interface", "format": ["PascalCase"] }
      ],
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**", 
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
