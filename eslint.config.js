import js from "@eslint/js";

export default [
    // Extend the recommended configuration from eslint-plugin-js.
    js.configs.recommended,

    // Additional custom rules and configurations.
    {
        rules: {
            // Additional rules to catch unused variables and undefined variables.
            "no-unused-vars": "warn",
            "no-undef": "warn",

            // Enforce consistent indentation (2 spaces).
            "indent": ["error", 2],

            // Enforce consistent use of single quotes.
            "quotes": ["error", "single"],

            // Enforce consistent use of trailing commas in object and array literals.
            "comma-dangle": ["error", "always-multiline"]
        }
    }
];
