module.exports = {
  plugins: [
    // gives 1000s of classes instead of writing your own css
    "tailwindcss",
    "postcss-import",
    "postcss-flexbugs-fixes",
    [
      // purges unused selectors that we dont use from tailwinds
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
