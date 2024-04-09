// /Users/vincent/wasm/example/node_modules/@dobuki/wasm/dist/index.js
var z = async (A, g) => {
  let k = undefined;
  if (!g)
    g = { env: { abort: () => console.log("Abort!") } };
  return k = await (async () => {
    const n = await fetch(A).then((v) => v.arrayBuffer());
    return WebAssembly.instantiate(n, g);
  })(), k;
};
var q = undefined;
var D = async (A, g, k = "../hello-world.wasm") => {
  q = q ?? await z(k);
  const F = q.instance.exports.add;
  return F(A, g);
};
export {
  D as add
};
