import JSONDB, { JSONDBversion } from "jsondb";
// creating a new JSONDB object
export const database = new JSONDB();
// iniatialises a new JSONDB database instance and created the database file
database.init({
  name: "paska_storage",
  password: "...paska...",
  username: "paska",
  encrypted: false,
});

const dataSchema = database.schema({
  name: "data",
  columns: {
    input: {
      type: "string",
    },
    output: {
      type: "string",
      nullable: true,
    },
  },
});

// creating schema (tables) in JSONDB
const userSchema = database.schema({
  name: "user",
  columns: {
    user_name: {
      type: "string",
    },
  },
  // adding relations definition
  relations: {
    data: {
      target: dataSchema,
      type: "many",
    },
  },
});

// writes table schema into your JSONDB instance file
database.assemble([dataSchema, userSchema]);

export const details = {
  password: "...paska...",
  username: "paska",
};

// a connection needs details for security
export const connection = await database.createJSONDBConnection(details);
