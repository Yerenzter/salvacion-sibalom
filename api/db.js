import { createPool } from "mariadb";
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "salvacion_sibalomdb",
});

export default Object.freeze({ pool: pool });
