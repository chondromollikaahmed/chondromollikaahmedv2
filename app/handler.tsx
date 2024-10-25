export type Root = {
  projects: Project[];
  http_code: number;
};

export type Project = {
  id: number;
  name: string;
  published_on: number;
  created_on: number;
  modified_on: number;
  scheduled_on: any;
  url: string;
  slug: string;
  privacy: string;
  fields: string[];
  covers: Covers;
  mature_content: number;
  mature_access: string;
  owners: Owner[];
  stats: Stats2;
  conceived_on: number;
  allow_moodboard_save: number;
  premium: number;
  linked_asset_count: number;
  linked_assets: any[];
  colors: Color[];
  profile_section_id: any;
};

export type Covers = {
  "808": string;
  "808_webp": string;
  "404": string;
  "404_webp": string;
  "202": string;
  "202_webp": string;
  "230": string;
  "230_webp": string;
  "115": string;
  "115_webp": string;
  original: string;
  original_webp: string;
  max_808: string;
  max_808_webp: string;
};

export type Owner = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  city: string;
  creatorPro: any[];
  state: string;
  country: string;
  location: string;
  company: string;
  occupation: string;
  created_on: number;
  url: string;
  images: Images;
  display_name: string;
  fields: string[];
  has_default_image: number;
  website: string;
  banner_image_url: string;
  has_premium_access: boolean;
  stats: Stats;
};

export type Images = {
  "50": string;
  "100": string;
  "115": string;
  "230": string;
  "138": string;
  "276": string;
};

export type Stats = {
  followers: number;
  following: number;
  comments: number;
  appreciations: number;
  views: number;
};

export type Stats2 = {
  views: number;
  appreciations: number;
  comments: number;
};

export type Color = {
  r: number;
  g: number;
  b: number;
};

export async function getProject(): Promise<Root> {
    try {
      // Build the API link dynamically using environment variables
      const userName = process.env.BEHANCE_USER_NAME || process.env.NEXT_PUBLIC_BEHANCE_USER_NAME;
      const clientId = process.env.CLIENT_ID || process.env.NEXT_PUBLIC_BEHANCE_CLIENT_ID;
      
      if (!userName || !clientId) {
        throw new Error('Missing environment variables for BEHANCE_USER_NAME or CLIENT_ID');
      }
  
      const link = `https://api.behance.net/v2/users/${userName}/projects?client_id=${clientId}`;
      console.log(`Fetching data from: ${link}`);
  
      // Fetch data from Behance API
      const response = await fetch(link);
      
      // Check if the response status is OK (2xx)
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
      }
  
      // Return the JSON response
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.log('Error fetching projects:', error);
      console.log('Error:', error);
      throw error; // Re-throw error to handle it in the calling function
    }
  }
  

  export async function getFieldSet() {
    const data = await getProject();
    const fieldsSet = new Set<string>();
    data.projects.forEach((project: Project) => {
      project.fields.forEach((field) => fieldsSet.add(field));
    });
    return Array.from(fieldsSet);
  }

  export async function getProjectsALL(): Promise<Project[]> {
    const data = await getProject();
    return data.projects;
  }

  export async function getProjectCount(): Promise<number> {
    const data = await getProject();
    return data.projects.length;
  }

  export async function getProjectIdBySlug(slug: string): Promise<number> {
    const data = await getProject();
    const project = data.projects.find((project: Project) => project.slug === slug);
    return project?.id || 0;
  }