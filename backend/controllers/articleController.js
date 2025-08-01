const articleService = require('../services/articleServices')

module.exports ={
      getAllArticles: async (req, res) => {
            try{
                  const articles = await articleService.getAll()
                  res.status(200).json(articles)
            }catch(error){
                  res.status(500).json({ message: 'Error retrieving articles', error })
            }
      },

      getArticlesById: async (req, res) => {
            try{
                  const article = await articleService.getById(req.params.id)

                  if(!article){
                        return res.status(404).json({message: 'Article not found'})
                  }

                  res.status(200).json(article)

            }catch(error){    
                  res.status(500).json({ message: 'Error retrieving article', error })
            }
      },

      deleteArticle: async (req, res) => {
            try {
                  const deleted = await articleService.remove(req.params.id)
                  if (!deleted) {
                  return res.status(404).json({ message: 'Article not found' })
                  }
                  res.status(200).json({ message: 'Article deleted successfully' })
            } catch (error) {
                  res.status(500).json({ message: 'Error deleting article', error })
            }
      }
      
}