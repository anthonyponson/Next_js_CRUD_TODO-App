import connectMonngoDB from '@/libs/mongodb'
import Topic from '@/models/topic'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { title, description, isChecked } = await request.json()
  await connectMonngoDB()
  await Topic.create({ title, description,isChecked })
  return NextResponse.json({ message: ' Topic Created' }, { status: 201 })
}

export async function GET() {
  await connectMonngoDB()
  const tasks = await Topic.find()
  return NextResponse.json({ tasks })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')
  await connectMonngoDB()
  await Topic.findByIdAndDelete(id)
  return NextResponse.json({ message: ' topic deleted' }, { status: 201 })
}
