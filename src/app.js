const express = require("express");
const path = require("path");
const app = express();
const rec_engine = require("../Json files/lcfa_rest");
const connection = require('./db/conn');
var bodyParser = require('body-parser');

app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set("view engine","pug");

// This is a connection to the server.
app.listen(3000, () =>{
    console.log(`Server is running at port 3000`);
    connection.connect(function(err){
        if(err) throw err;
        console.log('Connected to database');
    });
})

// A function to get the data from the database.
function get_row(query){
    return new Promise((resolve,reject)=>{
        connection.query(query,(err,rows,fields)=>{
            if(err) reject(err);
            else resolve(rows);
        });
    });
}

// A function to get ranking wise data for displaying sorted on the basis of score calculated using 
// 'ranking_lcfa' in models and the cafes, restaurants, romantic outings data and family outings data from the database.
// Also it displays cafe, restaurant, romantic and family outings required data in the same page.
app.get('/',async function(req,res){
    let query = "SELECT * FROM `ranking` order by score desc";
    const ranks = await get_row(query);
    query = "SELECT * from lcfa where category LIKE '%cafe%' order by dining_rating desc";
    const cafe = await get_row(query);
    query = "SELECT * from lcfa where known_for22 LIKE '%restaurant%' order by dining_rating desc";
    const rest = await get_row(query);
    query = "SELECT * from lcfa WHERE known_for22 LIKE '%romantic%' order by dining_rating desc";
    const rom = await get_row(query);
    query = "SELECT * from lcfa WHERE known_for22 LIKE '%family%' order by dining_rating desc";
    const fam = await get_row(query);
    res.render("index", { ranks: ranks, cafe: cafe, rest: rest, rom: rom, fam: fam });      
});


// It displays the data of the selected cafe, restaurant, romantic and family outings in the same page.
// It also gives a list of recommended cafes and restaurants after reading the ID from the json file and fetching the corresponding data 
// from the database.
app.get("/recommend/:id",async function(req,res){
    const id = req.params.id;
    let query = "SELECT * from lcfa WHERE id = "+id;
    const rest = await get_row(query);
    let recommended_rest = [];
    for (let i = 0; i < rec_engine[id].length; i++) {
        query = "SELECT * from lcfa WHERE id = "+rec_engine[id][i][0];
        const rec = await get_row(query);
        recommended_rest.push(rec[0]);
    }
    res.render("recommend", { rest: rest, recommended_rest: recommended_rest });
});


// It searches on the basis of the search query entered by the user and displays the data of the cafes and restaurants 
// corresponding to the keyword entred by the user.
app.get("/search/:name",async function(req,res){
    const search = req.params.name;
    let query = "SELECT * FROM `lcfa` WHERE restaurant_name LIKE '%"+search+"%' OR known_for22 LIKE '%"+search+"%' OR category LIKE '%"+search+"%'";
    const search_result = await get_row(query);
    res.render("search", { search_result: search_result });
});


// A post request to the server to get the data corresponding the entered keyword.
app.post("/search", function(req,res){
    const search = req.body.searchbox;
    res.redirect("/search/"+search);
});





