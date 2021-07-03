import Link from 'next/link'
import { useContext } from 'react'
import { App_context } from '../context/wp_context/app_context'
import { Styled_sidebar } from './styled_components/content_sidebar'
type Params={
    setShow_Cats:(params:any)=>void
    page_info:any
    toggle_element:(param:any)=>void
    show_cats:boolean
}
const CatsMenu = ({page_info,setShow_Cats,toggle_element,show_cats}:Params)=>{
    const {app_dispatch} = useContext(App_context)
    return (
      <>
        {
          page_info.taxonomies.map((taxonomy:any,i:number)=>{
            return <div className="aside_widgets" key={i} >
              <p onClick={toggle_element} >{taxonomy.name}</p>
              <ul className="view_items" >
                {
                  taxonomy.terms.map((ter:any,ti:number)=>{
                    const destination = page_info.rest_base == 'posts'?'/blog/'+taxonomy.rest_base+"/"+ter.slug:page_info.rest_base+"/"+taxonomy.rest_base+"/"+ter.slug
                    return <li key={ti}><Link href={destination} ><a onClick={()=>{document.location.pathname!=destination?app_dispatch({type:'loader_app',payload:true}):null}} href={destination}>{ter.name}</a></Link></li>
                  })
                }
              </ul>
            </div>
          })
        }
       </> 
    )
}
export default CatsMenu