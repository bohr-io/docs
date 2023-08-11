---
sidebar_position: 21
---

# Remix
Remix on bohr.io

Discover how to leverage bohr.io's capabilities with Remix. 

Remix is a comprehensive, server-rendered React framework. Its inherent features, including nested pages, error boundaries, seamless transitions between loading states, and more, empower developers to craft cutting-edge web applications.

Deploying server-rendered Remix applications to bohr.io requires no setup. However, please note that Remix currently does not support static site generation.

Getting Started Initiating your journey with Remix on bohr.io can be accomplished in various ways:

If you already possess a Remix project, simply install the bohr.io CLI and execute the bohr.io command from your project's root directory.

Clone one of our Remix example repos to your favorite git provider and deploy it on bohr.io with the button below:

BUTTON

Or, choose a template from our options:

TEMPLATES

bohr.io deployments seamlessly integrate with your Git provider, allowing you to generate preview URLs for every pull request you create for your Remix project.
@bohr.io/remix 
The @bohr.io/remix package provides essential types and utilities tailored for Remix applications deployed on bohr.io. These utilities include:

`json`
`defer`
`createCookie`

For optimal utilization of bohr.io features like streaming, Edge Functions, Serverless Functions, and more, it is recommended to import utilities from @bohr.io/remix rather than the standard Remix packages like @remix-run/node.
Incorporate @bohr.io/remix into your code wherever you would typically import utility functions from the following packages:

@remix-run/node
@remix-run/cloudflare
@remix-run/deno

To begin, open your Remix project's root directory using your preferred terminal and execute the following command to install @bohr.io/remix:

pnpm
yarn
npm

pnpm i @bohr.io/remix
Server-Side Rendering (SSR)
Server-Side Rendering (SSR) empowers you to dynamically render pages on the server. This proves advantageous for pages requiring unique rendering data for each request. For instance, you can perform tasks like authentication checks or geolocation analysis on incoming requests.

When it comes to Remix, routes defined in /app/routes are inherently equipped with server-side rendering upon deployment.

The subsequent example portrays a fundamental route that undergoes SSR:

/app/routes/basic-example.tsx

TypeScript

export default function SSR() { 
return ( 
<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}> 
<h1>This route employs SSR</h1>
 </div>
 );
 } 

There are two primary methods to deploy your SSR routes:

Serverless Functions (default)
Edge Functions

In essence, Server-Side Rendering (SSR) in the context of Remix on bohr.io:

Efficiently scales down during periods of inactivity
Automatically scales up to manage surges in traffic
Incorporates infrastructure aware of the framework, enabling seamless transition between Edge and Node.js (Serverless) runtimes.
Serverless Functions
Serverless Functions empower developers to create functions that utilize resources scaling up and down according to traffic demands. This ensures their resilience during peak hours while also preventing excessive costs during periods of reduced activity.

In the context of Remix, API routes within /app/routes are set to be deployed as Serverless Functions by default. To explore deploying them as Edge Functions, refer to our Edge Functions section.

The subsequent example illustrates a basic route that generates a page featuring the header, "Welcome to Remix with Vercel (Serverless)":

/app/routes/serverless-example.tsx

TypeScript

export default function Serverless() { 
return ( 
<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
 <h1>Welcome to Remix with Vercel (Serverless)</h1> 
</div>
 );
 } 

You can locally test Serverless Functions using remix dev.

In summary, Serverless Functions in the context of Remix on bohr.io:

Efficiently scale down during periods of inactivity
Automatically scale up as traffic surges Support standard Web APIs, including URLPattern, Response, and more.
Edge Functions
Edge Functions present a swift and dependable solution for delivering dynamic content to users. By default, Edge Functions are globally deployed and are invoked within one of bohr.io's Edge regions, which are situated near your site's visitors.

Edge Functions prove invaluable when you require rapid network interaction with data, such as executing OAuth callbacks, responding to webhook requests, or engaging with an API that enforces a stringent time limit for request completion.

In the realm of Remix, routes defined within /app/routes are conventionally deployed as Serverless Functions. To deploy a route utilizing Edge Functions, it is imperative to export a config object with runtime: 'edge', as exemplified below:

/app/routes/edge-example.tsx

TypeScript

export const config = { runtime: 'edge' };

export default function Edge() {
return ( 
<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}> 
<h1>Welcome to Remix@Edge</h1> 
</div>
 );
 } 
Edge Functions for Nested Routes 
By default, a route inherits the runtime defined in its parent layout route. To exclude a route from utilizing Edge Functions, you can export a config object with runtime: 'nodejs'.

