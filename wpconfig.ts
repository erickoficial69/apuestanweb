type Post_type ={
  name:string
  slug: string
  rest_base: string
}
export const  wp_post_types:Post_type[]=[
  {
    name:"post",
    slug: "post",
    rest_base: "posts"
  },
  {
    name:"page",
    slug: "page",
    rest_base: "pages"
  },
  
  {
    name:process.env.APP_ENV !== 'production'?'pronostico':"events",
    slug: process.env.APP_ENV !== 'production'?'pronostico':"events",
    rest_base: process.env.APP_ENV !== 'production'?'pronostico':"events"
  }
]   