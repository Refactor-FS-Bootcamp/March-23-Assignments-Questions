import { ChannelContext, UserContext } from "../App"

const Child = () => {
    return (
        <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return (
                                    <>
                                        <h1>Child Component - {user}</h1>
                                        <h3>{channel}</h3>
                                    </>
                                )
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
        </UserContext.Consumer>
    )
}
export default Child