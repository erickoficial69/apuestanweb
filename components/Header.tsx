import {Icon_Menu, Person} from './icons'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { App_context } from '../context/wp_context/app_context'
import Loader_app from './loader_app'

export const Header = () => {
    const {app,app_dispatch} = useContext(App_context)
    const [menu,setMenu] = useState<boolean>(false)
    return (
        <>
            <header>
            <div className="toolbar">
                <button onClick={()=>setMenu(!menu)} className="icon-button">
                    <Icon_Menu/>
                </button>
                <Link href="/">
                    <a onClick={()=>{
                        document.location.pathname!='/'?app_dispatch({type:'loader_app',payload:true}):null
                    }} className="icon-button name_site" href="/"><b>Apuestanweb</b></a>
                </Link>
                <form className="header_form" >
                    <input type="text" name="" id="" placeholder="Buscar..."/>
                </form>
                
                <button id="theme_mode_header" className="btn_light">
                    <span>☀</span>
                    <span>☪</span>
                </button>
                <button className="icon-button">
                    <Person/>
                </button>

                <nav className='principal'>
                    <div className="header_nav">
                        <Link href="/">
                            <a onClick={()=>{
                                document.location.pathname!='/'?app_dispatch({type:'loader_app',payload:true}):null;setMenu(!menu)
                            }} className="icon-button" href="/"><b>Apuestanweb</b></a>
                        </Link>
                    </div>
                    <Link href="/"><a onClick={()=>{
                        document.location.pathname!='/'?app_dispatch({type:'loader_app',payload:true}):null;setMenu(!menu)
                    }} className="icon-button" href="/"><b>Home</b></a></Link>
                    <Link href="/pronostico"><a onClick={()=>{document.location.pathname!='/pronostico'?app_dispatch({type:'loader_app',payload:true}):null;setMenu(!menu)}} className="icon-button" href="/pronostico"><b>pronosticos</b></a></Link>
                    <Link href="/posts"><a onClick={()=>{document.location.pathname!='/posts'?app_dispatch({type:'loader_app',payload:true}):null;setMenu(!menu)}} className="icon-button" href="/posts"><b>Blog</b></a></Link>
                </nav>
                <div className={app.loader_app?'loader_app':'loader_app_off'} ><Loader_app /></div>
            </div>                   
        </header>
        <nav className="sports_bar">
            <a className="icon-button" href="#"><b>mlb</b></a>
            <a className="icon-button" href="#"><b>fifa</b></a>
            <a className="icon-button" href="#"><b>nba</b></a>
            <a className="icon-button" href="#"><b>nfl</b></a>
            <a className="icon-button" href="#"><b>esports</b></a>
            <a className="icon-button" href="#"><b>parley</b></a>
        </nav>
        <div onClick={()=>setMenu(!menu)} className='bg_menu_principal'></div>
        <style jsx >
            {
                `
                nav.principal,.bg_menu_principal{
                    left:${menu?'0':'-100vw'};
                }
                .loader_app, .loader_app_off {
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    overflow: hidden;
                    place-items: center;
                    place-content: center;
                    background: rgba(0, 0, 0, .3);
                    z-index: 9001
                }
                
                .loader_app {
                    display: grid
                }
                
                .loader_app_off {
                    animation: loader_off 2s ease;
                    display: none
                }
                `
            }
        </style>
        </>
    )
}