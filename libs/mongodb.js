import mongoose from 'mongoose'

export default async function connectMonngoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('connected to mongoDB.')
  } catch (error) {
    console.log(error)
  }
}
