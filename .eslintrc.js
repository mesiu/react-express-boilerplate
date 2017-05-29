module.exports = {
  "extends": "airbnb",
  "env": {
    "browser" : true,
    "jest" : true
  },
  "rules": {
    "arrow-body-style": ["error", "always"],
    "no-underscore-dangle": 0,
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }]
  }
}
