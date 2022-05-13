import React from 'react'
import { TGifC } from './types'

const GifC: React.FC<TGifC> = ({ embed_url, username, title }) => {
    return (
        <div>
            <div>
                <img src={embed_url} alt={title} />
            </div>
            <div>
                <p>{username}</p>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default GifC
