import { KEYWORDS, TYPES } from "../constants/tokenSets";

const tokenizeCodePart = (line: string) => {
  const parts = line.split(/(\s+|[^\w]+)/);
  const tokens: { text: string; className?: string }[] = [];
  let expectFunctionName = false;

  for (const part of parts) {
    if (part === "") continue;
    if (part.trim() === "") {
      tokens.push({ text: part });
      continue;
    }

    if (/^\w+$/.test(part)) {
      if (expectFunctionName) {
        tokens.push({ text: part, className: "token-func" });
        expectFunctionName = false;
        continue;
      }
      if (KEYWORDS.has(part)) {
        tokens.push({ text: part, className: "token-keyword" });
        if (part === "function") {
          expectFunctionName = true;
        }
        continue;
      }
      if (TYPES.has(part)) {
        tokens.push({ text: part, className: "token-type" });
        continue;
      }
      if (/^\d+$/.test(part)) {
        tokens.push({ text: part, className: "token-number" });
        continue;
      }
    }

    // Simple operator highlighting for readability.
    if (/^[=<>!+\-*/]+$/.test(part)) {
      tokens.push({ text: part, className: "token-operator" });
      continue;
    }

    tokens.push({ text: part });
  }

  return tokens;
};

export const tokenizeLine = (line: string) => {
  const commentIndex = line.indexOf("//");
  if (commentIndex >= 0) {
    const codePart = line.slice(0, commentIndex);
    const commentPart = line.slice(commentIndex);
    return [
      ...tokenizeCodePart(codePart),
      { text: commentPart, className: "token-comment" },
    ];
  }
  return tokenizeCodePart(line);
};
