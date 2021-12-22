import './CollectionCard.css'
import ethImage from '../assets/weth.png'

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt={name} />
      <div className="details">
        <div className="nameContainer">
          <span className="name">{name}</span>
          <span className="id">#{id}</span>
        </div>

        <div className="priceContainer">
          <img src={ethImage} className="ethImage" alt="" />
          <span className="price">{traits[0]?.value}</span>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
