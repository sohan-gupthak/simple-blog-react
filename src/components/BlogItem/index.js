// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, author, imageUrl, avatarUrl, topic} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="item-container">
        <img src={imageUrl} alt="item" className="item-image" />
        <div className="item-info">
          <h1 className="topic">{topic}</h1>
          <h1 className="title">{title}</h1>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
