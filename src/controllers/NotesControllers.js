const knex = require('../database/knex');

class NotesController {
    async create(request,response) {
        const {title,description,rating,tags} = request.body;
        const { users_id } = request.params;

        const [note_id] = await knex("notes").insert({
            title,
            description,
            rating,
            users_id 
         });

         const tagsInsert = tags.map(name => {
            return {
                note_id,
                name,
                users_id
            }
         });
         await knex("tags").insert(tagsInsert);
         response.json();
    }
}
module.exports = NotesController;