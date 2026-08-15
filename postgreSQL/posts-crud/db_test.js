const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432
});


async function getPosts(){
    const result = await pool.query(`
        SELECT *
        FROM posts
        WHERE id = 3;
        `);

    console.log(result.rows);

    await pool.end();
}

getPosts();