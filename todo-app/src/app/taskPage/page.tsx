import AddTask from '@/components/AddTask';
import React from 'react'

function TaskPage() {
// justify-center items-center
  return (
    <div className='flex flex-col h-full w-full items-center bg-blue-400'> 
        <div className='flex flex-row h-fit w-full justify-between p-10'>
            <span>
                Task
            </span>
            <span>
                button-icons
            </span>
        </div>
        <div className='bg-white h-full w-full text-black'>
            <AddTask/>
        </div>
    </div>
  )
}

export default TaskPage;