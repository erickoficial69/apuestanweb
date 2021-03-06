import { useContext, useEffect, useMemo } from 'react'
import { App_context } from '../context/wp_context/app_context'
import Head from 'next/head'
import { get_all_posts } from '../controlers/app_controller'
import { Post, WPResp } from '../interfaces/app_interfaces'
import dynamic from 'next/dynamic'
import { GetStaticProps, GetStaticPropsContext } from 'next'

const Tarjetita_post_1 = dynamic(
  () => import('../components/post_cards/tarjetita_post_1'),
  { loading: () => <p>Loading posts...</p> }
)

const Widget_posts = dynamic(
  () => import('../components/widget_posts'),
  { loading: () => <p>Loading posts...</p> }
)

const Widget_Pronosticos = dynamic(
  () => import('../components/widget_pronosticos'),
  { loading: () => <p>Loading posts...</p> }
)

type Props={
  resp_pronosticos:WPResp
  resp_posts:WPResp
}

const IndexPage = ({resp_pronosticos,resp_posts}:Props) => {
    const {app,app_dispatch} = useContext(App_context)

    const widget_pronosticos = useMemo(()=><Widget_Pronosticos pronosticos={resp_pronosticos?resp_pronosticos.data:[]} />,[])
    const widget_posts = useMemo(()=><Widget_posts posts={resp_posts?resp_posts.data:[]} />,[])
    
    useEffect(()=>{
        app_dispatch({type:'get_all_posts',payload:resp_posts})
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
        <meta property="og:image" content={process.env.URL_START+"/logo56.png"} />
        <meta property="og:image:secure_url" content={process.env.URL_START+"/logo56.png"} />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="60" />
        {/**TWITTER META */}
        <meta name="twitter:title" content="Apuestanweb" /> 
        <meta name="twitter:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={process.env.URL_START+"/logo56.png"} />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="3 minutos" />
        {/**LINK META */}
        <link rel="shortlink" href={process.env.URL_START} />
        <link rel="canonical" href={process.env.URL_START} />
    </Head>
    
    <section>
    {
        app.posts && app.posts.total && parseInt(app.posts.total) > 0?(
            <section id="news" >         
            <div className="container_posts_1" >
                  {app.posts.data.map((post:Post)=><Tarjetita_post_1 post={post} key={post.id} />)}
            </div>
          </section>
        ):<section>No hay datos</section>
    }   

    </section>
    <aside>
        {
            resp_pronosticos && resp_pronosticos.data.length > 0?(
              widget_pronosticos
            ):null
        }
        {
            app.posts && app.posts.total && parseInt(app.posts.total) > 0?(
              widget_posts
            ):null
        }           
    </aside>
  </>
}

export const getStaticProps:GetStaticProps = async(_:GetStaticPropsContext)=>{
  try{
      const resp_pronosticos = await get_all_posts({rest_base:process.env.APP_ENV !== 'production'?'pronostico':"pronostico",page:1,per_page:6})
      const resp_posts = await get_all_posts({rest_base:'posts',page:1,per_page:6})
      return{
        props:{
          resp_pronosticos,
          resp_posts 
        },
        revalidate:1
      }
  }catch(err){
    console.log(err)
    return{
      props:{},
      revalidate:1
    }
  }
}
export default IndexPage
