// ../dist/index.js
var D = async (k, F) => {
  let x = undefined;
  if (!F)
    F = { env: { abort: () => console.log("Abort!") } };
  if (WebAssembly.instantiateStreaming)
    x = await WebAssembly.instantiateStreaming(fetch(k), F);
  else
    x = await (async () => {
      let v = await fetch(k).then((C) => C.arrayBuffer());
      return WebAssembly.instantiate(v, F);
    })();
  return x;
};
var z = undefined;
var G = async (k, F, x = "hello-world.wasm") => {
  z = z ?? await D(x);
  let q = z.instance.exports.add;
  return q(k, F);
};
export {
  G as add
};
