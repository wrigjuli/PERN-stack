require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require('./db');

app.use(express.json())

app.get("/api/v1/restaurants", async (req, res) => {
    try {
    const results = await db.query("select * from restaurants;");
    console.log(results);
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            restaurants: results.rows,
        },

    });

    } catch (err) {
        console.log(err);
    }
    
});

//Get a restaurant
app.get("/api/v1/restaurants/:id", (req,res) => {
    console.log(req.params);

    res.status(201).json({
        status:"Success",
        data: {
            restaurant: "mcdonalds"
        }
    })
})

//Create a restaurant
app.post("/api/v1/restaurants/", (req, res) => {
    console.log(req.body)
});

//Update restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status:"Success",
        data: {
            restaurant: "mcdonalds"
        }
    })
});

app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    })
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server is up and listening on port ' + port);
})