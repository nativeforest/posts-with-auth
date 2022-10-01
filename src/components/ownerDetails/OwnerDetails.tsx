import React from 'react'
import { Owner } from '../../types/Owner'

function OwnerDetails({owner}: any ) {
  return (
    <div>
      <div>title: {owner.title}</div>
      <div>name: {owner.firstName}</div>
      <div>lastName: {owner.lastName}</div>
      <img src={owner.picture} alt="" width={'300px'}/>
    </div>
  )
}

export {OwnerDetails}