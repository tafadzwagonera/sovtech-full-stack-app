# sovtech-full-stack-app

## Setup instructions

Follow these instructions to get the project up and running:

1. Install Node.js.

    Make sure you have [Node](https://nodejs.org/en/download/) LTS installed on your machine.

2. Install Yarn.

    Make sure you have [Yarn](https://classic.yarnpkg.com/en/docs/install) installed on your machine.

3. Download the repository [here](git@github.com:tafadzwagonera/sovtech-full-stack-app.git).

4. Install dependencies.

    This will install the Node dependencies for both projects at once.

    ```bash
    cd ../sovtech-full-stack-app/
    yarn install
    ```


5. Start the two apps

    ```bash
    yarn workspace frontend start

    cd backend/
    yarn workspace backend start
    ```

    Or, can you start both apps in one go from the repo root

    ```bash
    yarn start
    ```

6. Open http://localhost:3000/ to verify if the front-end app works.


7. Open http://localhost:4000/ to verify if the GraphQL server works.

  And, you're all set up!