// import { add } from ".";
const { add, addFromFile } = require(".");
const path = require("path");
// const assemblyscript = require("assemblyscript/asc");
// import asc from "assemblyscript/asc";


describe('add', () => {
    it('add two numbers', async () => {
        const p = path.dirname(module.path) + "/../hello-world.wasm"
        expect(await addFromFile(13, 14, p)).toEqual(13 + 14);
    });
});
