const Article = require('../models/Article')

module.exports = {
      getAll: async () => {
            return await Article.find().sort({priority: 1, publishedAt: -1})
      },

      getById: async (id) => {
            return Article.findById(id)
      },

      remove: async (id) => {
            return Article.findByIdAndDelete(id)
      }
}