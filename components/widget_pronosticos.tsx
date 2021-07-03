import Link from "next/link"
import { Pronostico } from "../interfaces/app_interfaces"

type Props={
    pronosticos:Pronostico[]
}
const Widget_Pronosticos = ({pronosticos}:Props)=>{
    pronosticos.sort(function(a,b){
        let date_a = new Date(a.fecha_partido)
        let date_b = new Date(b.fecha_partido)
        return date_a.getTime() - date_b.getTime()
    })
    return(
        <div className="aside_widgets">
        <p>Pronósticos</p>
        <button className="btn_more" >Ver mas</button>
        <ul>
        {
            pronosticos.map((pronostico:Pronostico)=>{
                return(
                    
                    <Link href="/">
                        <a href="/" className="item_w_pronostico" >
                            <div className="item_w_img" >
                                
                                <div>
                                    <img loading="lazy" src={pronostico.img_equipo_1?pronostico.img_equipo_1:'/logo512.png'} alt={pronostico.nombre_equipo_1?pronostico.nombre_equipo_1:'apuestanweb'} />
                                </div>
                                <div>
                                    <img loading="lazy" src={pronostico.img_equipo_2?pronostico.img_equipo_2:'/logo512.png'} alt={pronostico.nombre_equipo_2?pronostico.nombre_equipo_2:'apuestanweb'} />
                                </div>
                                
                            </div>

                            <div className="item_w_eq">
                            <p className="">{pronostico.nombre_equipo_1?pronostico.nombre_equipo_1:'apuestanweb'}</p>                                    
                            <p className="" >{pronostico.nombre_equipo_2?pronostico.nombre_equipo_2:'apuestanweb'}</p> 
                                                        
                            </div>

                            <div className="item_w_av">
                                <p>
                                    {pronostico.average_equipo_1?pronostico.average_equipo_1:0}      
                                </p>
                                <p className="bolder flechita">
                                    {pronostico.average_equipo_2?pronostico.average_equipo_2:0}
                                </p>     
                                        
                            </div>

                            <div>
                                <p>{pronostico.fecha_partido?pronostico.fecha_partido:pronostico.date}</p>
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
export default Widget_Pronosticos