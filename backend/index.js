import cors from "cors";
import { CronJob } from 'cron';
import express from 'express';
 
import rateLimitMiddleware,{job} from "./controller/rateLimiting.js"
const app = express();

app.use(express.json());
app.use(cors())


app.use(rateLimitMiddleware);

app.get('/ratelimit', (req, res) => {
    res.json({
        success: true,
        message: `You got the data`
    });
});


app.listen(3000, () => {
    console.log(`Server running on port 3000`);
    job.start();
});