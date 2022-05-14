import React, { ReactElement } from 'react'
import { TGifC } from './types'
import GifV from './../Gif/index';
import { Grid } from './styled';

const ListGifC: React.FC<TGifC> = ({ data: listGif }): ReactElement => {

    return (
        <Grid>
            {
                listGif?.map(gif => (
                    <GifV key={gif.id} images={gif?.images} username={gif.username} title={gif.username} />
                ))
            }
        </Grid>
    )
}

export default ListGifC