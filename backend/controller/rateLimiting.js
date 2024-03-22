import { CronJob } from 'cron';

const RATE_LIMIT = 10;

const tokenBucket = [];

// Function to refill the bucket
const refillBucket = () => {
    if (tokenBucket.length < RATE_LIMIT) {
        tokenBucket.push(Date.now());
    }
};
// Middleware for rate limiting
const rateLimitMiddleware = (req, res, next) => {
    if (tokenBucket.length > 0) {
        const token = tokenBucket.shift();
        console.log(`Token ${token} is consumed`);
        res.set('X-RateLimit-Remaining', tokenBucket.length);
        next();
    }
    else {
        res.status(429).set('X-RateLimit-Remaining', 0).set('Retry-After', 2).json({
            success: false,
            message: 'Too many requests'
        });
    }
};

export const job = new CronJob('*/2 * * * * *', () => {
    refillBucket();
});

export default rateLimitMiddleware