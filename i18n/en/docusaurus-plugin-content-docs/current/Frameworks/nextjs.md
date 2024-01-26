# Next.js

The bohr.io platform provides two main options for deploying projects using the Next.js framework. This guide will help you understand and choose the option that best suits your needs.

## Option 1: Static Export (Recommended)

The first - and recommended - option is **Static Export**, formerly known as next export. You must add an attribute output: 'export' to your next.config.js file.


Read more about configuring static export in the [oficial Next.js documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports).

### Benefits

- The front end is served directly by bohr.io's edge layer, resulting in the lowest possible latency for users.

### Limitações

- Image Optimization is disabled.
- Other features that depend on Server-Side Rendering (SSR) are not available.

### How to Use

1. Use the `next-blog-starter` template to create a new project with this configuration:

    [Create a new repository with the template](https://bohr.io/createRepository?sampleUrl=https://github.com/bohr-io/next-blog-starter)

2. Make sure the following environment variables are present:

    ```
    BUILD_CMD=npx next build && npx next export
    DEV_CMD=npx next dev --port $PORT
    INSTALL_CMD=npm install
    PUBLIC_PATH=./out
    DEPLOY_PATH=./
    ```

    If you are using version 14 of Next, also add the following values:

    ```
    BOHR_FUNCTION_RUNTIME=nodejs18.x
    ```

3. If you are not using the `next-blog-starter` template, it is necessary to turn off the Image Optimization in the `next.config.js` file:
    ```
    images: {
        unoptimized: true
    }
    ```
## Option 2: Experimental SSR Support

The second option is to enable experimental support for Server-Side Rendering (SSR) by creating environment variables.

### How to Use

1. Use the `nextjs-template` template to create a new project with SSR settings enabled:

    [Create a new repository with the template](https://bohr.io/createRepository?sampleUrl=https://github.com/bohr-io/nextjs-template)

2. Make sure the following environment variables are present:

    ```
    BOHR_WEB_ADAPTER=1
    BOHR_WEB_ADAPTER_TYPE=nextjs
    INSTALL_CMD=npm install
    BUILD_CMD=npm run build
    DEV_CMD=npx next dev --port $PORT
    PUBLIC_PATH=./public
    DEPLOY_PATH=./
    ```

3. You also need to add the following configuration to the `next.config.js` file:

    ```
    module.exports = {
        output: 'standalone',
    }
    ```
## Conclusion 

Choose the option that best suits your project's needs. Static Export is generally faster and offers lower latency but has some limitations. Experimental SSR support can be helpful if you need features that depend on server-side rendering.

