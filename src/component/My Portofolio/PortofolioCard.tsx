import React from 'react'
import './PortfolioStyle.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function PortofolioCard(props:any) {
  return (
    <>
    <div className="portofolio-card-container">
      <div className='img-container'>
        <img src={props.img} alt={props.name}/>
      </div>
      <h3>{props.name}</h3>
      <p><a href={props.live}>Live <AiOutlineArrowRight/></a></p>
      <p><a href={props.repo}>Repo <AiOutlineArrowRight/></a></p>

    </div>
    </>
  )
}
