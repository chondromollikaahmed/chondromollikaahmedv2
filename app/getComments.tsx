export interface Root {
    comments: Comment[]
    http_code: number
  }
  
  export interface Comment {
    id: number
    comment: string
    user: User
    created_on: number
    comment_tags: CommentTag[]
  }
  
  export interface User {
    id: number
    first_name: string
    last_name: string
    username: string
    city: string
    creatorPro: any[]
    state: string
    country: string
    location: string
    company: string
    occupation: string
    created_on: number
    url: string
    images: Images
    display_name: string
    fields: string[]
    has_default_image: number
    website: string
    banner_image_url: string
    has_premium_access: boolean
    stats: Stats
  }
  
  export interface Images {
    "50": string
    "100": string
    "115": string
    "230": string
    "138": string
    "276": string
  }
  
  export interface Stats {
    followers: number
    following: number
    comments: number
    appreciations: number
    views: number
  }
  
  export interface CommentTag {
    user_id: number
    display_name: string
    offset: number
    length: number
  }

  export async function getComments(id:number): Promise<Comment>  {
    const link = `https://api.behance.net/v2/projects/${id}/comments?client_id=${process.env.CLIENT_ID}`;
    
    console.log(`Fetching data from: ${link}`);
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data.comments;

    }