module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "airbnb-base"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": 0,
        "eslint linebreak-style": [0, "error", "windows"]
    }
};