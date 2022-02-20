module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "prismjs",
      {
        languages: ["javascript", "css", "html", "bash", "jsx", "tsx", "typescript"],
        plugins: ["line-numbers", "show-language", "copy-to-clipboard"],
        theme: "tomorrow",
        css: true,
      },
    ],
  ],
};
