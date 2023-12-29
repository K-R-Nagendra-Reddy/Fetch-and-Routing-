// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BLogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <Link to={`/blogs/${id}`}>
      <li className="list-container">
        <img src={imageUrl} alt="image2" className="image" />
        <div className="topic-title-profile">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="profile-container">
            <img src={avatarUrl} alt="avatar" className="profile" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BLogItem
