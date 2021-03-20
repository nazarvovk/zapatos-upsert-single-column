import { Client } from 'pg';

async function main() {
  const client = new Client({
    connectionString: 'postgres://postgres:postgres@localhost:5432/postgres',
  });

  await client.connect();
  await client.query(`
    CREATE TABLE users(
      id VARCHAR (200) NOT NULL PRIMARY KEY
    )
  `);
  await client.end();
}

main();
