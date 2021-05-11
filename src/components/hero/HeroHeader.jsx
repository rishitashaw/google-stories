import React, { useEffect } from 'react'
import gsap from 'gsap'

export default function HeroHeader() {

    useEffect(() => {
        gsap.fromTo(
            '#hero-text',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1.2,
                delay: 0.5
            }


        )

    }, [])


    return <div className='hero-text-section'>
        <h1 id='hero-text'>
            Stories meet their <br />wildest audience ever
        </h1>
    </div>
}