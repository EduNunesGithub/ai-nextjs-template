import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";

import importsConfig from "#eslint/imports";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  perfectionist.configs["recommended-alphabetical"],
  globalIgnores([
    ".husky/_/**",
    ".next/**",
    "build/**",
    "next-env.d.ts",
    "out/**",
  ]),
  importsConfig,
  prettier,
]);
