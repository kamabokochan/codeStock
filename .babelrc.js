module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "prismjs",
      {
        languages: ["javascript", "css", "html", "bash", "jsx", "tsx", "typescript"],
        plugins: [
          "line-numbers",
          "copy-to-clipboard", // https://prismjs.com/plugins/copy-to-clipboard/
        ],
      },
    ],
    ["styled-components", { ssr: true }],
  ],
};
