import Link from "next/link"
import { useContext } from "react"
import { App_context } from "../../context/wp_context/app_context"
import { Pronostico } from "../../interfaces/app_interfaces"

type Props={
    post:Pronostico,
}
const Tarjetita_pronostico_1 = ({post}:Props)=>{
    const {app_dispatch} = useContext(App_context)
    return (
        <Link href={`/${post.slug}`} >
            <a className="tarjetita_pronostico_1" onClick={()=>{document.location.pathname!=`/${post.slug}`?app_dispatch({type:'loader_app',payload:true}):null}} >
            <h3 className="title_pronostico" >{post._embedded["wp:term"][0][0]?post._embedded["wp:term"][0][0].name:'apuestanweb'} {post._embedded["wp:term"][0][1]?post._embedded["wp:term"][0][1].name : 'apuestanweb'}</h3>
              
            <div className="equipos_pronostico" >
                <div>
                    <img loading="lazy" src={post["img_equipo_1"]?post["img_equipo_1"]:'/logo512.png'} alt={post["nombre_equipo_1"]?post["nombre_equipo_1"]:'apuestanweb'}/>
                    <p>{post["nombre_equipo_1"]?post["nombre_equipo_1"]:'apuestanweb'}</p>  
                </div>
                <div>
                    <p>{post["fecha_partido"]?post["fecha_partido"]:'apuestanweb'}</p>
                </div>
                <div>
                    <img loading="lazy" src={post["img_equipo_2"]?post["img_equipo_2"]:'/logo512.png'} alt={post["nombre_equipo_2"]?post["nombre_equipo_2"]:'apuestanweb'}/>   
                    <p>{post["nombre_equipo_2"]?post["nombre_equipo_2"]:'apuestanweb'}</p>  
                </div>
            </div>
            <div className="average_pronostico" >
                <p>{post["average_equipo_2"]?post["average_equipo_2"]:'apuestanweb'}</p>
                <p>{post["cuota_empate_pronostico"]?post["cuota_empate_pronostico"]:'apuestanweb'}</p>
                <p>{post["average_equipo_2"]?post["average_equipo_2"]:'apuestanweb'}</p>
            </div>

                <style jsx>
                    {
                        `
                        .sticker_tarjetita{
                            width:100%;
                            position: absolute;
                            left:0;
                            top:0;
                            height: 100%;
                            z-index: 1;
                            overflow:hidden ;
                        }
                        .sticker_tarjetita::before{
                            content: attr(data);
                            width:35%;
                            position: absolute;
                            left:-10%;
                            top:5%;
                            background: var(--primary-color);
                            height: 20px;
                            transform: rotate(-45deg);
                            z-index: 2;
                            color: white;
                            text-align: center;
                            line-height: 20px;
                        }
                        /* Tarjetita pronostico*/
                        .tarjetita_pronostico_1{
                            border-radius: var(--radius);
                            box-shadow: 0px 0px 10px var(--shadow);
                            margin:5px auto;
                            position:relative;
                            background:var(--bg-tarjetitas);
                            width: 95%;
                            border:1px solid var(--bg-average) ;
                            padding-bottom: 5px;
                            height:180px;
                            max-height:190px;
                            overflow: hidden;
                            animation: in .5s;
                        }
                        
                        .tarjetita_pronostico_1 p{
                            text-align: center;
                            word-break: break-all;
                        }
                        
                        .title_pronostico {
                            height:30px;
                            font-size: 14px;
                            line-height: 2;
                            grid-column: 1 / span 3;
                            border-radius: var(--radius) var(--radius) 0 0;
                            color:white;
                            background: var(--secondary-color);
                            text-align: center;
                        }
                        
                        .equipos_pronostico > div{
                            display: grid;
                            grid-template-columns: 100%;
                            align-items: center;
                            padding:10px;
                        }
                        .equipos_pronostico > div img{
                            width:64px;
                            height:64px;
                            border-radius: 50%;
                            margin: 0 auto;
                            border: 1px solid var(--secondary-color);
                            box-shadow: 0px 0px 10px var(--bg-average);
                            background:white;
                            object-fit: contain;
                            padding: 10px;
                        }
                        .equipos_pronostico,.average_pronostico{
                            display:grid;
                            grid-template-columns:repeat(3,1fr);
                            place-content: center;
                            place-items: center;
                        }
                        .tarjetita_pronostico_1 .average_pronostico{
                            width:94%;
                            gap:5px;
                            margin:auto;
                        }
                        .equipos_pronostico p{
                            height:22px;
                            overflow-y: hidden;
                            margin-top:5px;
                        }
                        .average_pronostico p{
                            background-color: var(--bg-average);
                            padding:0 10%;
                            font-weight: bold;
                            height:24px;
                            line-height: 1.4;
                            overflow:hidden;
                        }
                        
                        /*tarjetita en pagina unica */
                        .single_pronostico{
                            margin: 0 0 20px 0 !important;
                            width: 100% !important;
                            background: var(--bg-page);
                            height:max-content;
                            max-height: unset;
                        }
                        .single_pronostico img{
                            width:20vmin !important;
                            height:20vmin !important;
                        }
                        .single_pronostico .title_pronostico {
                            padding: 5px;
                            font-size: 18px;
                            height: unset !important;
                            background: var(--bg-sub-title) !important;
                        }
                        .single_pronostico .equipos_pronostico,.single_pronostico .average_pronostico{
                            width: 98%;
                            margin: 0 auto;
                        }
                        .single_pronostico .average_pronostico{
                            height:30px;
                        }
                        .single_pronostico .equipos_pronostico p{
                            font-size: unset;
                            font-weight: bold;
                            word-break: break-all;
                        }
                                                
                        @media(min-width:860px){
                            
                            .single_pronostico .equipos_pronostico,.single_pronostico .average_pronostico{
                                margin: auto;
                            }
                            
                        }
                        @keyframes in{
                            0%{
                                opacity: .1;
                            }
                            100%{
                                opacity: 1;
                            }
                        }
                        
                        
                        `
                    }
                </style>
            </a>
        </Link>
    )
}

export default Tarjetita_pronostico_1