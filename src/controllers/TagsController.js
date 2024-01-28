const knex = require("../database/knex")

class TagsController {
  async index(request, response) {
    const { users_id } = request.params

    const tags = await knex("tags")
    .where({ users_id })

    return response.json(tags)
  }
}

module.exports = TagsController