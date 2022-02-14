module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import'
  ],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // if,whileブロック波括弧の省略禁止
    "curly": "error",
    // 厳密比較
    "eqeqeq": "warn",
    // 冗長なelse禁止
    "no-else-return": "warn",
    // parseIntの基数指定必須
    "radix": "warn",
    // 識別子はキャメルケース
    "camelcase": [
        "warn",
        {
            ignoreDestructuring: true,
            ignoreImports: true,
            ignoreGlobals: true,
        },
    ],
    // 複雑な演算子の混在時に括弧をつける
    "no-mixed-operators": "warn",
    // アロー関数本文の波括弧省略禁止
    "arrow-body-style": ["warn", "always"],
    // import 順序と行間
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-anonymous-default-export": "warn",
    "import/no-unresolved": "off",
    "import/order": [
        "error",
        {
            // groups: ["builtin", "external", "parent", "sibling", "index"],
            "newlines-between": "always",
            "alphabetize": {
                order: "asc",
                caseInsensitive: true,
            },
        },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // 宣言前の使用禁止
    "@typescript-eslint/no-use-before-define": "warn",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};