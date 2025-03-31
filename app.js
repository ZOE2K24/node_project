const express = require('express');
const router = require("./routes/pages.js");

const app = express();
const PORT = 3000;

//implementing routes - juan miguel legaspi (mid-code signature)
app.use(router);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});