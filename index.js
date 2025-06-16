const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3000;
require('dotenv').config();
const User = require('./models/User');
const app = express();

app.use(express.json());
app.use(cors());


app.get('/', async(req,res)=> {
    res.send('Testing mongoose server');
});


//--------------------------------------------------------------------------->
// 🟢 MongoDB connect
mongoose.connect(process.env.MONGODB_URI+'/testingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB error:', err));


app.post('/user-datas', async(req,res)=> {
    try{
    const {name, email, number, password, date} = req.body;
    const newUser = new User({name, email, number, password, date});
    const result = await newUser.save();
    res.status(201).json(result);
    }catch{
     res.send('Not Save');
    }
})



// ✅ CREATE - POST
// app.post('/user-datas', async (req, res) => {
//   try {
//     const { name, email, number, password, date } = req.body;
//     const newUser = new User({ name, email, number, password, date });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json({ error: 'User creation failed' });
//   }
// });



// Get 
// app.get('/user-datas', async(req,res)=> {
//   try{

//     const datas = 
    
//   }catch{

//   }
// })


//--------------------------------------------------------------------------->



app.listen(port, ()=> {console.log('Testing mongoose server is Running on port : ', port);
})
