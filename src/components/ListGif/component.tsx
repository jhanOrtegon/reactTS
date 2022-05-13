import React, { ReactElement } from 'react'
import { TGifC } from './types'
import GifV from './../Gif/index';

const ListGifC: React.FC<TGifC> = ({ data }): ReactElement => {
    console.log(data);
    return (
        <h1>xxx</h1>
        // listGif.map(gif => (
        //     <GifV key={gif.id} embed_url={gif.embed_url} username={gif.username} title={gif.username} />
        // ))
    )
}

export default ListGifC