import React, { useEffect } from 'react'
import { photos, videos } from '../../utils/sampleData'
import gsap from 'gsap'


function VideoElement({ src }) {
    return (
        <div className='hero-element'>
            <video
                className='collage-element'
                playsInline=''
                autoPlay
                webkit-playsInline
                loop
                muted
                src={src}></video>

        </div>
    )
}

function ImageElement({ src }) {
    return (
        <div className='hero-element'>
            <img
                src={src}
                className='collage-element'
                alt="" />
        </div>
    )
}

export default function HeroCollage() {
    const leftImages = photos.slice(0, 2)
    const rightImages = photos.slice(2, photos.length)

    const [leftVideo, rightVideo] = videos

    useEffect(() => {
        const tl = gsap.timeline({
            delay: 0.5
        })

        tl.fromTo(
            '.hero-element',
            { y: 300 },
            {
                y: 0,
                duration: 1,
                delay: function (i) {
                    return i * 0.1
                }
            }
        )
    }, [])

    return (
        <div className='hero-collage'>
            <div className="left-column">
                {leftImages.map(src => <ImageElement src={src} />)}
                <VideoElement src={leftVideo} />
            </div>
            <div className="right-column">
                <VideoElement src={rightVideo} />
                {rightImages.map(src => <ImageElement src={src} />)}

            </div>

        </div>)
}