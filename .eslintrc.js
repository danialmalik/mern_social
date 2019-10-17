module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: 'eslint:recommended',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        semi: ['error', 'always'],
        'max-len': ['warn', { code: 120 }],
        quotes: ['warn', 'single'],
        'no-unused-vars': 'warn',
        indent: ['error', 4]
    }
};
