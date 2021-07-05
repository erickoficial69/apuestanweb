import Link from 'next/link'
import { useContext } from 'react'
import { App_context } from '../context/wp_context/app_context'
type Params={
    page_info:any
}
const CatsMenu = ({page_info}:Params)=>{
    const {app_dispatch} = useContext(App_context)
    return (
      <>
        {
          page_info.taxonomies.map((taxonomy:any,i:number)=>{
            return <div className="aside_widgets" key={i} >
              <p>{taxonomy.name}</p>
              <ul className="view_items cats_items" >
                {
                  taxonomy.terms.map((ter:any,ti:number)=>{
                    const destination = "/"+page_info.rest_base+"/filter/"+taxonomy.rest_base+"/"+ter.slug
                    return <li key={ti}><Link href={destination}  ><a onClick={()=>{document.location.pathname!=destination?app_dispatch({type:'loader_app',payload:true}):null}} href={destination}>{ter.name}</a></Link></li>
                  })
                }
              </ul>
            </div>
          })
        }
        <style jsx>
          {
            `
              .aside_widgets,.cats_items{
                height:max-content;
                max-height:unset;
                overflow:visible;
              }
              .cats_items{
                display:flex;
                flex-flow:row wrap;
                justify-content:flx-start;
                list-style: none;
              }
              .cats_items > li{
                width:max-contant;
              }
              .cats_items > li a{
                padding:2px 5px;
                margin:1px 5px;
              }
              .cats_items > li a:hover{
                color:var(--secondary-color);
              }
            `
          }
        </style>
       </> 
    )
}
export default CatsMenu