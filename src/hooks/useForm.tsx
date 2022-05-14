import { useState } from "react"

const useForm = (initialState = {}) => {
    const [state, setState] = useState(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return { handleChange, state }
}

export default useForm