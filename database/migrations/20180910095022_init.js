// exports.up = function (knex) {
//   return knex.schema
//     .createTable("roles", tbl => {
//       tbl.increments();

//       tbl.string("name", 128).notNullable().unique();
//     })
//     .createTable("users", tbl => {
//       tbl.increments();

//       tbl.string("username", 128).notNullable().unique().index();
//       tbl.string("password", 256).notNullable();

//       tbl
//         .integer("role")
//         .unsigned()
//         .references("roles.id")
//         .onDelete("RESTRICT")
//         .onUpdate("CASCADE")
//         .defaultTo(2);
//     });
// };

// exports.down = function (knex) {
//   return knex.schema.dropTableIfExists("roles").dropTableIfExists("users");
// };

exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments('id');
      tbl.string('username', 255).notNullable().unique();
      tbl.string('password', 255).notNullable();
      tbl.string('phoneNumber',255).notNullable();

    })
    .createTable("plants", tbl => {
       tbl.increments();
       tbl.string('nickname', 255).notNullable();
       tbl.string('species', 255).notNullable();
       tbl.string('h2oFrequency', 255).notNullable();
       tbl.integer('user_id')
        .unsigned().notNullable()
        .references("id").inTable('users')
        .onDelete("RESTRICT").onUpdate("RESTRICT")
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("plants").dropTableIfExists("users");
};
