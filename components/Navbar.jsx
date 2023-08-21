import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
      <Link href={'/'}>ToDo</Link>
      <Link href={'/addTopic'}>Add Task</Link>
    </nav>
  )
}
