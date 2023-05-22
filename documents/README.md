## Infrastructure Description

The infrastructure for this project consists of the following components:

- AWS RDS: A managed relational database service provided by Amazon Web Services (AWS). It is used to host the PostgreSQL database for the application.
- AWS S3: A scalable object storage service provided by AWS. It is used to store and deploy the application's static files.

## App Dependencies

The application has the following dependencies:

- Node.js: A JavaScript runtime environment that allows running JavaScript code outside of a web browser.
- Yarn: A package manager for managing the application's dependencies and running various scripts.
- React: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making API requests.
- AWS CLI: The AWS Command Line Interface, which provides commands for interacting with various AWS services.

## Pipeline Process

The pipeline defined in the `config.yml` file follows the following steps:

1. Checkout: The pipeline checks out the source code from the version control system.
2. Restore Cache: It restores the cached dependencies (node_modules) from a previous build, if available.
3. Install Dependencies: It runs the `yarn install` command to install the application's dependencies.
4. Save Cache: It caches the dependencies (node_modules) for future builds, improving build performance.
5. Build: It runs the `yarn build` command to build the application for production.
6. Deploy: It deploys the built application to the AWS S3 bucket using the AWS CLI.

The pipeline is triggered only when there is a code change in the `main` or `master` branch, as specified in the `filters` section of the `build` job.

By following this pipeline process, the application code is built and deployed automatically whenever changes are pushed to the specified branches. This enables continuous integration and deployment, ensuring that the latest version of the application is always available in the AWS S3 bucket.