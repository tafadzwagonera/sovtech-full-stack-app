import * as shell from "shelljs"

shell.rm("-rf", "./build/src/graphql/schemas")
shell.cp("-r", "./src/graphql/schemas", "./build/src/graphql/schemas")