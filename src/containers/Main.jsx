import React, { useState, useEffect } from 'react'
import Hero from '../components/hero/index'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FeatureSlides from '../components/Feautre';

export default function Main() {

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 500);
    }, [])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    }, [])

    return loader ? (
        <div className='loader' />
    ) : (
        <div>
            <Hero />
            <FeatureSlides />
            <div className='footer'>
                <h1>Made with Love by Rishita</h1>
            </div>
        </div>
    )

}