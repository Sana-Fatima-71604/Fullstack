import express from"express";
const app = express();
import dotenv from"dotenv";
import connectDB from'./config/db.js';
dotenv.config();
app.use(express.json());

connectDB();

let tale =[{Name: 'Sana', id:'1'}, {Name: 'Kainat', id:'2'}, {Name: 'Fatima', id:'3'}, {Name: 'Asad', id:'4'}, {Name: 'Saima', id:'5'}];


// This is for adding data in the array
app.post('/add', (req, res) => {
    const Name = req.body.Name;
    const id =req.body.id;
    try{

    if(Name != null && id != null) {
        if (typeof(Name) == 'string' && typeof(id) == 'number') {
    
                tale.push({Name, id});
                res.status(201).json(tale);

        }         else {
            res.json({error:"there is some error in the nested if else"})
        }

        
    } else {
        res.json({error:"there is some error. the id is empty"})
    
    }} catch (error) {
        console.log(error);
    }
});


// This is for deleting an object using its id
app.get('/del/:id', (req, res) => {
    const uid = req.params.id;

    try{
        if(isNaN(uid) || uid == null) {
            res.json({error:"there is some error. the id is empty"})
        } else {
        tale = tale.filter(t => t.id != uid);
        res.json(tale);
        }
    } catch (error) {
        res.json({error : "There is not an object with this id"})
    }
});


// this is for getting a particular object value using its id
app.get('/getbyid/:id', (req, res) => {
    const uid = req.params.id;
    
    try {
        if(isNaN(uid) || uid == null) {
            res.json({error:"there is some error. the id is empty or not a number"})
        } else {
        const take = tale.slice().filter(t => t.id == uid);
        res.json(take);
        }
    } catch (error) {
        res.json({error : "There is not an object with this id"})
    }
});


// this is for updating the value of a particular object using its id
app.put('/upd/:id', (req, res) => {
    const uid = req.params.id;
    const tal = tale.find(t => t.id == uid);

    try {

        if(isNaN(uid) || uid == null) {
            res.json({error:"there is some error. the id is empty"})
        }

        if (typeof(tal.Name) == 'string') {

        tal.Name = req.body.Name
    
        res.json(tale);
        } else {
            res.json("The typeof of the string is not a string so we cannot accept this")
        }
        
    } catch (error) {
        res.json({error : "There is not an object with this id"})
    };

    // const id =req.params;

    // tale[id].Name = "Mahek";
    // // tale[id].id = req.body.id;
    // res.json(tale)
})

app.get('/', (req, res) => {

    try{
        res.json(tale);
    } catch (error) {
        console.log(error);
    }
    
});

app.listen(process.env.PORT, ()=> {
    console.log("The server is running at the port number 4000")
})


let tasks=['ball', 'bat', 'carrom', 'chess', 'coffee'];
let x='Parisa';
let a= 'appron';
let b ='cook';
let y = 0;
let z=6;

// app.get('/add', (req, res) => {
//     tasks.push(x);
//     res.json(tasks);
// })

// app.get('/del', (req, res) => {
//     tasks.pop(b);
//     res.json(tasks);
// })

// app.get('/upd', (req, res) => {
//     tasks[y] = a;
//     res.json(tasks)
// })

// app.get('/', (req, res) => {
//     res.json(tasks);
// });

// app.listen(3000, ()=> {
//     console.log("The server is running at the port number 3000")
// })

// app.get('/', (req, res) => {
//     res.send(`<pre>
//             <h2>The Array operations</h2>
//         <input type='text' id='addtask' name='addtask'>
//         <button>Add</button>
//         <input type='text' id='deltask' name='deltask'>
//         <button>Delete</button>
//         <input type='text' id='updtask' name='updtask'>
//         <button>Update</button>
//         </pre>
//         `)
// })