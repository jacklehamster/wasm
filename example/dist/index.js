// /Users/vincent/wasm/example/node_modules/@dobuki/wasm/dist/index.js
var E = async (k, g) => {
  let v = undefined;
  if (!g)
    g = { env: { abort: () => console.log("Abort!") } };
  if (WebAssembly.instantiateStreaming)
    v = await WebAssembly.instantiateStreaming(fetch(k), g);
  else
    v = await (async () => {
      const C = await fetch(k).then((D) => D.arrayBuffer());
      return WebAssembly.instantiate(C, g);
    })();
  return v;
};
var z = undefined;
var G = async (k, g, v = "../hello-world.wasm") => {
  z = z ?? await E(v), console.log("exports", z.instance.exports);
  const q = z.instance.exports.add;
  return q(k, g);
};
export {
  G as add
};
