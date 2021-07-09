import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { App_context } from "../context/wp_context/app_context"
import { Post } from "../interfaces/app_interfaces"

type Props={
    posts:Post[]
}
const Widget_posts = ({posts}:Props)=>{
    const {app_dispatch} =  useContext(App_context)
    return(
        <div className="aside_widgets">
        <p>Últimos Posts</p>
        <button className="btn_more" >Ver mas</button>
        <ul>
        {
            posts.map((post:Post,i:number)=>{
                const href= "/"+post.type+"/"+post.slug
                return(
                    
                    <Link key={i} href={href}>
                        <a onClick={()=>{document.location.pathname != href?app_dispatch({type:'loader_app',payload:true}):null}} href={href} className="aside_item_post">
                            <div>
                                <Image width="200px" height="200px" src={post._embedded && post._embedded["wp:featuredmedia"]?post._embedded["wp:featuredmedia"][0].source_url:'/logo512.png'} alt={post.title.rendered} placeholder="blur"/>                                
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