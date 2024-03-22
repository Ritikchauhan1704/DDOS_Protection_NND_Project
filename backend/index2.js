import cors from "cors";
import express from 'express';
import gator from 'gator-score';


const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    console.log("accessed");
    res.json({
        success: true,
        message: `You got the data`
    });
});
app.get('/test', function (req, res) {

    const options = {
        accessToken: '',
        ip: req.ip,
        ua: req.headers['user-agent'],
        referrer: req.headers['referer'],
        url: req.hostname
    };
    gator.score(options, function (err, result) {
        if (!err && result && result.score < 100)   //  a score less the 100 is very likely a bot
            res.json({ type: 'botContent', score:result.score});
        else
            res.json({ type: 'humanContent', score:result.score});
    });
});


app.listen(5000, () => {
    console.log(`Server running on port 5000`);
});