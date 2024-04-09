import { addFromFile } from "@dobuki/wasm";
import Bao from "baojs";
import serveStatic from "serve-static-bun";

const app = new Bao();
//console.log(await add(10, 15, "hello-world.wasm"));

addFromFile(12, 13, "hello-world.wasm").then(result => console.log(result));

//application/wasm
app.get("/*any", serveStatic("/", { middlewareMode: "bao" }));

const server = app.listen({ port: 3000 });
console.log(`Listening on http://localhost:${server.port}`);
