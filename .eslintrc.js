module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 关闭冲突规则
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 80
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}