import EditTaskForm from '@/components/EditTaskForm'

async function getTaskById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error('failed to fetch tasks')
    }
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

async function EditTask({ params }) {
  const { id } = params
  const { task } = await getTaskById(id)
  const { title, description } = task

  return (
    <>
      <div>
        <EditTaskForm id={id} title={title} description={description} />
      </div>
    </>
  )
}

export default EditTask
