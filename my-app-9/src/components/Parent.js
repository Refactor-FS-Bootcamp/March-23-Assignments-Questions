import React, { Component } from 'react'
import Child from './Child'
import UserContext from './userContext'

class Parent extends Component {
    static contextType = UserContext

    render() {
        return (
        <div>
            <h1>Parent Component - {this.context}</h1>
            <Child />
        </div>
        )
    }
}

export default Parent