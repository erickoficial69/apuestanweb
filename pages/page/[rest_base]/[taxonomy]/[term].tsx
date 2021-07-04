import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import CatsMenu from '../../../../components/cats_menu'
import Tarjetita_post_1 from '../../../../components/post_cards/tarjetita_post_1'
import { App_context } from '../../../../context/wp_context/app_context'
import { get_posts_by_taxonomy, get_post_type, get_types } from '../../../../controlers/app_controller'
import { get_taxonomies, get_terms } from '../../../../controlers/taxonomies_controles'
import { Post, WPResp } from '../../../../interfaces/app_interfaces'

type Props={
  wpresp?:WPResp
  page_info:any
  static_params:any
}
const the_Posts_Term = ({page_info,wpresp,static_params}:Props)=>{
  const {app_dispatch} = useContext(App_context)
  const [currentPage,setCurrentPage] = useState<any>({
    page:1,
    total:24,
    posts:[]
  })
  
  const {asPath,isFallback} = useRouter()
  

  if(isFallback) return <section><b>Loading...</b></section>
  
  if(!page_info || !wpresp){
    useEffect(()=>{
      app_dispatch({
        type:'loader_app',
        payload:false
      })
    },[asPath])
    return <section><b>No hay datos en este momento</b></section>
  }
  
  const next = async(param?:number)=>{
    if(param){
      setCurrentPage({...currentPage, page:param})
    }
    if(currentPage.page == 1){
        const wpresp = await get_posts_by_taxonomy({rest_base:page_info.rest_base,per_page:currentPage.total,page:param,taxonomy:static_params.taxonomy,term:static_params.term})
        setCurrentPage({...currentPage, posts:wpresp.data})
        return
      }
    if(wpresp.total_pages && currentPage.page > 1 && currentPage.page <= parseInt(wpresp.total_pages)){
      const wpresp = await get_posts_by_taxonomy({rest_base:page_info.rest_base,per_page:currentPage.total,page:param,taxonomy:static_params.taxonomy,term:static_params.term})
      setCurrentPage({...currentPage, posts:wpresp.data})
    }
  }

  useEffect(()=>{
    app_dispatch({
      type:'loader_app',
      payload:false
    })
    next() 
  },[asPath])

  return <>
      <Head>
      <title>Blog - Diaz web app</title>
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de aplicaciones moviles, desarrollo de e-commerce, desarrollo tiendas online, desarrollo de software"/>
        <meta name="description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/** OG META */}
        <meta property="og:title" content="Blog - diaz web app" />
        <meta property="og:site_name" content={'diaz web app'} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content={process.env.URL_START+asPath} />
        <meta property="og:image" content={process.env.URL_START+"/logo512.png"} />
        <meta property="og:image:secure_url" content={process.env.URL_START+"/logo512.png"} />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="240" />
        {/**TWITTER META */}
        <meta name="twitter:title" content="Blog - diaz web app" /> 
        <meta name="twitter:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={process.env.URL_START+"/logo512.png"} />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="3 minutos" />
        {/**LINK META */}
        <link rel="shortlink" href={process.env.URL_START+asPath} />
        <link rel="canonical" href={process.env.URL_START+asPath} />
      </Head>
    
    <section>         
       {
         wpresp.total && parseInt(wpresp.total) > 0 && currentPage.posts?(
          <div className="container_posts_1" >
              {currentPage.posts.map((post:Post)=><Tarjetita_post_1 post={post} key={post.id} />)}
          </div>
         ):null
       }
    
      <div className="pagination_container">
          {
            wpresp.total_pages?
              currentPage.page > 1?(
                  <button className="icon-button" onClick={()=>next(currentPage.page-1)} style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Anterior</title><path d="M240,424V328c116.4,0,159.39,33.76,208,96,0-119.23-39.57-240-208-240V88L64,256Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </button>
              ):(
                <button className="icon-button" style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Anterior</title><path d="M240,424V328c116.4,0,159.39,33.76,208,96,0-119.23-39.57-240-208-240V88L64,256Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </button>
              )
            :null
          }
          {
            wpresp.total_pages?
              currentPage.page >= 1 && currentPage.page < parseInt(wpresp.total_pages) ?(
                  <button className="icon-button" onClick={()=>next(currentPage.page+1)} style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Siguiente</title><path d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </button>
              ):currentPage.page >= 1 && currentPage.page == parseInt(wpresp.total_pages)?(
                <button className="icon-button" style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Siguiente</title><path d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </button>
              ):null
            :null
          }
      </div>
    </section> 
    <aside>
      <CatsMenu page_info={page_info} />
    </aside>    
  </>
  
}
export const getStaticPaths:GetStaticPaths = async()=>{
  let params = {rest_base:'_',taxonomy:'_',term:'_'}
  const paths =[{params}]
  try{
    const taxonomies = await get_taxonomies()
    const tax_keys = Object.keys(taxonomies)
    const terms = await get_terms(tax_keys)
    const types = await get_types()
    const types_array:any = Object.values(types)
   
    for(let type of types_array){
      for(let taxonomy of terms){
        if(taxonomy.terms && taxonomy.terms.length > 0){
          for(let term of taxonomy.terms){
            paths.push({params:{rest_base:type.rest_base,taxonomy:taxonomy.rest_base,term:term.slug}})
          }
        }
      }
    }
    
    return {paths,fallback:false}
  }catch(err){
    console.error(err)
    return {paths,fallback:false}
  }
}
export const getStaticProps:GetStaticProps = async({params}:GetStaticPropsContext)=>{
  const {rest_base,taxonomy,term}:any = params
  
  if(taxonomy!=='_' && rest_base!=='_'){
    const wpresp:WPResp = await get_posts_by_taxonomy({rest_base:rest_base,taxonomy,term,per_page:24})
    if(wpresp && wpresp.data.length > 0){
      let page_info = await get_post_type({type:wpresp.data[0].type}) 
      
        page_info = {...page_info,taxonomies:await get_terms(page_info.taxonomies)}
      
        
      return {
        props:{
          wpresp,
          page_info,
          static_params:params
        },
        revalidate:1
      }
    }
      return {props:{},revalidate:1}
  
  }else{
    return {props:{},revalidate:1}
  }
}

export default the_Posts_Term
