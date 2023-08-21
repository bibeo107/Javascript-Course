module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["airbnb-base", "plugin:prettier/recommended"],
    "plugins": ["prettier"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4,
        ],
        "linebreak-style": [
            "error",
            "unix",
        ],
        "quotes": [
            "error",
            "single",
        ],
        "semi": [
            "error",
            "always",
        ],
        "no-console": "off",
        "no-unused-vars": 0,
        "no-debugger": 0,
        "no-use-before-define": 0,
        "max-len": 0
    }
}
