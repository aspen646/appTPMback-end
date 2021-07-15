
exports.up = function(knex) {
    return knex.schema.createTable('receita', function (table){
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('valor');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('receita');
  
};
