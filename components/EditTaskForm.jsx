function EditTaskForm() {
  return (
    <>
      <div>
        <form className='flex flex-col gap-3'>
          <input
            className='border border-slate-500'
            type='text'
            placeholder='Task Name'
          />
          <input
            className='border border-slate-500'
            type='text'
            placeholder='Task Description'
          />
          <button className='bg-emerald-400 font-bold text-white py-3 px-6 w-fit'>
            Add Task
          </button>
        </form>
      </div>
    </>
  )
}

export default EditTaskForm
