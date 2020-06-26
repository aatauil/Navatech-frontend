const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    purgecss({
      content: ["./src/*.js"],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["js"]
        }
      ]
    }),
    require("autoprefixer")
  ]
};
