const PORT = process.env.PORT ?? 8000;
const cors = require('cors')
const express = require('express')
const app = express()
const pool = require('./db')
const {v4:uuidv4} = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const multer = require('multer');


// uploading images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const fileFilter = function(req, file, cb) {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and GIF files are allowed.'), false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 20 // 20 MB
    },
    fileFilter: fileFilter,
  }).fields([{ name: 'images', maxCount: 20 }]);
  


app.use(cors())
app.use(express.json())
app.use('/uploads',express.static('uploads'));


 // Add Lhakhang
 app.post('/upload', function (req, res) {
    upload(req, res, async function (err) {
      if (err) {
        // An error occurred when uploading
        console.log(err);
        return res.status(400).json({ message: 'Error uploading file.' });
      }
  
      // Everything went fine
      console.log(req.file);
      console.log(req.body);
      try {
        const {lhakhang_name,lhakhang_detail,location} = req.body;

        const filepaths = req.files['images'].map(file => file.path);
  
  
        // insert the post data into the database
        const { rows } = await pool.query(
          'INSERT INTO lhakhang (lhakhang_name,lhakhang_detail,location,images) VALUES ($1, $2, $3, $4) RETURNING *',
          [lhakhang_name,lhakhang_detail,location,filepaths]
        );
  
        res.status(201).json(rows[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    });
  });


// get all lhakgang
app.get('/lhakhang',async (req,res)=>{
  try {
      const products = await pool.query('SELECT * FROM lhakhang;')
      res.json(products.rows)
      
  } catch (error) {
      console.log(error)
  }
})


// events

app.post('/event',async(req,res)=>{

  const {event_name,event_detail,location, date, time} = req.body
    try {
        const event = await pool.query('INSERT INTO events (event_name,event_detail,location, date, time) VALUES ($1,$2,$3,$4,$5)',[event_name,event_detail,location, date, time])
        res.json(event)
       
    } catch (error) {
        console.error(error)
    }  
})

// get all event
app.get('/getevent',async (req,res)=>{
  try {
      const event = await pool.query('SELECT * FROM events;')
      res.json(event.rows)
      
  } catch (error) {
      console.log(error)
  }
})


// donations
app.post('/donation',async(req,res)=>{

  const {lhakhang_name,purpose,account_number, account_holder} = req.body
    try {
        const donation = await pool.query('INSERT INTO donations (lhakhang_name,purpose,account_number, account_holder) VALUES ($1,$2,$3,$4)',[lhakhang_name,purpose,account_number, account_holder])
        res.json(donation)
       
    } catch (error) {
        console.error(error)
    }  
})

//get all donations
app.get('/getdonation',async (req,res)=>{
  try {
      const donation = await pool.query('SELECT * FROM donations;')
      res.json(donation.rows)
      
  } catch (error) {
      console.log(error)
  }
})


// donation report
app.post('/donationsreport',async(req,res)=>{

  const {name,amount,jrl_number,lhaname} = req.body
    try {
        const report = await pool.query('INSERT INTO donations_report (name,amount,jrl_number,lhaname) VALUES ($1,$2,$3,$4)',[name,amount,jrl_number,lhaname])
        res.json(report)
       
    } catch (error) {
        console.error(error)
    }  
})
app.get('/getdonationsreport',async (req,res)=>{
  try {
      const report= await pool.query('SELECT * FROM donations_report;')
      res.json(report.rows)
      
  } catch (error) {
      console.log(error)
  }
})

// Delete a report
app.delete('/deleteReport/:id',async(req,res)=>{
  const {id}=req.params
  try {
      const deleteReport = await pool.query('DELETE FROM donations_report WHERE id = $1;',
      [id])
      res.json(deleteReport)
  } catch (error) {
      console.error(error)
  }
})

// Delete a lhakhang
app.delete('/deleteLhakhang/:id',async(req,res)=>{
  const {id}=req.params
  try {
      const deleteLhakhang = await pool.query('DELETE FROM lhakhang WHERE id = $1;',
      [id])
      res.json(deleteLhakhang)
  } catch (error) {
      console.error(error)
  }
})

// Delete a events
app.delete('/deleteEvents/:id',async(req,res)=>{
  const {id}=req.params
  try {
      const deleteEvents = await pool.query('DELETE FROM events WHERE id = $1;',
      [id])
      res.json(deleteEvents)
  } catch (error) {
      console.error(error)
  }
})

// Delete a donations
app.delete('/deleteDonations/:id',async(req,res)=>{
  const {id}=req.params
  try {
      const deleteDonations = await pool.query('DELETE FROM donations WHERE id = $1;',
      [id])
      res.json(deleteDonations)
  } catch (error) {
      console.error(error)
  }
})
  
//admin login
app.post('/login', async (req, res) => {

  const { username, password } = req.body
  try {
    const users = await pool.query('SELECT * FROM users WHERE username = $1', [username])
    if (!users.rows.length) return res.json({ detail: "User does not exist!" })

    if(password === users.rows[0].password){
      res.json({detail: "Success",username:username,password:password})
    }
    else{
        res.json({detail:'Password incorrect!'})
    }
  } catch (error) {
    console.error(error)
  }
})

// edit lhakhang
app.put('/lhakhang/:id', async (req, res) =>{
  const {id} = req.params
  const { lhakhang_name,lhakhang_detail,lhakhang_location} = req.body
  try {
    const editLhakhang = await pool.query('UPDATE lhakhang SET lhakhang_name = $1, lhakhang_detail = $2, location = $3 WHERE id = $4;', [ lhakhang_name,lhakhang_detail,lhakhang_location, id]  )
    res.json(editLhakhang)
  } catch (err) {
    console.error(err)
    
  }
})

// edit Events
app.put('/getevent/:id', async (req, res) =>{
  const {id} = req.params
  const { event_name,event_detail, location, date, time} = req.body
  try {
    const editevent = await pool.query('UPDATE events SET event_name = $1, event_detail = $2, location = $3, date = $4, time = $5 WHERE id = $6;', [ event_name,event_detail,location, date, time, id]  )
    res.json(editevent)
  } catch (err) {
    console.error(err)
    
  }
})

// edit Doantions
app.put('/getdonation/:id', async (req, res) =>{
  const {id} = req.params
  const { lhakhang_name, purpose, account_number, account_holder} = req.body
  try {
    const editdonation = await pool.query('UPDATE donations SET lhakhang_name = $1, purpose = $2, account_number = $3, account_holder = $4 WHERE id = $5;', [ lhakhang_name, purpose, account_number, account_holder]  )
    res.json(editdonation)
  } catch (err) {
    console.error(err)
    
  }
})

app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))