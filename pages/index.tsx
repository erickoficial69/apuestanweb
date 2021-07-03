import { useContext, useEffect, useState } from 'react'
import { App_context } from '../context/wp_context/app_context'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { get_all_posts } from '../controlers/app_controller'
import { Post, WPResp } from '../interfaces/app_interfaces'
import Widget_Pronosticos from '../components/widget_pronosticos'
import Widget_posts from '../components/widget_posts'
import Tarjetita_post_1 from '../components/post_cards/tarjetita_post_1'

type Props={
    resp:WPResp
    resp_posts:WPResp
}
const IndexPage = ({resp,resp_posts}:Props) => {
    const {app_dispatch} = useContext(App_context)
    const [currentPage,setCurrentPage] = useState<any>({
        page:1,
        total:24,
        posts:resp.data
      })
    const [statePosts,setStatePosts] = useState<any>({
        page:1,
        total:24,
        posts:resp.data
      })

    const next = async(param?:number)=>{
        if(param){
          setCurrentPage({...currentPage, page:param})
        }
        if(currentPage.page == 1){
            const wpresp = await get_all_posts({rest_base:'posts',per_page:currentPage.total,page:param})
            setCurrentPage({...statePosts, posts:wpresp.data})
            return
        }
        if(resp.total_pages && currentPage.page > 1 && currentPage.page <= parseInt(resp.total_pages)){
            const wpresp = await get_all_posts({rest_base:'posts',per_page:currentPage.total,page:param})
            setCurrentPage({...statePosts, posts:wpresp.data})
        }
      }

    const next_posts = async(param?:number)=>{
        if(param){
          setStatePosts({...statePosts, page:param})
        }
        if(statePosts.page == 1){
            const wpresp = await get_all_posts({rest_base:'posts',per_page:statePosts.total,page:param})
            setStatePosts({...statePosts, posts:wpresp.data})
            return
        }
        if(resp.total_pages && statePosts.page > 1 && statePosts.page <= parseInt(resp.total_pages)){
            const wpresp = await get_all_posts({rest_base:'posts',per_page:statePosts.total,page:param})
            setStatePosts({...statePosts, posts:wpresp.data})
        }
      }

    useEffect(()=>{
        app_dispatch({type:'loader_app',payload:false})
    },[])
    return <>
    <Head>
        <title>Apuestanweb</title>
        <meta name="author" content="diaz web app" />
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de e-commerce, desarrollo de tiendas online"/>
        <meta name="description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/** OG META */}
        <meta property="og:title" content="Apuestanweb" />
        <meta property="og:site_name" content={'diaz web app'} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content={process.env.URL_START} />
        <meta property="og:image" content={process.env.URL_START+"/logo512.png"} />
        <meta property="og:image:secure_url" content={process.env.URL_START+"/logo512.png"} />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="240" />
        {/**TWITTER META */}
        <meta name="twitter:title" content="Apuestanweb" /> 
        <meta name="twitter:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={process.env.URL_START+"/logo512.png"} />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="3 minutos" />
        {/**LINK META */}
        <link rel="shortlink" href={process.env.URL_START} />
        <link rel="canonical" href={process.env.URL_START} />
    </Head>
    
    
   
    <section>
        <div className="container_posts_1">
            {
                resp_posts.total && parseInt(resp_posts.total) > 0?(
                    statePosts.posts.map((post:Post)=><Tarjetita_post_1 post={post} key={post.id}/>)
                ):null
            }
        </div>
    </section>
    <aside>
        {
            resp.total && parseInt(resp.total) > 0?(
                <Widget_Pronosticos pronosticos={currentPage.posts} />
            ):null
        }
        {
            resp_posts.total && parseInt(resp_posts.total) > 0?(
                <Widget_posts posts={statePosts.posts} />
            ):null
        }           
    </aside>
  </>
}

export const getStaticProps:GetStaticProps = async()=>{
    const resp = await get_all_posts({rest_base:'pronostico',page:1,per_page:12})
    const resp_posts = await get_all_posts({rest_base:'posts',page:1,per_page:12})
    return{
        props:{
            resp,
            resp_posts
        },
        revalidate:1
    }
}
export default IndexPage
