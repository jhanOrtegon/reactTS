import React, { ReactElement } from 'react'
import GifC from './component'
import { TGifV } from './types'

const GifV: React.FC<TGifV> = ({ images, username, title }): ReactElement => {
    return (
        <GifC images={images} username={username} title={title} />
    )
}

export default GifV