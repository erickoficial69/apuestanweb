import Link from "next/link"
import { Post } from "../interfaces/app_interfaces"

type Props={
    posts:Post[]
}
const Widget_posts = ({posts}:Props)=>{
    return(
        <div className="aside_widgets">
        <p>Últimos Posts</p>
        <button className="btn_more" >Ver mas</button>
        <ul>
        {
            posts.map((post:Post)=>{
                return(
                    
                    <Link href="/">
                        <a href="/" className="aside_item_post">
                            <div>
                                <img loading="lazy" src={post._embedded['wp:featuredmedia']?post._embedded['wp:featuredmedia'][0].source_url:'/logo512.png'} alt={post.title.rendered} />                                
                            </div>
                            <div>
                                <h4>{post.title.rendered}</h4>
                                <p>
                                    {post.excerpt?.rendered.replace('<p>','').replace('</p>','')}
                                </p>
                            </div>
                        </a>
                    </Link>
                )
            })
        }
                        
        </ul>
    </div>
    )
}
export default Widget_posts