module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never'],
    // 关闭冲突规则
    'prettier/prettier': [
      'error',
      {
        "semi": false,
        "trailingComma": "none",
        "singleQuote": true,
        "printWidth": 70
      },
    ],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};