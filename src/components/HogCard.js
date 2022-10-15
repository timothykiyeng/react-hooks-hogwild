import React, {useState} from 'react'
import HogDetails from './HogDetails';

function HogCard({hog}) {
    const [showDetails, setShowDetails] = useState(false)
    const { name, specialty, image } = hog;

function handleDetailsClick(){
   setShowDetails((prevShowDetails) => !prevShowDetails)
}


  return (
    <div className="ui card eight wide column pigTile">

<div className="image">
        <img src={image} alt="hogPic" />
      </div>

<div className="content">
        <h3 className="header">{name}</h3>
        <div className="description"> <strong>Specialty:</strong> {specialty}</div>
      </div>
<div className='extra content'>
    {showDetails ? <HogDetails hog={hog}/> : null}
</div>
<button className='ui button' onClick={handleDetailsClick}>
    {showDetails ? "Less Info" : "More Info"}
</button>
    </div>
  )
}

export default HogCard