# MYT Web

MYT web is the main interface the user uses in order to interact with Move Your Table

>>>
:bulb: This application is now automatically deployed to [Heroku](https://move-your-table-main.herokuapp.com/).
>>>
## Getting Started
### Requirements
- [Docker (Desktop)](https://www.docker.com/get-started)
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Development Setup
1. Clone this project using the following command:
   ```bash
    $ git clone git@git.ti.howest.be:TI/2021-2022/s5/trending-topics/projects/hybrid-work1/front-end.git
   ```
2. Run Yarn install
   ```bash
   $ npm install -g yarn
   $ yarn install
   ```
3. Copy the `.env.example` file, rename it to `.env` and complete using the [`.env` reference](#env-configuration)
4. Start a development server
   ```bash
   $ yarn start
   ```

> ✅ **Done!** You can reach the application at [localhost:3000](http://localhost:3000)

#### Extending capabilities
If you want to enable dynamic data, you'll need to spin up a local instance of MYT-MSF. We suggest using the [Gateway repository](https://git.ti.howest.be/TI/2021-2022/s5/trending-topics/projects/hybrid-work1/gateway#getting-started) as your point of entry.

### Going Live
>>>
:warning: This section only covers setting up the web app
>>>
1. Build an optimized version of the application
   ```bash
   $ yarn build
   ```
   >>>
   :warning: It could be that yarn might fail to minify your build. Look [here](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) for more information around this 
   >>>

2. Install the Serve dependency
   ```
   $ npm install -g serve
   ```
   >>>
   :bulb: This is not the only way to serve your application. You can discover all solutions [here](https://create-react-app.dev/docs/deployment/)
   >>>

3. Serve your application
   ```bash
   $ serve -s build
   ```
## `.env` configuration
