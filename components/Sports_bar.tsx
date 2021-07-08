import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Sports_bar = () => {
    const [sports,setSports] = useState<any[]>([])

    const get_term = async()=>{
       const req_terms = await fetch(`${process.env.API}/wp/v2/deportes`)
       const terms = await req_terms.json()
       const terms_filtered = terms.filter((term:any)=>term.count > 0 && term.parent == 0)
       setSports(terms_filtered)
    }

    useEffect(()=>{
        get_term()
    },[])

    return (
        <>
            
        <nav className="sports_bar">
            {
                sports.map((sport:any,i:number)=>{
                    return (
                        <Link key={i} href={`/pronostico/filter/deportes/${sport.slug}`} >
                            <a className="icon-button" href={`/pronostico/filter/deportes/${sport.slug}`}><b>{sport.name}</b></a>
                        </Link>
                    )
                })
            }
        </nav>
        
        </>
    )
}