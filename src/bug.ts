import { Pool } from 'pg';

import * as db from './zapatos/src';

async function main() {
  const pool = new Pool({
    connectionString: 'postgres://postgres:postgres@localhost:5432/postgres',
  });
  const query = db.upsert('users', { id: 'test' }, 'id');
  console.log('Generated query:', query.compile());
  const res = await query.run(pool);
  console.log('Result:', res);

  await pool.end();
}

main();
