import React, { useContext } from 'react'
import { CountContext } from '../App'
import Child1 from './Child1'

const Parent1 = () => {
    const countContext = useContext(CountContext)

    return (
        <div>
            <h1>Parent1 Count - {countContext.count}</h1>
            <Child1 />
        </div>
    )
}

export default Parent1