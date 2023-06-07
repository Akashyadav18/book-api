const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

connectDB();
const app = express();

app.use(express.json())
app.use("/api/books", require("./routes/bookRoutes"));
app.use(errorHandler);

const options = {
    definition: {
        openapi: "3.0.0",
        
        servers: [
            {
                url: "http://localhost:5001/"
            },
        ],
    },
    apis: ["apiDocs.js"]
};
const bookDoc = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(bookDoc));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`)
});