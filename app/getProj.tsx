export interface Root {
    project: Project
    http_code: number
  }
  
  export interface Project {
    id: number
    name: string
    published_on: number
    created_on: number
    modified_on: number
    scheduled_on: any
    url: string
    slug: string
    privacy: string
    fields: string[]
    covers: Covers
    mature_content: number
    mature_access: string
    owners: Owner[]
    stats: Stats2
    conceived_on: number
    allow_moodboard_save: number
    premium: number
    linked_asset_count: number
    linked_assets: any[]
    canvas_width: number
    tags: string[]
    description: string
    editor_version: number
    allow_comments: number
    modules: Module[]
    short_url: string
    copyright: Copyright
    tools: Tool[]
    styles: Styles
    colors: Color2[]
    creator_id: number
  }
  
  export interface Covers {
    "808": string
    "808_webp": string
    "404": string
    "404_webp": string
    "202": string
    "202_webp": string
    "230": string
    "230_webp": string
    "115": string
    "115_webp": string
    original: string
    original_webp: string
    max_808: string
    max_808_webp: string
  }
  
  export interface Owner {
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
    availabilityInfo: AvailabilityInfo
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
  
  export interface AvailabilityInfo {
    userId: number
    isAvailableFullTime: boolean
    isOpenToRelocation: boolean
    isLookingForRemote: boolean
    isAvailableFreelance: boolean
    compensationMin: number
    currency: string
    availabilityTimeline: string
    buttonCTAType: string
  }
  
  export interface Stats2 {
    views: number
    appreciations: number
    comments: number
  }


  export interface Component {
    id: number
    project_id: number
    source_filename: string
    source_width: number
    source_height: number
    position: number
    flex_width: number
    flex_height: number
    dimensions: Dimensions
    sizes: Sizes
    src: string
    alt_text: string
  }
  
  export interface Module {
    id: number
    project_id: number
    type: string
    full_bleed: number
    alignment: string
    caption_alignment: string
    alt_text_for_editor?: string
    alt_text?: string
    color?: Color
    show_similar_styles?: boolean
    src?: string
    sizes?: Sizes
    dimensions?: Dimensions
    width?: number
    height?: number
    exif?: any[]
    cai?: Cai
    text?: string
    text_plain?: string
    components?: Component[]
  }
  
  export interface Color {
    r: number
    g: number
    b: number
  }
  
  export interface Sizes {
    max_632: string
    max_316: string
    max_158: string
    disp: string
    max_1240: string
    max_1920: string
    max_1200: string
    "1400": string
    "1400_opt_1": string
    original: string
  }
  
  export interface Dimensions {
    max_632: Max632
    max_316: Max316
    max_158: Max158
    disp: Disp
    max_1240: Max1240
    max_1920: Max1920
    max_1200: Max1200
    "1400": N1400
    "1400_opt_1": N1400Opt1
    original: Original
  }
  
  export interface Max632 {
    width: number
    height: number
  }
  
  export interface Max316 {
    width: number
    height: number
  }
  
  export interface Max158 {
    width: number
    height: number
  }
  
  export interface Disp {
    width: number
    height: number
  }
  
  export interface Max1240 {
    width: number
    height: number
  }
  
  export interface Max1920 {
    width: number
    height: number
  }
  
  export interface Max1200 {
    width: number
    height: number
  }
  
  export interface N1400 {
    width: number
    height: number
  }
  
  export interface N1400Opt1 {
    width: number
    height: number
  }
  
  export interface Original {
    width: number
    height: number
  }
  
  export interface Cai {
    exists: boolean
    is_v1: boolean
  }
  
  export interface Copyright {
    license: string
    description: string
    license_id: number
    label: string
  }
  
  export interface Tool {
    id: number
    title: string
    category: string
    category_label: string
    category_id: number
    synonym: any
    approved: string
    url: string
  }
  
  export interface Styles {
    text: Text
    background: Background
    spacing: Spacing
    dividers: Dividers
  }
  
  export interface Text {
    title: Title
    subtitle: Subtitle
    paragraph: Paragraph
    caption: Caption
    link: Link
  }
  
  export interface Title {
    font_family: string
    font_weight: string
    color: string
    text_align: string
    line_height: string
    font_size: string
    text_decoration: string
    font_style: string
    display: string
    text_transform: string
  }
  
  export interface Subtitle {
    font_family: string
    font_weight: string
    color: string
    text_align: string
    line_height: string
    font_size: string
    text_decoration: string
    font_style: string
    display: string
    text_transform: string
  }
  
  export interface Paragraph {
    font_family: string
    font_weight: string
    color: string
    text_align: string
    line_height: string
    font_size: string
    text_decoration: string
    font_style: string
    display: string
    text_transform: string
  }
  
  export interface Caption {
    font_family: string
    font_weight: string
    color: string
    text_align: string
    line_height: string
    font_size: string
    text_decoration: string
    font_style: string
    display: string
    text_transform: string
  }
  
  export interface Link {
    font_family: string
    font_weight: string
    color: string
    text_align: string
    line_height: string
    font_size: string
    text_decoration: string
    font_style: string
    display: string
    text_transform: string
  }
  
  export interface Background {
    color: string
  }
  
  export interface Spacing {
    project: Project2
    modules: Modules
  }
  
  export interface Project2 {
    top_margin: number
  }
  
  export interface Modules {
    bottom_margin: number
  }
  
  export interface Dividers {
    display: string
  }
  
  export interface Color2 {
    r: number
    g: number
    b: number
  }
  

  

  export async function getProjectById(id: number): Promise<Project> {
    const link = `https://api.behance.net/v2/projects/${id}?client_id=${process.env.CLIENT_ID}`;
    console.log(`Fetching data from: ${link}`);
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data.project;
  }

  