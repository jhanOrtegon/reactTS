import React, { ReactElement } from 'react'
import GifC from './component'
import { TGifV } from './types'

const GifV: React.FC<TGifV> = ({ embed_url, username, title }): ReactElement => {
    return (
        <GifC embed_url={embed_url} username={username} title={title} />
    )
}

export default GifV