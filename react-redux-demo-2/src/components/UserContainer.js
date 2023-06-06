import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

const UserContainer = ({user, fetchUsers}) => {
    useEffect(() => {
        fetchUsers()
    },[])

    return user.loading ? <h2>Loading...</h2> : user.error ? <h2>{user.error}</h2> : (
        <div>
            <h2>User List</h2>
            {user.users.map(user => <h4>{user.name}</h4>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)