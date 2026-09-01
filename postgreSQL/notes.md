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

# Database constraints 

This is the next layer of making your API reliable.

Right now you've got:

``` 
Client
  ↓
Express validation
  ↓
PostgreSQL 
```

Your Express validator says:

`This request looks valid.`

But PostgreSQL should independently say:

`This data is allowed to exist.`

Those are different responsibilities.

## PRIMARY KEY

Your posts table should have:

> id INTEGER PRIMARY KEY

A primary key guarantees:

- id cannot be NULL
- every id must be unique

So this is rejected:

```SQL
INSERT INTO posts (id, title)
VALUES (10, 'A');

INSERT INTO posts (id, title)
VALUES (10, 'B');
```

> The second insert violates the primary-key constraint.

This protects your database even if your Express validation has a bug.

## NOT NULL

* Suppose every post must have a title:

> title TEXT NOT NULL

Then:

```SQL
INSERT INTO posts (id, title)
VALUES (20, NULL);
```

is rejected.

Notice that this is different from your JavaScript check:

`if (!title)`

Your JavaScript protects the API.

`NOT NULL` protects the database.

## UNIQUE

Suppose you had:

`email TEXT UNIQUE`

Then:

user A → kishu@example.com ✓
user B → kishu@example.com ✗

UNIQUE guarantees that two rows can't have the same value in that column.

A primary key is also unique, but UNIQUE lets you enforce uniqueness on other columns.

## CHECK

This is particularly interesting for your Posts project.

You could have:

views INTEGER CHECK (views >= 0)

Now PostgreSQL itself refuses:

views = -50

because it violates the constraint.

This is database-level business/data integrity.

## FOREIGN KEY

This becomes important once we introduce users.

Imagine:

users
---------
id
1
2
3

posts
---------
id
user_id

If `posts.user_id` references `users.id`:

FOREIGN KEY (user_id) REFERENCES users(id)

then you can't create:

`post.user_id = 999999`

if user 999999 doesn't exist.

> That maintains referential integrity.

## Set Default
```SQL
ALTER TABLE posts
ALTER COLUMN views 
SET DEFAULT '0';
```

## Table Information
To check current condition of your database table.

```SQL
SELECT
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'posts';
```