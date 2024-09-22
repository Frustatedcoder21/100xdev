const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin'); // Import the admin router
const userRouter = require('./routes/user');   // Import the user router

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Routes
app.use('/admin', adminRouter); // Use the admin router
app.use('/user', userRouter);   // Use the user router

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
