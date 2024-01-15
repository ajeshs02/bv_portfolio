import { groq } from 'next-sanity'
import { readClient } from './lib/client'
import { buildQuery } from './utils'

export const getProjects = async () => {
  try {
    const projects = await readClient.fetch(
      groq`${buildQuery({
        type: 'projects',
        page: 1,
        perPage: 20,
      })}{
        name,
        description,
        link,
        "image": image.asset->url,
      }`
    )

    // console.log(`project fetched on category: ${category}`, projects)
    return projects
  } catch (error) {
    console.log(error)
  }
}
