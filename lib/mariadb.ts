import mariadb, { Connection } from "mariadb";

// Function to execute queries
export async function callMariaDB(
  query: string,
  attributes?: any[]
): Promise<any> {
  let conn: Connection | undefined;
  try {
    // Create a direct connection
    conn = await mariadb.createConnection({
      host: process.env.MARIA_DB_HOST,
      port: Number(process.env.MARIA_DB_PORT),
      user: process.env.MARIA_DB_USER,
      password: process.env.MARIA_DB_PASSWORD,
      database: process.env.MARIA_DB_DATABASE,
      connectTimeout: 3000,
    });

    // Execute the query
    const rows =
      attributes && attributes.length > 0
        ? await conn.query(query, attributes)
        : await conn.query(query);

    // Return the result
    return rows;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err; // Throw the error to handle it in the caller function
  } finally {
    if (conn) {
      await conn.end(); // Close the connection
    }
  }
}
