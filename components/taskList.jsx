import Link from 'next/link'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'
import CheckBox from './CheckBox'

async function getTasks() {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error('faild to fecth tasks')
    }
    return res.json()
  } catch (error) {
    console.log('error loading tasks', error)
  }
}

async function Task() {
  const { tasks } = await getTasks()

  return (
    <>
      {tasks.map(task => (
        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
          <CheckBox />
          <div className='text-center'>
            <h2 className=''>{task.title}</h2>
            <h2>{task.description}</h2>
          </div>
          <div className='flex space-x-2'>
            <RemoveBtn id={task._id}/>
            <Link href={`/editTask/${task._id}`}>
              <HiPencilAlt size={20} />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default Task
