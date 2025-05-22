# PostgreSQL timestamptz array column issue

## Problem

When using Prisma with a PostgreSQL `timestamptz` array column, the `create()` operation fails with the following error:

```log
PrismaClientKnownRequestError: 
Invalid `prisma.metadata.create()` invocation:


Inconsistent column data: Column type 'Unknown' could not be deserialized from the database.
    at Zn.handleRequestError (/Users/nakul/Documents/Codes/others/pg-timestamptz-arrays-error/node_modules/prisma-client-autogen/runtime/library.js:124:7459)
    at Zn.handleAndLogRequestError (/Users/nakul/Documents/Codes/others/pg-timestamptz-arrays-error/node_modules/prisma-client-autogen/runtime/library.js:124:6784)
    at Zn.request (/Users/nakul/Documents/Codes/others/pg-timestamptz-arrays-error/node_modules/prisma-client-autogen/runtime/library.js:124:6491)
    at async l (/Users/nakul/Documents/Codes/others/pg-timestamptz-arrays-error/node_modules/prisma-client-autogen/runtime/library.js:133:9778)
    at async main (file:///Users/nakul/Documents/Codes/others/pg-timestamptz-arrays-error/src/main.js:31:25) {
  code: 'P2023',
  meta: {
    modelName: 'Metadata',
    message: "Column type 'Unknown' could not be deserialized from the database."
  },
  clientVersion: '6.8.2'
}
```

## Steps to reproduce

1. Clone the repository
2. Run docker-compose to start PostgreSQL database -

  ```bash
  docker-compose up -d
  ```

  This will start a PostgreSQL database on port 54120.

3. Install dependencies -

  ```bash
  pnpm install
  ```

4. Run below command to execute the `create` operation -

  ```bash
  pnpm test
  ```

5. You should see the error in the console.
6. Relevant code can be found in the `src/main.js` file.