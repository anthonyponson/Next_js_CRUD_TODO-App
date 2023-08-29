'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function AddTask() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  async function handleClick(e) {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })

      if (res.ok) {
        router.refresh()
        router.push('/')
      } else {
        throw new Error('faild to create new Task')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleClick} className='flex flex-col gap-3'>
          <input
            onChange={e => setTitle(e.target.value)}
            value={title}
            className='p-2 focus:outline-none border border-slate-500 text-black'
            type='text'
            placeholder='Task Name'
          />
          <input
            onChange={e => setDescription(e.target.value)}
            value={description}
            className='p-2 focus:outline-none border border-slate-500 text-black'
            type='text'
            placeholder='Task Description'
          />
          <button
            type='submit'
            className='bg-emerald-400 font-bold text-white py-3 px-6 w-fit'
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  )
}

export default AddTask
