const cors = require('cors');
const express = require('express');
const app = express();
const corsOptions = {
    origin: "http://localhost:5173",
};
app.use(cors(corsOptions));
app.use(express.json());

const port = 3000;
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://rashmibaral210:tMxTLyWORFdbz2Zr@cluster0.62iz2rf.mongodb.net/";
const client = new MongoClient(uri);

const createPostsCollection = require('./model.js');

app.post('/register', async (req, res) => {
    try {
        await createPostsCollection();

        await client.connect();
        const db = client.db('blog');
        const collection = db.collection('user');

        const { name, email, password } = req.body;

        
        await collection.insertOne({ name, email, password });

        
        res.status(201).send("User registered successfully!");
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Error registering user.");
    } finally {

        await client.close();
    }
});

app.post('/login', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('blog');
        const collection = db.collection('user');

        const { email, password } = req.body;

        
        const user = await collection.findOne({ email });

        if (user && user.password === password) {
            res.status(200).send("User login successfully!");
        } else {
            throw new Error('Invalid username or password!');
        }
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).send("Error logging in user.");
    } finally {
        await client.close();
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
