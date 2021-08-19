import express from 'express';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';
import services from './services/index.js';
import { errorHandler } from './middleWares/errorHandlers.js';

const { PORT } = process.env;
const app = express();

const whileList = [ '127.0.0.1:4200' ];

const corsOptions = {
    origin: (origin, callback) => {
        console.log({ whileList });
        console.log({ origin });
        callback(null, true);
        if (whileList.indexOf(origin) > -1)
        {
            callback(null, true);
        }
        else
        {
            callback(new Error('Origin not allowed'));
        }
    }
};

app.use(cors());

app.use(express.json());

app.use('/', services);

console.table(listEndpoints(app));

app.listen(PORT, () => console.log(`✅ Server is running on port ${ PORT }`));
app.on('error', (err) => console.error(`❌ Server is not running because of : ${ error }`));