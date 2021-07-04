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
                <div className="img_post" >
                    <img loading="lazy" src={post._embedded && post._embedded["wp:featuredmedia"]?post._embedded["wp:featuredmedia"][0].source_url:'/logo512.png'} alt="titulo del post" />
                </div>
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
                    .tarjetita_post_1:hover > .img_post{
                        top:-15%;
                        left: -15%;
                        bottom: -15%;
                        right: -15%;
                    }
                    .tarjetita_post_1 > .img_post{
                        overflow: hidden;
                        position: absolute;
                        top:0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        z-index: 1;
                    }
                    .tarjetita_post_1 > .img_post::before{
                        content: '';
                        width: 100%;
                        height: 100%;
                        background: rgb(0,0,0);
                        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7934918372459661) 42%, rgba(0,0,0,0) 100%);
                        z-index: 2;
                        position: absolute;
                        top:0;
                        left:0;
                    }
                    .tarjetita_post_1 > p, .tarjetita_post_1 > a{
                        color: white;
                        position: relative;
                        z-index: 2;
                    }
                    .tarjetita_post_1 > p{
                        height:32%;
                        overflow: hidden;
                        padding: 10px;
                        margin-top: 45%;
                        font-weight: bold;
                        line-height: 1.2;
                        font-size: 18px;
                        margin-bottom: 20px;
                        text-align: justify;
                    }
                    .tarjetita_post_1 > a{
                        margin: auto;
                        padding: 5px 20px;
                    }
                    .tarjetita_post_1 > .img_post > img{
                        width:100%;
                        height:100%;
                        object-fit: cover;
                    }
                    @media(min-width:805px){
                        .tarjetita_post_1 > p{
                            height:35%;
                            padding: 10px;
                            margin-top: 40%;
                        }
                    }
                        `
                    }
                </style>
            </div>
        
    )
}

export default Tarjetita_post_1