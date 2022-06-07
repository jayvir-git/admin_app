// module imports
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes.js';
import cors from 'cors';
dotenv.config();
const { DB_URL } = process.env;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// console.log(process.env);
// console.log('db url : ', DB_URL);
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('connected', () => console.log('connected to atlas successfully'));
db.on('error', (err) => console.log('error occured while connecting!!', err));

app.use(routes);

const port = 3000 || process.env.PORT;
app.listen(port, () => console.log('listing on ', port));
