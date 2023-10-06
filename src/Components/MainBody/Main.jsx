import React from 'react'
import Attendence from './Attendence'
import Task from './Task'

export default function Main() {
  return (
    <div className=' flex gap-4 p-6 pt-4 '>
        <Attendence />
        <Task />
    </div>
  )
}