The subsequent illustration underscores a parent admin route deployed on the Edge Runtime, which generates a listing of blog posts for an admin user.

/app/routes/posts/admin.tsx

TypeScript

import { Link, Outlet, useLoaderData } from '@remix-run/react'; 
import type { LoaderFunction } from '@vercel/remix'; 
import { json } from '@vercel/remix'; 
import { getPostListings } from '/models/post.server'; 
import { requireAdminUser } from '/session.server';
export const config = { runtime: 'edge' };

type LoaderData = { 
posts: Awaited<ReturnType<typeof getPostListings>>; };

export const loader: LoaderFunction = async ({ request }) => {
await requireAdminUser(request); 
return json<LoaderData>({ posts: await getPostListings() }); 
};

export default function AdminPostList() {
const { posts } = useLoaderData() as LoaderData;
return ( 
<div> 
<h1>Blog Admin</h1>
 <nav>
 <ul> 
{posts.map((post) => ( 
<li key={post.slug}> 
<Link to={post.slug}>{post.title}</Link>
 </li> 
))}
 </ul> 
</nav>
<main> <Outlet /> 
</main> 
</div>
);
 }

Subsequently, you could create a nested $slug file under /app/routes/posts/admin/, which can be deployed utilizing our Serverless NodeJS runtime, as demonstrated below:

/app/routes/posts/admin/$slug.tsx

TypeScript

import { json } from '@vercel/remix'; 
import type { LoaderFunction } from '@vercel/remix'; 
import type { Post } from '/models/post.server'; 
import { requireAdminUser } from '/session.server';

export const config = { runtime: 'nodejs' };

type LoaderData = { post?: Post };

export const loader: LoaderFunction = async ({ request, params }) => {
// Authenticate the user
await requireAdminUser(request);
// Fetch the post
const post = await getPost(params.slug);
 // Add it to the loader data, which
// the component can use
return json<LoaderData>({ post });
};

export default function Post() {
const { post } = useLoaderData() as LoaderData;
return ( 
<div> 
<p>{post.title}</p> 
<p>{post.description}</p> 
</div>
);
} 

If the parent layout route is not explicitly deployed as an Edge Function, both it and its nested routes are conventionally deployed as Serverless Functions. In such cases, there is no necessity to export a config object with runtime: 'nodejs'
.
In summary, Edge Functions in the context of Remix on bohr.io:

Are swiftly deployed globally, tailored for dynamic content delivery
Serve as an effective choice for rapid network interaction and time-sensitive operations
Provide a seamless framework for both parent and nested routes, with configurable deployment runtimes.
Streaming
You have the capability to stream HTTP responses using Remix on bohr.io, both within Edge and Serverless routes.

To embark on this, your initial step entails the installation of @bohr/remix.

Subsequently, import handleRequest from the @bohr/remix package and incorporate it into the default function exported from your entry.server module:

/app/entry.server.tsx


TypeScript

import { handleRequest } from '@vercel/remix'; 
import { RemixServer } from '@remix-run/react';
import type { EntryContext } from '@vercel/remix';

export default function ( 
request: Request, 
responseStatusCode: number, 
responseHeaders: Headers, 
remixContext: EntryContext,
) { 
const remixServer = <RemixServer context={remixContext} url={request.url} />; 
return handleRequest( 
request, 
responseStatusCode, 
responseHeaders, 
remixServer,
);
} 

It's important to note that the quantity of data that can be streamed within an Edge Function is subject to the memory allocation and the initial response time of execution. Surpassing these limits will result in function failure.

Furthermore, you have the capacity to implement loading states with Remix on bohr.io utilizing Remix's defer method and Await component.

When a loader function of a route returns a defer call, the data becomes accessible within components through the useLoaderData hook.

The ensuing example exemplifies a route that emulates a network under throttle by introducing a delay to the resolution of a promise, and exhibits a loading state until the promise concludes:

/app/routes/defer-route.tsx

TypeScript

import { Suspense } from 'react'; 
import { Await, useLoaderData } from '@remix-run/react'; 
import { defer } from '@vercel/remix';

export async function loader({ request }) { 
const version = process.versions.node;

return defer({ 
version: sleep(version, 1000),
});
}

// Introducing a 1-second delay to promise resolution
function sleep(val: string, ms: number) { 
return new Promise((resolve) => setTimeout(() => resolve(val), ms));
}

