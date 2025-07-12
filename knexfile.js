"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    client: "sqlite3",
    connection: {
        filename: "./src/database/database.db",
    },
    useNullAsDefault: true,
    migrations: {
        extension: "ts",
        directory: "./src/database/migrations",
    }
};
