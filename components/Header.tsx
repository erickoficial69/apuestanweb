import {Icon_Menu, Person} from './icons'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { App_context } from '../context/wp_context/app_context'
import Loader_app from './loader_app'
import {Sports_bar} from './Sports_bar'

export const Header = () => {
    const {app,app_dispatch} = useContext(App_context)
    const [menu,setMenu] = useState<boolean>(false)
    const [darkmode,setDarkmode] = useState<boolean>(false)
    
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
                
                <button onClick={()=>setDarkmode(!darkmode)} id="theme_mode_header">
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
                    <Link href="/events"><a onClick={()=>{document.location.pathname!='/events'?app_dispatch({type:'loader_app',payload:true}):null;setMenu(!menu)}} className="icon-button" href="/events"><b>pronosticos</b></a></Link>
                    <Link href="/posts"><a onClick={()=>{document.location.pathname!='/posts'?app_dispatch({type:'loader_app',payload:true}):null;setMenu(!menu)}} className="icon-button" href="/posts"><b>Blog</b></a></Link>
                </nav>
                {/**Loader & background menu */}
                <div className={app.loader_app?'loader_app':'loader_app_off'} ><Loader_app /></div>
                <div onClick={()=>setMenu(!menu)} className='bg_menu_principal'></div>
            </div>                   
        </header>
        <Sports_bar />
        <style jsx global>
            {
                `
                :root{
                    --bg-app:${!darkmode?'rgb(242, 242, 242)':'rgb(20,20,20)'};
                    --bg-page:${!darkmode?'rgba(255, 255, 255, 1)':'rgb(30,30,30)'};
                    --font-color:${!darkmode?'rgba(48,48,48, 1)':'rgb(255,255,255)'};
                    --bg-tarjetitas:${!darkmode?'rgb(250, 250, 250)':'rgb(40,40,40)'};
                    --primary-color:#ff4141;
                    --secondary-color:#1e73bf;
                    --icon-color:white;
                    --shadow:rgba(0,0,0, .12);
                    
                   
                    --bg-average:rgba(30, 115, 191, .25);
                    --font-color-2:#808080;
                    --color-sub-title:#fff;
                    --color-title-sidebar:rgb(30,115,191);
                    --bg-sub-title:#043a69;
                }
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
                //////
                #theme_mode_header span{
                    z-index: 1;
                    text-align:center;
                    height:22px;
                    font-size:15px;
                    line-height:1.4;
                }
                #theme_mode_header{
                    position: relative;
                    z-index: 3;
                    width:50px;
                    min-width:50px;
                    max-width:50px;
                    display:flex;
                    flex-flow:row nowrap;
                    justify-content:space-between;
                    box-shadow:0px 0px 2px black;
                    border-radius:10px;
                    height:22px;
                    cursor:pointer;
                }
                #theme_mode_header::after{
                    display:grid;
                    place-items: center;
                    place-content: center;
                    color:white;
                    z-index: -1;
                    content:"";
                    position: absolute;
                    border-radius: 50%;
                    background: var(--secondary-color);
                    left:${!darkmode?'4px':'28px'};
                    top:2px;
                    transition: all .3s ease;
                    width:18px;
                    height:18px;
                }
                ////////
                `
            }
        </style>
        </>
    )
}