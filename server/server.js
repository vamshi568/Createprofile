const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
const dbPath = path.join(__dirname, "servermydatabase.db");
let db = null;
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3001, () => {
      console.log("Server Running at http://localhost:3001/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(async(req, res, next) => {
  




    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

 

// getting the data and res
app.get('/',async(req,res)=>{



    res.status(200).send('hai')
})
app.post("/login", async (request, response) => {
    const { username, password } = request.body;
    
    const selectUserQuery = `SELECT * FROM users WHERE username = '${username}'`;
    const dbUser = await db.get(selectUserQuery);
    if (dbUser === undefined) {
      response.status(400);
      response.send({"text":"Invalid User"});
    } else {
       const isPasswordMatched=(password=== dbUser.password);
      if (isPasswordMatched === true) {
        
        response.send(dbUser);
      } else {
        response.status(400);
        response.send({"text":"Invalid Password"});
      }
    }
  });


app.get('/getdetails/:userid',async (req, res) => {
  const {userid}=req.params

    const query=`select * from userdetails where id=${userid} `
    const dbres=await db.get(query)
    res.status(200).send(dbres)
  });

app.post('/createprofile',async (req, res) => {
  const { id,name, surname, placeOfBirth, fullAddress, zipcode } = req.body;
  await db.run(`
  INSERT INTO updatedetail (id,name,surname, placeofbirth, fulladress, zipcode)
  VALUES (${id}, '${name}', '${surname}', '${placeOfBirth}', '${fullAddress}', ${zipcode})
`);
  // const dbres=await db.run(`INSERT INTO updatedetail (id, name, surname, placeofbirth, fulladress, zipcode) VALUES (${id}, ${name}, ${surname}, ${placeOfBirth}, ${fullAddress}, ${zipcode})`)
      res.send({"text":"updated"})
  });

app.get('/getdata',async (req,res)=>{

  // const dbres=await db.run(`insert into users (id,username,password) values (1, 'Rakesh', 'rakesh123');`)
  // const dbres=await db.get(`PRAGMA TABLE_INFO (updatedetail);`)
  
  // res.send("200")
  const dres=await db.all(`select * from updatedetail`)
  res.send(dres)
})




