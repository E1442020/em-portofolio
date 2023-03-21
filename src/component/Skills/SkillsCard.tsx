import React from 'react'
import './SkillsStyle.scss'
import {AiFillCaretRight} from 'react-icons/ai'

export default function SkillsCard(props:any) {
  return (
   <>
  
    <div>
        
        <p><AiFillCaretRight/>{props.name} </p>
    </div>
 
   </>
  )
}
