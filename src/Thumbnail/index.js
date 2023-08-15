import './index.css'

const Thumbnail = props => {
  const {imageDetails, onClickThumbnail} = props
  const {thumbnailUrl} = imageDetails
  const onThumbnail = () => {
    onClickThumbnail(thumbnailUrl)
  }

  return (
    <li className="thumbnail">
      <button onClick={onThumbnail} className="thumbnail-button" type="button">
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
