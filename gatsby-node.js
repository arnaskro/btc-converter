const axios = require('axios')

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  // get data from coindesk api
  const result = await axios(process.env.GATSBY_COINDESK_API_ENDPOINT)
    .then(res => res.data)
    .catch(err => {
      console.error(err.message)
      return null
    })

  // if results are fetched, create node
  if (result) {
    createNode({
      id: `api-data`,
      parent: null,
      children: [],
      data: result,
      internal: {
        type: `ApiResult`,
        contentDigest: createContentDigest(result)
      }
    })
  }
}
