const PostItem = ({post}) => {
    return (
        <div>
            <h1>ID: {post.id}</h1>
            <h3>Title: {post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}
export default PostItem