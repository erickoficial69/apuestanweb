const CriticalStyles = ()=>{
    return(
        <style jsx global>
            {
                `
                :root{
                    --bg-app:rgb(242, 242, 242);
                    --font-color:#484848;
                    --primary-color:#ff4141;
                    --secondary-color:#1e73bf;
                    --icon-color:white;
                    --shadow:rgba(0,0,0, .12);
                    
                    --bg-page:rgba(255, 255, 255, 1);
                    --bg-tarjetitas:rgb(250, 250, 250);
                    --bg-average:rgba(30, 115, 191, .25);
                    --font-color-2:#808080;
                    --color-sub-title:#fff;
                    --color-title-sidebar:rgb(30,115,191);
                    --bg-sub-title:#043a69;
                    --shadow-length: 36px ;
                }
                :root{	
                    --height-header:50px;
                    --radius:5px;
                    --index-header:3;
                    --padding-horizontal:0;
                    --max-width: 1173px;
                }
                *{
                    margin: 0;
                    box-sizing: border-box;
                    scroll-behavior: smooth;
                    transition: all .3s ease;
                    text-decoration: none;
                    outline:unset;
                    border:unset;
                }
                body,a{
                    color:var(--font-color)
                }
                button{
                    background:transparent;
                }
                .icon-button{
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    justify-content: space-between;
                }
                .icon-button > *{
                    text-transform: uppercase;
                    margin: 0 2px;
                    width:max-content;
                }
                .icon-button svg, .icon-button img{
                    width:24px;
                    height: 24px;
                    object-fit: contain;
                }
                header,footer{
                    width:100%;
                }
                body{
                    padding-top: var(--height-header);
                    background-color: var(--bg-app);
                }
                header{
                    display: grid;
                    place-content: center;
                    place-items: center;
                    height: var(--height-header);
                    z-index: var(--index-header);
                    position: fixed;
                    top:0;
                    left:0;
                    right:0;
                    background-color: var(--primary-color);
                }
                
                main,.toolbar,nav.sports_bar{
                    width:98vw;
                    position: relative;
                    margin: auto;
                }
                .toolbar,.toolbar > nav.principal,nav.sports_bar{
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: flex-start;
                    align-items: center;
                    align-content: flex-start;
                }
                .toolbar{
                    justify-content: space-between;
                    background:rgba(0,0,0, .2);
                    border-radius:15px;
                    padding: 5px;
                }
                .toolbar .name_site{
                    display:none;
                }
                .toolbar *{
                    color:white;
                }
                .toolbar .header_form,.toolbar .header_form input{
                    background:transparent;
                    width:100%;
                    display:block;
                }
                .toolbar nav.principal .header_nav{
                    border-bottom:1px solid var(--shadow);
                    padding:5px 2px;
                }
                .toolbar nav.principal .header_nav a{
                    text-align:center;
                }
                .toolbar nav.principal, .bg_menu_principal{
                    position:fixed;
                    top:0;
                    left:-100vw;
                    right:0;
                    bottom:0;
                    background:rgba(0,0,0, .2);
                    width:100vw;
                    height:100vh;
                    z-index:var(--index-header);
                }
                .bg_menu_principal{
                    z-index:2;
                    transition:unset;
                }
                .toolbar nav.principal{
                    width:250px;
                    background:var(--bg-app);
                    flex-flow:column;
                }
                .toolbar nav.principal *{
                    display:block;
                    width:100%;
                    color:var(--font-color);
                }
                nav.sports_bar{
                    box-shadow:0px 1px 2px var(--shadow);
                    border-radius:0 0 5px 5px;
                    background:var(--bg-page);
                    padding:10px 2px;
                    overflow:auto;
                }
                nav.sports_bar a{
                    margin:0 10px;
                }
                main{
                    display:grid;
                    grid-template-columns:1fr;
                }
                main section,.aside_widgets{
                    background:var(--bg-page);
                    width:100%;
                    border-radius: var(--radius);
                    box-shadow: 0px 0px var(--shadow-length) var(--shadow);
                    height: max-content;
                    margin-top:10px ;
                }
                //////
                #theme_mode_header span,.btn_light::after,.btn_dark::after{
                    z-index: 1;
                    font-size:16px;
                    text-align:center;
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
                }
                .btn_light::after{
                    display:grid;
                    place-items: center;
                    place-content: center;
                    color:white;
                    z-index: -1;
                    content:"";
                    position: absolute;
                    border-radius: 50%;
                    background: var(--secondary-color);
                    left:2px;
                    top:1px;
                    transition: all 1s ease;
                    width:18px;
                    height:18px;
                }
                ////////
                @media (min-width:640px){
                    .toolbar .name_site{
                        display:flex;
                    }
                    .toolbar .header_form{
                        margin:0 5px;
                        width:calc(100% - 200px);
                    }
                }
                @media(min-width:1024px){
                    main,header .toolbar, nav.sports_bar{
                        max-width:960px;
                    }
                    main{
                        grid-template-columns:1fr 250px;
                        gap:5px;
                    }
                    .toolbar{
                        background:unset;
                    }
                }
                .aside_widgets{
                    overflow: hidden;
                    position: relative;
                }
                .aside_widgets > p{
                    border-bottom: 1px solid var(--shadow);
                    color: var(--color-title-sidebar);
                    font-size: 23px;
                    line-height:32px;
                    text-align:center;
                    width:100%;
                    font-weight:bold;
                    font-size: 16px;
                }
                
                .aside_widgets > .btn_more{
                    z-index:2;position:absolute;bottom:0;
                    padding:8px;width:100%;background:var(--secondary-color);
                    display: none;
                    font-weight: bold;
                    font-size: 19px;
                    color:white;
                }
                .aside_widgets > .btn_more:focus + ul{
                    max-height: max-content;
                    z-index:2;
                }
                .aside_widgets > .btn_more:focus{
                    z-index: -1;
                }
                .aside_widgets > ul{
                    width:100%;
                    max-height: 310px;
                    overflow-y: hidden;
                    transition: all 1s ease;
                    position: relative;
                    z-index:1;
                    padding:0;
                }
                
                .aside_widgets > ul > a:nth-child(2n){
                    background: var(--bg-tarjetitas);
                }
                .aside_widgets > ul > a div {
                    display: flex;
                    flex-flow: column;
                    position: relative;
                    justify-content: center;
                    width:100%;
                }
                `
            }
        </style>
    )
}
export default CriticalStyles