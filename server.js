import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'

// DB and Auth
import connectDB from './db/connect.js'




//routes
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())

 app.get('/', (req,res) =>{
   // throw new Error('error')
    res.send('welcome')
 })

 app.use('/api/v1/auth', authRouter)
 app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 8000





const start = async () =>{
  try {
    await connectDB(process.env.DB_URL)
    app.listen(port, () =>{
    console.log(`Server is listening on ${port}.....`)
})
  } catch (error) {
    console.log(error)
  }
}

start()