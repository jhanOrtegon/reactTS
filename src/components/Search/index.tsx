import React, { ReactElement } from 'react'
import SearchC from './component'
import useForm from './../../hooks/useForm';

const SearchV:
    React.FC<{ handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void }> =
    ({ handleChange }): ReactElement => {

        const handleSubmit = (event: React.FormEvent<HTMLElement>): void => {
            event.preventDefault()
        }

        return (
            <>
                <SearchC handleSubmit={handleSubmit} handleChange={handleChange} />
            </>
        )
    }

export default SearchV