import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
app.use(cors());

app.use(express.json ({limit: "30mb", extended: true}));
app.use(express.urlencoded ({limit: "30mb", extended: true}));

// MONGO DB ATLAS
// mongodb+srv://carinasylvester:Test123@cluster0.oji89.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const CONNECTION_URL = 'mongodb+srv://carinasylvester:Test123@cluster0.oji89.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000; 

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


//mongoose.set('useFindAndModify: false'); 
// apparently no longer needed