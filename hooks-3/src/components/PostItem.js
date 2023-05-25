import './PostItem.css'

const h1Styled = {
    backgroundColor: 'lightyellow',
    padding: '5px'
}

const PostItem = ({post}) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>ID: {post.id}</h1>
            <h3 style={{ color: 'darkmagenta', textTransform: 'uppercase'}}>
                Title: {post.title}
            </h3>
            <p>{post.body}</p>
        </div>
    )
}
export default PostItem