import React, { ReactElement } from 'react'
import { TGifC } from './types'
import GifV from './../Gif/index';
import { Grid } from './styled';

const ListGifC: React.FC<TGifC> = ({ data: listGif, formState }): ReactElement => {
    const { inputSearch } = formState
    return (
        <>
            {
                !inputSearch?.length || !listGif?.length
                    ?
                    <div className='alert alert-primary mt-4'>
                        No hay Resultados
                    </div>
                    :
                    <Grid>
                        {(
                            listGif?.map(gif => (
                                <GifV key={gif.id} images={gif?.images} username={gif.username} title={gif.username} />
                            ))
                        )}
                    </Grid>
            }
        </>
    )
}

export default ListGifC