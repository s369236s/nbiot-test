"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
async function boostrap() {
    const app = (0, express_1.default)();
    const PORT = process.env.PORT || 3000;
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.get("/", (req, res) => {
        console.log(req.body);
        res.send({ hey: "hey" });
    });
    app.listen(PORT, () => {
        console.log(PORT);
    });
}
boostrap();
//# sourceMappingURL=main.js.map