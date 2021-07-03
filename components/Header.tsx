import {Blog,Code_slash,Home, Icon_Menu, Person} from './icons'
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
                    <a className="icon-button name_site" href="/"><b>Apuestanweb</b></a>
                </Link>
                <form className="header_form" >
                    <input type="text" name="" id="" placeholder="Buscar..."/>
                </form>
                <button className="icon-button">
                    <Icon_Menu/>
                </button>
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
                            <a className="icon-button" href="/"><b>Apuestanweb</b></a>
                        </Link>
                    </div>
                    <Link href="#"><a className="icon-button" href="#"><b>item</b></a></Link>
                    <Link href="#"><a className="icon-button" href="#"><b>item</b></a></Link>
                    <Link href="#"><a className="icon-button" href="#"><b>item</b></a></Link>
                    <Link href="#"><a className="icon-button" href="#"><b>item</b></a></Link>
                    <Link href="#"><a className="icon-button" href="#"><b>item</b></a></Link>
                    <Link href="#"><a className="icon-button" href="#"><b>item</b></a></Link>
                </nav>
                {/* <div className={app.loader_app?'loader_app':'loader_app_off'} ><Loader_app /></div> */}
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
                `
            }
        </style>
        </>
    )
}