
const string = "𩸽のひらき";

const codePoints = Array.from(string);
console.log(codePoints);
console.log(codePoints.length);

console.log(string.startsWith("a"));
console.log(string.endsWith("き"));
console.log(string.includes("ひら"));

// ^ - 部分文字列が先頭ならtrue
console.log(/^𩸽の/.test(string)); // => true
console.log(/^いる/.test(string)); // => false
// $ - 部分文字列が末尾ならtrue
console.log(/にわ$/.test(string)); // => false
console.log(/らき$/.test(string)); // => true
// 部分文字列が含まれるならtrue
console.log(/のひ/.test(string)); // => true
console.log(/ひら/.test(string)); // => true

