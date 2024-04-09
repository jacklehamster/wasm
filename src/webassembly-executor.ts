import { wasmBrowserInstantiate } from "./hello-world";
import path from "path";
// import asc from "assemblyscript/asc";

let wasmModule: WebAssembly.WebAssemblyInstantiatedSource | undefined = undefined;
export const add = async (a: number, b: number, wasmUrl: string = "../hello-world.wasm") => {
  // Instantiate our wasm module
  wasmModule = wasmModule ?? await wasmBrowserInstantiate(wasmUrl);

  // Call the Add function export from wasm, save the result
  const add = wasmModule.instance.exports.add as Function;
  return add(a, b);
};

export const addFromFile = async (a: number, b: number, filePath: string) => {
  const file = Bun.file(filePath);
  console.log(new Response(file).headers.get("Content-Type"));
  const buffer = await file.arrayBuffer();
  const wasmModule = await WebAssembly.instantiate(buffer);
  const add = wasmModule.instance.exports.add as Function;

  return add(a, b);

}


// export function compileString(str: string) {
//   return asc.compileString(str);
// }
