import './Main.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreLogo from '../assets/owner/more.png'
import { useEffect, useState } from 'react'

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setAtivePunk] = useState(punkListData[0])

  useEffect(
    () => setAtivePunk(punkListData[selectedPunk]),
    [punkListData, selectedPunk]
  )

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk?.image_original_url}
              alt={activePunk?.name}
            />
          </div>
        </div>

        <div className="punkDetails" style={{ color: 'white' }}>
          <div className="title">
            {activePunk?.name}
            <span className="itemNumber"> #{activePunk?.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={activePunk?.owner.profile_img_url}
                alt={activePunk?.owner.address}
              />
            </div>

            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div className="ownerAddress">{activePunk?.owner.address}</div>
                <div className="ownerHandle">@daltonic</div>
              </div>

              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
