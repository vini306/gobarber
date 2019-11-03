module.exports = {
    "env": {
        "node": true
    },
    "extends": ["airbnb-base", "prettier"], //"eslint:recommended",
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error",
        "class-methods-use-this": "off",
        "no-param-reassign": "off",
        "camelcase": "off",
        "no-unused-vars": ["warn", { "argsIgnorePattern": "next" }],
        "linebreak-style": 0,
        "eslint linebreak-style": [0, "error", "windows"]
    }
};