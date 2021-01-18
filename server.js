const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const userRoute = require('./routes/userRoutes');
const morgan = require('morgan')
const productRoutes = require('./routes/productRoutes');
const {errorHandler, notFound }  = require('./middleware/errorMiddleware');


const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json());



app.use('/api/products', productRoutes)
app.use('/api/users', userRoute)


const PORT = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));