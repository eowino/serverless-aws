# serverless-aws
A serverless (FaaS - Functions as a Service) backend using Node.js on AWS Lambda

### Step 1
Create a new user from the [AWS Console](https://console.aws.amazon.com/iam/home?#/users).
- enable programmatic access
- Choose the policies you want. For demo purposes, you may use the AdministratorAccess policy.
- Confirm and take note of the provided Access key ID
- Install the awscli with [brew](https://brew.sh/) i.e. `brew install awscli` or see [other methods of installation](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)


### Step 2
- Once the awscli is installed, run `aws configure`
- Provide the 'AWS Access Key ID' and 'AWS Secret Access Key'
- To interact with the aws framework, run `npm install -g serverless` to install serverless.
- Once installed, you may run `serverless` ( or use the alias `sls` ) in your terminal to see the available commands.

### Step 3
- Create a `serverless.yml` file to configure serverless
- See the `serverless.yml` and correspoding `handler.js` file for more info
- Run `sls deploy` to deploy your stack. This packages everything into a zip file and deploys it into your cloud formation stack.
- To invoke your function use the invoke command like so `$ sls invoke --function helloWorld`
- To see your console.log debug outputs, use the `--log` flag when invoking
- Once deployed, run `sls deploy --function helloWorld` to only update your function. This is quicker as it doesn't re-deploy
your cloud formation

### Step 4
- Attach an HTTP endpoint to your Lambda function via events - see `serverless.yml`
- Your function must return an object - see `handler.js`

### Step 5
- To store data using DynamoDB, add a resources section in the yaml config file
- [Create a table](https://console.aws.amazon.com/dynamodb/home)