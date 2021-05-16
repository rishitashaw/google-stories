import React, { useEffect, useRef, useCallback } from 'react'
import useOnScreen from '../../hooks/onScreenUse'

export default function FeatureSlide({
    title,
    description,
    index,
    updateActiveImage
}) {

    const ref = useRef(null)
    const onScreen = useOnScreen(ref)


    useEffect(() => {
        if (onScreen) {
            updateActiveImage(index)
        }

    }, [onScreen, index])



    return (
        <div
            ref={ref}
            className='feature-slide'>
            <h3 className='feature-slide-title'>
                {title}
            </h3>
            <p className='feature-slide-description'>
                {description}
            </p>
        </div>
    )
}