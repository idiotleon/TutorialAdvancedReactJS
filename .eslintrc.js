module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommend", "plugin:react"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugin": ["react"],
    "rules": {
        "react/prop-types": ["off"],
        "indent": ["error", 2],
        "linebreak-style": ["error", "unit"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-console": ["warn", { "allow": ["info", "error"] }]
    }
}