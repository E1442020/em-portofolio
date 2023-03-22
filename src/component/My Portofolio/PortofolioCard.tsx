import React from 'react'
import './PortfolioStyle.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Flex } from '@mantine/core'
export default function PortofolioCard(props:any) {
  return (
    <>
    <div className="portofolio-card-container">
      <div className='img-container'>
        <img src={props.img} alt={props.name}/>
      </div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <Flex align='center' gap='4px'><a href={props.live}>Live </a><AiOutlineArrowRight  style={{color:'gray'}}/></Flex>
      <Flex align='center' gap='4px'><a href={props.repo}>Repo </a> <AiOutlineArrowRight style={{color:'gray'}}/></Flex>

    </div>
    </>
  )
}
