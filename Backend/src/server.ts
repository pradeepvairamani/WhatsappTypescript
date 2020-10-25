import express from 'express';
import mongoose from 'mongoose';
import dbMessages from './dbMessages';
const Pusher = require('pusher');

const app = express();
const PORT = process.env.PORT || 8000;
const connectionString = "mongodb+srv://admin:whatsapppassword@cluster0.yo63p.mongodb.net/whatsappdb?PetryWrites=true&w=majority";

const pusher = new Pusher({
    appId: '1096562',
    key: '1c083e5b152ffd959cab',
    secret: '522dafabff5f64f08008',
    cluster: 'us3',
    encrypted: true
  });

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.connection.once('open', () => {
    console.log("Mongo connected");

    const mongoCollection = mongoose.connection.collection('messagecontents');
    const changeStream = mongoCollection.watch();

    changeStream.on('change', (change) => {

        if (change.operationType == 'insert') {
            console.log("Changed document " + JSON.stringify(change.fullDocument));

            try {
                pusher.trigger('messages', 'inserted', change.fullDocument);
            } catch (error) {
                console.log(error);
            }
            
        }

    })
})

app.use(express.json());

app.get('/', (req, res) => res.send("Hello2!!"));

app.post('/api/v1/message/new', (req, res) => {
    const dbMessage = req.body;
    console.log(dbMessage);

    dbMessages.create(dbMessage, (err: any, data: any) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            console.log(data);
            res.status(201).send(data);
        }
    })
})

app.get('/api/v1/messages/', (req, res) => {
    const dbMessage = req.body;

    dbMessages.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});


