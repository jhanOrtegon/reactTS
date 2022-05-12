import React from 'react'
import { H1 } from './styled'
import { THeaderC } from './types'

const HeaderC: React.FC<THeaderC> = ({ title }) => {
    return (<H1>{title}</H1>)
}

export default HeaderC
