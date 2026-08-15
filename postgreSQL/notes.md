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

# Query Database

```JS
async function testDb(){
    const result = await pool.query("Query string");
}
```

`result` comes in several parts:
- .command = Which command used in query ('SELECT')
- .rowCount = number of rows
- .rows = Actual array with elements full of table rows.
- .fields = What fields are in the keys of all rows and their information

# Protect from SQL Injections
Use parameterized queries when user input enters queries

DONT
```JS
const result = await pool.query(
    `SELECT * FROM posts WHERE id = ${id}`
);
```

INSTEAD
```JS
const result = await pool.query(
    "SELECT * FROM posts WHERE id = $1",
    [id]
);
```

# SQL Keywords

- SELECT
- FROM
- WHERE
- INSERT
- UPDATE
- DELETE
- CREATE TABLE