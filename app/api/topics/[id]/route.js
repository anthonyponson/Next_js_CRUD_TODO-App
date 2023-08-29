import connectMonngoDB from '@/libs/mongodb'
import Topic from '@/models/topic'
import { NextResponse } from 'next/server'


// update tasks
export async function PUT(request, { params }) {
  const { id } = params
  const { newTitle: title, newDescription: description, newIsChecked: isChcked } = await request.json()
  await connectMonngoDB()
  await Topic.findByIdAndUpdate(id, { title, description, isChcked })
  return NextResponse.json({ messsgae: 'task Updated' }, { status: 200 })
}

// get by certain id

export async function GET(request, { params }) {
  const { id } = params
  await connectMonngoDB()
  const task = await Topic.findOne({ _id: id })
  return NextResponse.json({ task }, { status: 201 })
}
