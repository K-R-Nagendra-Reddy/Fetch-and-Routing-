import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogData: {}}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const detailedData = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonData = await detailedData.json()
    console.log(jsonData)
    const wantedDetails = {
      author: jsonData.author,
      avatarUrl: jsonData.avatar_url,
      content: jsonData.content,
      id: jsonData.id,
      imageUrl: jsonData.image_url,
      title: jsonData.title,
      topic: jsonData.topic,
    }
    this.setState({isLoading: false, blogData: wantedDetails})
  }

  showBlogDetails = () => {
    const {blogData} = this.state
    const {author, avatarUrl, content, id, imageUrl, title, topic} = blogData
    return (
      <div className="details-container">
        <h1>{title}</h1>
        <div className="profile-container">
          <img src={avatarUrl} alt="avatar" className="avatar-url" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="image-detailed" alt={title} />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.showBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
