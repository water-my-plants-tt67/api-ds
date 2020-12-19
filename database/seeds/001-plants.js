

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {id: 1, nickname: 'nickname1', species:'species1', h2oFrequency:'h2oFrequency1', user_id: 1 },
        {id: 2, nickname: 'nickname2', species:'species2', h2oFrequency:'h2oFrequency2', user_id: 2 },
        {id: 3, nickname: 'nickname3', species:'species3', h2oFrequency:'h2oFrequency3', user_id: 3 }
      ]);
    });
};
