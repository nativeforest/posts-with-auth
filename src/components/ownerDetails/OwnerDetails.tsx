import React from 'react'
import { Owner } from '../../types/Owner'
import './OwnerDetails.css'
function OwnerDetails({owner}: any ) {
  const {title, lastName,firstName} = owner
  return (
    <div className='owner-details-c'>
      <h2>Owner Details</h2>
      <hr/>
      <img className='owner-details-c__owner-photo' src={owner.picture} alt="" width={'50%'}/>
      <div><p> {title.charAt(0).toUpperCase() + title.slice(1)}. {firstName} {lastName}</p></div>
    </div>
  )
}

export {OwnerDetails}