import CollectionCard from './CollectionCard'
import './PunkList.css'

const PunkList = ({ punkListData }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk, index) => (
        <div key={index}>
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  )
}

export default PunkList
