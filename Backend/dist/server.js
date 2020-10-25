"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dbMessages_1 = __importDefault(require("./dbMessages"));
const Pusher = require('pusher');
const app = express_1.default();
const PORT = process.env.PORT || 8000;
const connectionString = "mongodb+srv://admin:whatsapppassword@cluster0.yo63p.mongodb.net/whatsappdb?PetryWrites=true&w=majority";
const pusher1 = new Pusher({
    appId: '1096562',
    key: '1c083e5b152ffd959cab',
    secret: '522dafabff5f64f08008',
    cluster: 'us3',
    encrypted: true
});
mongoose_1.default.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose_1.default.connection.once('open', () => {
    console.log("Mongo connected");
    const mongoCollection = mongoose_1.default.connection.collection('messagecontents');
    const changeStream = mongoCollection.watch();
    changeStream.on('change', (change) => {
        if (change.operationType == 'insert') {
            console.log("Changed document " + JSON.stringify(change.fullDocument));
            try {
                pusher1.trigger('messages', 'inserted', change.fullDocument);
            }
            catch (error) {
                console.log(error);
            }
        }
    });
});
app.use(express_1.default.json());
app.get('/', (req, res) => res.send("Hello2!!"));
app.post('/api/v1/message/new', (req, res) => {
    const dbMessage = req.body;
    console.log(dbMessage);
    dbMessages_1.default.create(dbMessage, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            console.log(data);
            res.status(201).send(data);
        }
    });
});
app.get('/api/v1/messages/', (req, res) => {
    const dbMessage = req.body;
    dbMessages_1.default.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    });
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map