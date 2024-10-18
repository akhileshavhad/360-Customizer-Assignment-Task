# Task 6: REST API Rate Limiting

## Scenario:
You are tasked with implementing rate limiting for a REST API endpoint to prevent abuse. The rate limit should be applied per IP address.


## 6.1.What libraries or strategies would you use to handle rate limiting?
Solution:

Libraries and Strategies for Rate Limiting are as,

**express-rate-limit**:
- A popular middleware for Express.js that simplifies the implementation of rate limiting. It allows you to set a maximum request limit and specify error messages.
- **Installation**: 
```bash
npm install express-rate-limit
```

- **Basic Usage**:
```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
windowMs: 15 * 60 * 1000, // 15 minutes
max: 100, // Limit each IP to 100 requests
message: {
    error: 'Too many requests, please try again later.',
},
});

app.use(limiter); // Apply to all requests
```


## 6.2.Describe a basic approach to implement rate limiting in a Node.js application.
Solution :

Basic Approach to Implement Rate Limiting in Node.js

1. **Define Rate Limit Criteria**: Establish maximum requests allowed from each user/IP within a specific time frame (e.g., 100 requests per 15 minutes).

2. **Use Middleware**: Integrate a rate limiting middleware, such as `express-rate-limit`, to enforce the defined limits on incoming requests.

3. **Store Request Counts**: Maintain request counts in memory or a persistent store like Redis to track the number of requests from each user/IP.

4. **Check and Respond**: For each request, check the stored count against the limit and respond with a `429 Too Many Requests` status if exceeded.

5. **Inform Users**: Provide clear feedback in the response to inform users about the rate limit and when they can retry their requests.


