import React, { useState, useEffect, useRef } from 'react'
import { featureSlides } from '../../utils/sampleData'
import cn from 'classnames'
import FeatureSlide from './FeatureSlide'
import { gsap } from 'gsap'


function RenderImages({ activeFeatureIndex }) {
    return featureSlides.map(({ imageUrl }, index) => (
        <img
            style={{ backgroundImage: `url(${imageUrl})` }}
            key={imageUrl}
            className={cn({
                'as-primary': activeFeatureIndex === index
            })}
            alt="" />

    ))
}

export default function FeatureSlides() {
    const [activeFeatureIndex, setFeatureIndex] = useState(0);
    const featureSliderRef = useRef(null);
    const featureSlidesRightRef = useRef(null);
    ;

    useEffect(() => {
        function stopTrigger() {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: featureSlidesRightRef.current,
                    start: "top top",
                    end: () => `+=${featureSliderRef.current.offsetHeight}`,
                    scrub: true,
                    pin: true,
                },
            });

            return tl;
        }
        const master = gsap.timeline();
        master.add(stopTrigger()); //with a gap of 2 seconds
    }, []);
    return (
        <div
            ref={featureSliderRef}
            className='feature-slides-container'>
            <div className="feature-slides-left">
                {featureSlides.map((feature, index) => (
                    <FeatureSlide
                        updateActiveImage={setFeatureIndex}
                        key={feature.imageUrl}
                        title={feature.title}
                        description={feature.description}
                        index={index}
                    />
                ))}
            </div>
            <div
                ref={featureSlidesRightRef}
                className="feature-slides-right">
                <RenderImages activeFeatureIndex={activeFeatureIndex} />
            </div>
        </div>)
}