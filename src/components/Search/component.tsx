import React, { ReactElement } from 'react'
import { Grid } from './styled'
import { TSearchC } from './types'
const SearchC: React.FC<TSearchC> = ({
    handleSubmit
}): ReactElement => {
    return (
        <form
            typeof='post'
            onSubmit={handleSubmit}
            className='mt-3'
        >
            <Grid>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Ejemplo: Naruto'
                    name='inputSearch'
                />

                <input className='form-control bg-dark text-white' type="submit" value='Search' />
            </Grid>
        </form>
    )
}

export default SearchC
