# To Connect PostgreSQL to Express
Download postgreSQL Driver - pg (node postgres) = Library
`npm install pg`

Use its Pool API to make queries in web applications.

# Create Database Connection - CommonJS

```JS
const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "databaseName_db",
    password: "YOUR_PASSWORD",
    port: 5432
});
```