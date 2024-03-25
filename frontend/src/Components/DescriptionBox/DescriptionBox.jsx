import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptonebox-nav-box">Description</div>
            <div className="descriptonebox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus metus ac ipsum dictum, eget maximus justo interdum.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox