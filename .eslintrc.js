// .eslintrc.js
module.exports = {
    extends: "next",
    rules: {
      "@typescript-eslint/no-explicit-any": "off",         // any 사용 허용
      "@next/next/no-img-element": "off",                  // <img> 경고 제거
      "jsx-a11y/alt-text": "off",                          // alt 없는 이미지 허용
    },
  };
  