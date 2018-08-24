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
