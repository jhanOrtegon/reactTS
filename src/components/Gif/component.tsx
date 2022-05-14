import React from 'react'
import { TGifC } from './types'

const GifC: React.FC<TGifC> = ({ images, username, title }) => {
    console.log(images, username, title);
    return (
        <>
            <img src={images} alt={title} width='100%' />
        </>
    )
}

export default GifC
