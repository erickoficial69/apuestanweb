import Link from "next/link"
import { useContext } from "react"
import { App_context } from "../../context/wp_context/app_context"
import { Post } from "../../interfaces/app_interfaces"

type Props={
    post:Post,
}
const Tarjetita_post_1 = ({post}:Props)=>{
    const {app_dispatch} = useContext(App_context)
    return (
            <div className="tarjetita_post_1" >
                <img loading="lazy" width="200" height="200" src={post._embedded && post._embedded["wp:featuredmedia"]?post._embedded["wp:featuredmedia"][0].source_url:'/logo512.png'} alt={post.title.rendered} />
                                
                <p>{post.excerpt?.rendered.replace('<p>','').replace('</p>','')}</p>
                <Link href={`/${post.type}/${post.slug}`} >
                    <a onClick={()=>{document.location.pathname!=`/${post.slug}`?app_dispatch({type:'loader_app',payload:true}):null}} >Ver más</a>
                </Link>
                
                <style jsx>
                    {
                       `
                                           
                    /* Tarjetita post*/
                    .tarjetita_post_1{
                        width:100%;
                        height:100%;
                        border-radius: var(--radius);
                        box-shadow: 0px 0px 10px var(--shadow);
                        position:relative;
                        background:var(--bg-tarjetitas);
                        overflow: hidden;
                        text-align: center;
                        grid-column: auto / span 1;
                    }
                    .tarjetita_post_2:first-child > .content_post > *{
                        text-align: left;
                        display: block;
                        width:100%;
                    }
                    
                    .tarjetita_post_1 > img{
                        width:100%;
                        height:100%;
                        object-fit: cover;
                        position:relative;
                        z-index:1;
                    }
                    
                    .tarjetita_post_1 > img:hover{
                        width:110%;
                        height:110%;
                    }
                    .tarjetita_post_1 > img:hover ~ a, .tarjetita_post_1 > img:hover ~ p{
                        backdrop-filter:unset;
                    }
                    
                    .tarjetita_post_1 > p,.tarjetita_post_1 > a{
                        width:100%;
                        position:absolute;
                        left:0;
                        z-index:1;
                        background:rgba(0,0,0, .6);
                        color:white;
                        backdrop-filter:blur(8px);
                    }
                    .tarjetita_post_1 > p{
                        height:30%;
                        bottom:10%;
                    }
                    .tarjetita_post_1 > a{
                        height:10%;
                        bottom:0;
                        font-weight:bold;
                        background:rgba(0,0,0, .7);
                    }
                    
                    .tarjetita_post_1 > a:hover{
                        text-shadow:0px 1px var(--secondary-color);
                    }
                    
                        `
                    }
                </style>
            </div>
        
    )
}

export default Tarjetita_post_1