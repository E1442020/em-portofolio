import React from 'react'
import './SkillsStyle.scss'
import {AiFillCaretRight} from 'react-icons/ai'
import { Flex } from '@mantine/core'

export default function SkillsCard(props:any) {
  return (
   <>
  
    <div>
        
        <Flex justify='center'><AiFillCaretRight/>{props.name} </Flex>
    </div>
 
   </>
  )
}
