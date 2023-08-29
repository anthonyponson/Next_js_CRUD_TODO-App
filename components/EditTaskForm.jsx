'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function EditTaskForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const router = useRouter()

  async function handleClick(e) {
    e.preventDefault()

    try {
      const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ newTitle, newDescription }),
      })

      if (!response.ok) {
        throw new Error('failed to update tasks')
      }

      router.refresh()
      router.push('/')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleClick} className='flex flex-col gap-3'>
          <input
            onChange={e => setNewTitle(e.target.value)}
            value={newTitle}
            className='p-2 focus:outline-none border border-slate-500 text-black'
            type='text'
            placeholder='Task Name'
          />
          <input
            onChange={e => setNewDescription(e.target.value)}
            value={newDescription}
            className='p-2 focus:outline-none border border-slate-500 text-black'
            type='text'
            placeholder='Task Description'
          />
          <button
            type='submit'
            className='bg-emerald-400 font-bold text-white py-3 px-6 w-fit'
          >
            update
          </button>
        </form>
      </div>
    </>
  )
}

export default EditTaskForm
