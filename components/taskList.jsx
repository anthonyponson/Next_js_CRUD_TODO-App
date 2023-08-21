import Link from 'next/link'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'

function Task() {
  return (
    <>
      <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
          <h2>Task Title</h2>
          <div>Task Detail</div>
        </div>
        <div className='flex space-x-2'>
          <RemoveBtn />
          <Link href={'/editTask/123'}>
            <HiPencilAlt size={20} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Task
