import React, { useRef, useEffect } from 'react'
import imgSrc from '../../assets/hero-phone-frame-v2.png'
import gsap from 'gsap'
const videoUrl = 'https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0'


export default function HeroPhoneBlock() {

    const phoneRef = useRef(null)

    useEffect(() => {

        function intro() {
            const tl = gsap.timeline();

            tl.fromTo(phoneRef.current,
                { y: 200 },
                {
                    y: -50,
                    duration: 1
                }
            )
            return tl
        }
        function stopTrigger() {
            const tl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: phoneRef.current,
                    start: 'top top',
                    end: '+=900',
                    pin: true,
                    scrub: true
                }
            });
            tl.to(phoneRef.current, { scale: 1 }, '+=.2');
            tl.to(
                '.hero', {
                backgroundColor: '#252525',
                duration: 0.25
            }, '-=.4'
            )
            return tl
        }

        const master = gsap.timeline()
        master.add(intro());
        setTimeout(() => {
            master.add(stopTrigger())
        }, 1000)

    }, [])

    return (

        <div className="hero-phone-block" ref={phoneRef}>
            <div
                className="hero-phone-template"
                style={{ backgroundImage: `url(${imgSrc})` }}>
                <video
                    src={videoUrl}
                    playsInline=''
                    autoPlay
                    muted
                    webkit-playsInline
                    loop
                    className='collage-element'
                ></video>
            </div>
        </div>
    )
}