'use client'
import { useRouter } from 'next/navigation'
import { HiOutlineTrash } from 'react-icons/hi'

function RemoveBtn({ id }) {
  const router = useRouter()

  async function removeTask() {
    const confirmed = confirm('Are you sure')

    if (confirmed) {
      const response = await fetch(
        `http://localhost:3000/api/topics?id=${id}`,
        {
          method: 'DELETE',
        }
      )
      if (response.ok) {
        router.refresh()
      }
    }
  }
  return (
    <>
      <button onClick={removeTask}>
        <HiOutlineTrash className='text-red-400' size={24} />
      </button>
    </>
  )
}

export default RemoveBtn
