"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myMiddleware1 = myMiddleware1;
function myMiddleware1(req, res, next) {
    req.user_id = "1235456";
    console.log(`Passou no teste ${req.user_id}`);
    return next();
}
