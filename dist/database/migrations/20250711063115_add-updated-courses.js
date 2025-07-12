"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.alterTable("courses", (table) => {
        table.timestamp("updated_at").defaultTo(knex.fn.now()).after("created_at");
    });
}
async function down(knex) {
    await knex.schema.alterTable("courses", (table) => {
        table.dropColumn("updated_at");
    });
}
