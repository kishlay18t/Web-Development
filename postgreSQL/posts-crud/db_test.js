const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "posts_db",
    password: "Kmp180926@",
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