export default function App() { 
const { version } = useLoaderData();

return (
<Suspense fallback={'Loading…'}> 
<Await resolve={version}>{(version) => <strong>{version}</strong>}</Await> 
</Suspense> 
); 
} 

In summary, Streaming with Remix on bohr.io:

Enhances Function response times, heightening the user experience of your app
Permits the return of substantial data volumes without surpassing the confines of Edge and Serverless Function response sizes
Empowers the presentation of Instant Loading UI directly from the server through Remix's defer() and Await.
Cache-Control Headers 
The Edge Network of bohr.io employs caching at the edge to swiftly deliver data to your users. The process of static caching requires no configuration whatsoever.

By incorporating a Cache-Control header into the responses of your Remix routes, you gain the ability to specify a range of caching regulations for both client (browser) requests and server responses. The cache must adhere to the directives defined within the Cache-Control header.

Remix facilitates the modification of headers through the headers method, which can be exported within your routes situated in /app/routes.

The subsequent example illustrates a route that introduces Cache Control headers, thereby instructing the route to:

Serve cached content for repeated requests within 1 second without revalidating the content
For repeated requests occurring after 1 second but before 60 seconds, furnish the cached content and denote it as stale. This stale content will subsequently undergo revalidation in the background, acquiring a fresh value from your loader function /app/routes/example.tsx

TypeScript

export async function loader() { 
// Retrieve data necessary for content rendering
}

export function headers() { 
return { 
'Cache-Control': 's-maxage=1, stale-while-revalidate=59', 
}; 
}
Global Headers
In your entry.server file, you have the option to export the headers method to apply headers globally. The ensuing example illustrates the establishment of a global Cache-Control header, thereby delivering cached content for requests that recur within a span of 60 seconds:

/app/entry.server.tsx

TypeScript

import { renderToString } from 'react-dom/server'; 
import { RemixServer } from '@remix-run/react'; 
import type { EntryContext } from '@vercel/remix';

export default function handleRequest( 
request: Request, 
responseStatusCode: number, 
responseHeaders: Headers, 
remixContext: EntryContext,
 ) { 
const markup = renderToString( 
<RemixServer context={remixContext} url={request.url} />,
);

responseHeaders.set('Cache-Control', 's-maxage=60');

return new Response('<!DOCTYPE html>' + markup, { 
status: responseStatusCode, 
headers: responseHeaders, 
}); 
}

To recap, the utilization of Cache-Control headers with Remix on bohr.io:

Enables you to cache responses for server-rendered Remix applications utilizing Edge or Serverless Functions
Facilitates content delivery from the cache while concurrently refreshing the cache in the background through the application of stale-while-revalidate
Operates seamlessly out of the box with no need for additional configuration
Analytics 
The Analytics functionality of bohr.io empowers you to visualize and monitor the performance of your application over time. Within your project's dashboard, the Analytics tab provides comprehensive insights into your website's visitors, presenting metrics such as top pages, top referrers, and user demographics.

To engage Analytics, navigate to the Analytics tab within your project dashboard on bohr.io and click "Enable" in the modal that appears.

For tracking visitors and page views, we recommend initiating by installing our @bohr/analytics package. Execute the following terminal command in the root directory of your Remix project:

pnpm 
yarn 
npm

pnpm i @vercel/analytics 

Subsequently, follow the instructions below to integrate the Analytics component into your application. This component serves as a wrapper around Vercel's tracking script, seamlessly integrating with Remix.

Incorporate the following component into your root file:

app/root.tsx

TypeScript

import { Analytics } from '@vercel/analytics/react';

export default function App() { 
return ( 
<html lang="en"> 
<body> 
<Analytics /> 
</body> </html> 
); 
} 

To recap, the utilization of Analytics with Remix on bohr.io:

Facilitates the tracking of traffic and offers insights into top-performing pages
Provides detailed breakdowns of visitor demographics, encompassing aspects such as their OS, browser, geolocation, and more
Utilizing a Custom `server` File 
Typically, generating a custom server.js file for your Remix application when deploying to bohr.io is not a requisite. In most cases, we discourage this practice.

Nevertheless, if your project mandates the use of a custom server file, you will be required to install @vercel/remix and import createRequestHandler from @vercel/remix/server. The ensuing 
example illustrates a fundamental server.js file:

server.ts

TypeScript

import { createRequestHandler } from '@vercel/remix/server'; 
import * as build from '@remix-run/dev/server-build';

export default createRequestHandler({
build, 
mode: process.env.NODE_ENV, 
getLoadContext() { 
return { 
nodeLoadContext: true, 
}; 
}, 
});
