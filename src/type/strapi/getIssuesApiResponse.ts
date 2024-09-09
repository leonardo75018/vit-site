export type getIssuesApiResponse = {
  data: [
    {
      id: number
      attributes: {
        name: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        tags: {
          data: [
            {
              id: number
              attributes: {
                name: string
                createdAt: string
                updatedAt: string
                publishedAt: string
              }
            }
          ]
        }
      }
    }
  ]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
