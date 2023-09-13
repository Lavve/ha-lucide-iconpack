const path = require('path')

module.exports = [
  {
    entry: './js/main.js',
    output: {
      filename: 'custom_components/ha-lucide-iconpack/main.js',
      path: path.resolve(__dirname),
    },
    mode: 'production',
  },
]
