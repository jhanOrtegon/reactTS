import React, { ReactElement } from 'react'
import SearchC from './component'
import ListGifV from './../ListGif/index';

const SearchV: React.FC = (): ReactElement => {

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault()
        ListGifV()
    }

    return (
        <>
            <SearchC handleSubmit={handleSubmit} />
        </>
    )
}

export default SearchV