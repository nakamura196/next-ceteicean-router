export function cssToDict(cssString: string) {
  if (!cssString) return {};
  return cssString
    .split(";") // セミコロンで分割
    .map((rule: string) => rule.trim()) // 前後の空白を削除
    .filter((rule: string) => rule) // 空の要素を削除
    .reduce((acc: Record<string, string>, rule: string) => {
      const [key, value] = rule.split(":"); // コロンでキーと値を分割
      if (key && value) {
        acc[key.trim()] = value.trim(); // 空白を削除してオブジェクトに追加
      }
      return acc;
    }, {});
}

export function getStyle(teiNode: ChildNode) {
  const styleAttr = (teiNode as Element).getAttribute("style") || "";
  return cssToDict(styleAttr);
}
