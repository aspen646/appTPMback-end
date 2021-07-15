
exports.up = function(knex) {
    return knex.schema.createTable('membros', function (table){
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('telefone');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('membros');
  
};
