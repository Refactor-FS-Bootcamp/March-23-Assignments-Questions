const { MongoClient, ObjectID } = require('mongodb')

const connURL = 'mongodb+srv://admin:admin@cluster0.zy9rtpa.mongodb.net/taskDB'
const dbName = 'task-manager'

MongoClient.connect(connURL, { useUnifiedTopology: true }, (error, client) => {
    if(error) return console.log('Unable to connect to database')

    const db = client.db(dbName)
    // db.collection('users').insertOne({
    //     name: 'Rohit',
    //     age: 19
    // })
    // .then(result => console.log("Data inserted", result.ops))
    // .catch(error => console.log(error))

    // db.collection('users').insertMany([
    //     {
    //         name: 'Sohit',
    //         age: 19
    //     },
    //     {
    //         name: 'Navin',
    //         age: 29
    //     }
    // ])
    // .then(result => console.log("Data inserted -->", result.ops))
    // .catch(error => console.log(error))

    // db.collection('users').findOne({ name: 'Rohit' })
    //     .then(result => console.log("Data found", result))
    //     .catch(error => console.log(error))

    // db.collection('users').find({ name: 'Rohit' })
    //     .toArray()
    //     .then(result => console.log("Data found", result))
    //     .catch(error => console.log(error))

    // db.collection('users').updateOne({ _id: new ObjectID('6437e035bbd0b8c38609ec92') },
    //     { $set: { name: 'Rohit K'}})
    //     .then(result => console.log("Data Updated", result.modifiedCount))
    //     .catch(error => console.log(error))

    // db.collection('users').updateMany({ age: 19 },
    //     { $set: { age: 20 }})
    //     .then(result => console.log("Data Updated", result.modifiedCount))
    //     .catch(error => console.log(error))

    db.collection('users').deleteOne({ _id: new ObjectID('6437e11f05e1c6c3a25a3faa') })
        .then(result => console.log("Data Deleted -->", result.deletedCount))
        .catch(error => console.log(error))

    db.collection('users').deleteMany({ age: 19 })
        .then(result => console.log("Data Deleted -->", result.deletedCount))
        .catch(error => console.log(error))

})
