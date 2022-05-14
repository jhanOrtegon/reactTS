import React, { ReactElement } from 'react'
import SearchC from './component'

const SearchV: React.FC = (): ReactElement => {

    const handleSubmit = (event: React.FormEvent<HTMLElement>): void => {
        event.preventDefault()
    }

    return (
        <>
            <SearchC handleSubmit={handleSubmit} />
        </>
    )
}

export default SearchV