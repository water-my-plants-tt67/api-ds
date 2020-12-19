

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'nerd1', password:'password1', phoneNumber:'123-456-7890'},
        {id: 2, username: 'nerd2', password:'password2', phoneNumber:'456-123-7890'},
        {id: 3, username: 'nerd3', password:'password3', phoneNumber:'789-012-3456'}
      ]);
    });
};
