export type Articles= Article[]

export interface Article {
  type_of: string
  id: number
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: number
  public_reactions_count: number
  collection_id: any
  published_timestamp: string
  positive_reactions_count: number
  cover_image: string
  social_image: string
  canonical_url: string
  created_at: string
  edited_at: any
  crossposted_at: any
  published_at: string
  last_comment_at: string
  reading_time_minutes: number
  tag_list: string[]
  tags: string
  user: User
}

export interface User {
  name: string
  username: string
  twitter_username: any
  github_username: string
  user_id: number
  website_url: any
  profile_image: string
  profile_image_90: string
}


export  async function getAllBlog(): Promise<Articles | undefined> {
   const url = `https://dev.to/api/articles?username=chondromollikaahmed`
    try{
        const res = await fetch(url)
        const data = await res.json()
        
        return data
    }
    catch(err){
        console.error(err)
    }
}


