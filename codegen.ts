import { CodegenConfig } from "@graphql-codegen/cli";

const codegenConfig: CodegenConfig = {
  schema: [
    {
      "https://smart-yeti-44.hasura.app/v1/graphql": {
        headers: {
          "x-hasura-admin-secret":
            "0lfebsntBTcXg3mnTYkGn7n0LBlRA7Y5VqpC7X6AVLnV3kMtqI9AbKlfeb02unzJ",
        },
      },
    },
  ],
  documents: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./src/**/*.graphql",
    "./src/**/*.gql",
  ],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default codegenConfig;
