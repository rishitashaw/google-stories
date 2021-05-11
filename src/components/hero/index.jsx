import React from 'react'
import HeroHeader from './HeroHeader'
import HeroCollage from './HeroCollage'
import HeroFooter from './HeroFooter'
import HeroPhoneBlock from './HeroPhoneBlock'
import HeroUsedBy from './HeroUsedBy'
import './style.scss'

export default function Hero() {
    return (
        <div className='hero'>
            <HeroHeader />
            <div className='hero-media'>
                <HeroCollage />
                <HeroPhoneBlock />

            </div>
            <HeroUsedBy />
            <HeroFooter />
        </div>
    )
}