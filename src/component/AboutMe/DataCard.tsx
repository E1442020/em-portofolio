import React from 'react'
import './AboutMeStyle.scss'

export default function DataCard(props:any) {
  return (
    <>
      <div className="data-container">
        <div>{<props.icon style={{color:'orange'}} size={25}/>}</div>
        <h3>{props.number}</h3>
        <p>{props.name}</p>
      </div>
    </>
  )
}
