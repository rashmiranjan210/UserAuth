const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://rashmibaral210:tMxTLyWORFdbz2Zr@cluster0.62iz2rf.mongodb.net/";
const client = new MongoClient(uri);

async function createPostsCollection() {
    try {
        await client.connect();
        const db = client.db('blog');

        // Define the schema for the 'posts' collection
        await db.createCollection("user", {
            validator: {
                $jsonSchema: {
                    properties: {
                        name: {
                            bsonType: "string",
                        },
                        email: {
                            bsonType: "string",
                        },
                        password: {
                            bsonType: "string",
                        },
                    }
                }
            }
        });

        console.log("Posts collection created successfully!");

    } finally {
        await client.close();
    }
}

module.exports = createPostsCollection;
