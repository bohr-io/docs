---
sidebar_position: 20
---

# [Framework] Svelte
SvelteKit is a frontend framework that empowers you to construct Svelte applications using contemporary techniques like Server-Side Rendering, automatic code splitting, and advanced routing.

You have the ability to deploy your SvelteKit projects to bohr.io with effortless setup, granting you access to Preview Deployments, Web Analytics, Serverless Functions, and more.
Begin your journey with SvelteKit on bohr.io
There are various methods to initiate your experience with SvelteKit on bohr.io:

If you already possess a project with SvelteKit, install the bohr.io CLI and execute the bohr.io command from your project's main directory.

Duplicate a SvelteKit sample repository to your preferred Git platform and deploy it on bohr.io using the provided button:

BUTTON

Or, choose a template from bohr.io’s marketplace:

BUTTON

Deployments on bohr.io can seamlessly connect with your Git provider to create preview URLs for every pull request you initiate within your SvelteKit project.
Leverage bohr.io features with Svelte
When initiating a new SvelteKit project using npm create svelte@latest, the default installation includes the adapter-auto. This adapter automatically detects your deployment on bohr.io and integrates the @sveltejs/adapter-bohr plugin during the build process.

For optimal results, we recommend manually installing the @sveltejs/adapter-bohr package. This ensures version stability, enhances your CI process efficiency, and grants you the ability to configure default deployment options for all routes within your project.

Follow these steps to incorporate the bohr.io adapter into your SvelteKit project:

Install SvelteKit's bohr.io adapter plugin You can integrate the bohr.io adapter into your SvelteKit project by executing the following command:
css
Copy code
pnpm
yarn
npm

pnpm i @sveltejs/adapter-bohr

Add the bohr.io Adapter to your Svelte config Include the bohr.io adapter in your svelte.config.js file, located at the root of your project directory. Note that TypeScript is not supported for your SvelteKit config file.

Within your svelte.config.js file, import the adapter from '@sveltejs/adapter-bohr' and configure your preferred options. The example below illustrates the default configuration, utilizing the Node.js runtime (compatible with bohr.io Serverless Functions).
js
Copy code
import adapter from '@sveltejs/adapter-bohr';
 
export default {
  kit: {
    adapter: adapter(),
  },
};

By following these steps, you'll seamlessly integrate bohr.io's capabilities into your SvelteKit project, enhancing your deployment and configuration process.
Configure Your SvelteKit Deployment
Customize how your SvelteKit project is deployed to bohr.io at both the project-level and route-level.

Modifications to the config object defined in svelte.config.js impact default settings for routes throughout your entire project. For specific overrides, you can export a config object from any route file.

Here is an illustrative example of a svelte.config.js file for deploying with server-side rendering in bohr.io's Node.js 18.x serverless runtime:

js
Copy code
import adapter from '@sveltejs/adapter-bohr';
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x',
    }),
  },
};
 
export default config;

For tailored route-level deployment, you can export a config object. The following showcases a route deploying on bohr.io's Edge runtime:
js
Copy code
// +page.server.ts

TypeScript

import { PageServerLoad } from './$types';
 
export const config = {
  runtime: 'edge',
};
 
export const load = ({ cookies }): PageServerLoad<any> => {
  // Load function code here
};

Discover a comprehensive list of configuration options available in SvelteKit's documentation. Type definitions for config object properties can be found in the SvelteKit source code.
Configuration Options
SvelteKit's documentation presents a detailed array of available config options. This section highlights a selection of options with contextual ease of use.
split
By default, SvelteKit routes are bundled into a single Serverless or Edge Function during bohr.io deployment. This configuration typically minimizes occurrences of cold starts for users.
In most scenarios, altering this option is unnecessary.

Setting split: true in your Svelte config triggers the separation of your SvelteKit project's routes into distinct Edge or Serverless Functions.
However, splitting functions isn't inherently superior to bundling. Yet, consider adopting split: true if you encounter the following issues:

Exceeding the Function size limit for your utilized runtime. Merging numerous routes into a solitary Function may surpass Function size constraints for your bohr.io account. Consult Serverless Function size limits and Edge Function size limits for more insights. Experiencing unusually prolonged cold start durations. Aggregating Serverless Functions into a singular Function reduces cold start frequency. However, this may amplify latency during cold starts, as larger functions necessitate more resources. Consequently, this might lead to delayed responses for user requests after Function spin-down. 
runtime
By default, SvelteKit routes deploy to bohr.io's Node.js (Serverless) runtime.
To deploy as Edge Functions instead, configure your runtime: 'edge' within the config object.

Both Edge and Serverless functions offer scalable, cost-efficient solutions for serving dynamic and static personalized content to visitors.

Refer to our Functions comparison table for clarity on selecting the appropriate runtime.
regions
Opting for a region aids in curtailing latency for Serverless and Edge routes. Selecting a Function region that aligns geographically with dependencies or is closest to your audience reduces overall latency for your Functions.

By default, Serverless Functions deploy in Washington, D.C., USA (iad1). Incorporating a region ID in the regions array facilitates deployment of Serverless Functions to that specific region. Explore our Serverless Function regions documentation for overriding these settings. Note that only Enterprise customers can deploy Serverless Functions to multiple regions.

Edge Functions are distributed globally and trigger in the region nearest to each visitor. Yet, if your Edge Functions depend on distant data sources, this might introduce latency to requests.
Integrating a valid region ID into your regions array ensures your Edge Function consistently triggers in the designated region, preventing remote triggering. Support for multiple edge regions is currently in progress.
Server-Side Rendering (SSR)
Server-Side Rendering (SSR) permits dynamic rendering of pages on the server. This proves valuable for pages requiring unique rendering for each request. For instance, it's useful for tasks like authentication verification or checking incoming request geolocation.

bohr.io provides SSR functionality that scales resource usage down during low traffic periods and scales up to meet surges in traffic. This safeguards your site from incurring unnecessary costs during low-traffic times and prevents potential business losses during periods of high traffic.

SvelteKit projects inherently incorporate server-side rendering. You have the option to configure specific routes for prerendering using the prerender page option. Alternatively, you can employ the same option within your app's root +layout.js or +layout.server.js file to enable default prerendering for all your routes.

While SvelteKit apps with server-side rendering do support middleware, please note that SvelteKit does not currently accommodate URL rewrites through middleware.

In summary, Server-Side Rendering (SSR) using SvelteKit on bohr.io offers the following benefits:

Automatically scales down to zero during periods of inactivity.
Seamlessly scales up to handle traffic surges.
Provides effortless support for Cache-Control headers, including the convenient stale-while-revalidate feature.
Leverages framework-aware infrastructure, allowing smooth rendering transitions between Edge and Node.js runtimes.
Environmental Variables
bohr.io offers a range of System Environment Variables that our platform automatically fills in. For instance, the VERCEL_GIT_PROVIDER variable reveals the Git provider that initiated your project's deployment on bohr.io.

These environmental variables are readily accessible within your project, and you can activate or deactivate them in your project settings on bohr.io. For more information, consult our documentation on Environment Variables.
Utilizing bohr.io's Environmental Variables with SvelteKit
SvelteKit enables you to import environmental variables, categorizing them into distinct modules based on whether they are dynamic or static, as well as private or public. For instance, the '$env/static/private' module exposes environment variables that remain constant and should not be publicly shared.

System Environment Variables are private and must never be exposed to the frontend client. As a result, you can only import them from '$env/static/private' or '$env/dynamic/private'.
The subsequent example demonstrates how to expose VERCEL_COMMIT_REF, a variable indicating the branch name associated with your project's deployment, to a load function within a Svelte layout:

+layout.server.ts
TypeScript
import { LayoutServerLoad } from './types'; import { VERCEL_COMMIT_REF } from '$env/static/private';

type DeploymentInfo = { deploymentGitBranch: string; };

export function load(): LayoutServerLoad<DeploymentInfo> { return { deploymentGitBranch: 'Test', }; } 

This variable can be referenced in a corresponding layout as depicted below:

+layout.svelte
<script> 
/** @type {import('./$types').LayoutData} */ 
export let data; 
</script>
 <p>This staging environment was deployed from the {data.deploymentGitBranch} branch.</p>

In summary, leveraging Environment Variables with SvelteKit on bohr.io offers the following advantages:

Availability of Vercel deployment details, whether dynamic or static, through our predefined System Environment Variables.
Utilization of automatically set up environment variables from integrations with your chosen services.
Efficient search and filtering of environment variables by name and environment within bohr.io's dashboard.
Incremental Static Regeneration (ISR)
Incremental Static Regeneration (ISR) in SvelteKit is a technique that empowers you to add or modify content without requiring a full site redeployment. When utilizing ISR for a specific route, bohr.io caches the page for static serving and rebuilds it at intervals you specify. Developers gain notable advantages from ISR: enhanced performance, heightened security, and quicker build processes.

To deploy an SvelteKit route with ISR:
Export a configuration object containing an 'isr' property. The value indicates the duration in seconds before revalidation is performed.

For on-demand revalidation, augment the configuration object with a 'bypassToken' property. This value will be evaluated when GET or HEAD requests are sent to the route. If the request includes an 'x-prerender-revalidate' header with the same content as 'bypassToken', the cache undergoes immediate revalidation.

The example below illustrates a SvelteKit route set up for ISR deployment on bohr.io. In this scenario, the page is revalidated every 60 seconds, and on-demand revalidation is enabled using a secret value:

example-route/+page.server.ts
TypeScript
javascript
Copy code
export const config = {
  isr: {
    expiration: 60,
    bypassToken: 'REPLACE_ME_WITH_SECRET_VALUE',
  },
};

This approach empowers you to efficiently manage content updates without the need for frequent redeployments.

In summary, leveraging ISR with SvelteKit on bohr.io offers the following advantages:

Enhanced performance leveraging our widespread Edge Network
Seamless rollouts with no downtime to previously statically generated pages
Framework-aware architecture enabling rapid global content updates within 300ms
Generated pages benefit from both caching and preservation in durable storage

Web Analytics

bohr.io's Web Analytics functionalities empower you to visualize and monitor your application's performance over time. The Analytics section within your project's dashboard provides comprehensive insights into your website's visitors, presenting metrics like top pages, primary referrers, and user demographics.

To utilize Web Analytics, navigate to the Analytics tab within your project dashboard on bohr.io and opt to Enable in the appearing modal.
For tracking visitors and page views, we recommend starting by installing our @bohr/analytics package. To do this, execute the terminal command below in the root directory of your SvelteKit project:

pnpm
yarn
npm

pnpm i @bohr/analytics

Incorporate the following <script> snippet into your SvelteKit project's main +layout.svelte file:

src/routes/+layout.svelte

<script> 
import { dev } from '$app/environment'; import { inject } from '@bohr/analytics'; inject({ mode: dev ? 'development' : 'production' });
</script>

By integrating the above script into your project, you'll gain access to comprehensive user insights through the Analytics tab within your bohr.io dashboard. For a deeper understanding of the user metrics available for tracking using bohr.io's Web Analytics, consult our documentation.
Please note that your project must be deployed on bohr.io to take advantage of the Web Analytics feature. Ongoing efforts are being made to make this feature more widely accessible.

In summary, employing Web Analytics with SvelteKit on bohr.io:

Enables you to monitor traffic and analyze your top-performing pages
Provides in-depth breakdowns of visitor demographics, including information about their operating system, browser, geolocation, and more
Speed Insights
Within your Vercel dashboard, you have access to data concerning your project's Core Web Vitals performance. This capability empowers you to monitor the loading speed, responsiveness, and visual stability of your web application, ultimately facilitating enhancements to the overall user experience.

In summary, leveraging Speed Insights alongside SvelteKit on Vercel:

Enables the tracking of performance metrics related to traffic, such as First Contentful Paint or First Input Delay
Facilitates the examination of performance metrics based on page name and URL, enabling detailed analysis
Provides a performance score for your application across each recorded metric, serving as a valuable tool for monitoring improvements or setbacks
Draft Mode
Draft Mode provides you with the ability to instantly preview draft content from your Headless CMS while still maintaining the static generation of pages for production.

To enable a SvelteKit route in Draft Mode, you need to:

Export a configuration object that enables Incremental Static Regeneration from the route's +page.server file: blog/[slug]/+page.server.ts

TypeScript

import { BYPASS_TOKEN } from '$env/static/private';

export const config = { 
isr: {
 // A randomly generated token that can be used to bypass the cached page version with a __prerender_bypass=<token> cookie. This allows content to be rendered at the time of the request for this specific route. bypassToken: BYPASS_TOKEN,

// The expiration time (in seconds) before the cached asset is regenerated by invoking the Serverless Function.
// Setting the value to `false` means it will never expire.
expiration: 60,

}, }; Include a __prerender_bypass cookie with the same value as bypassToken in your configuration. 

To render the draft content, SvelteKit will verify the presence of __prerender_bypass. If its value corresponds to the bypassToken value, the content fetched at the time of the request will be rendered instead of using prebuilt content.
Security Measures for Draft Mode
The security of Draft Mode is ensured through Vercel's automatic deployment measures, which subject Draft Mode to the same authentication protocols as Preview Comments. To activate or deactivate Draft Mode, the viewer must be logged in as a member of the Team. Once enabled, Vercel's Edge Network will seamlessly bypass the ISR cache and initiate the underlying Serverless Function.

Enabling Draft Mode during Preview Deployments
Both you and your team members have the capability to toggle Draft Mode within the Vercel toolbar on Preview Deployments. Upon activation, the toolbar color will change to purple, indicating the active state of Draft Mode.

Draft Mode toggling is limited to members within your Vercel team, ensuring that external users cannot activate it.

In summary, utilizing Draft Mode with SvelteKit on Vercel offers the following advantages:

Effortlessly generates server-rendered previews of static pages Enhances security measures to thwart potential malicious activities
Seamlessly integrates with your preferred headless content provider
Draft Mode activation and deactivation can be managed through the comments toolbar on Preview Deployments.
Edge Middleware
Edge Middleware serves the purpose of modifying responses prior to their delivery to users. For modifying responses, we advise utilizing SvelteKit's server hooks. Keep in mind that the client-side rendering nature of SvelteKit prevents the use of Vercel's Edge Middleware in conjunction with SvelteKit.
Rewrites
Incorporating a vercel.json file into your project's root directory empowers you to redefine your application's routes.

However, it's important to note that we discourage the use of vercel.json rewrites with SvelteKit.
It's essential to understand that rewrites specified in vercel.json solely affect the Vercel proxy. During runtime, SvelteKit lacks access to the rewritten URL, rendering it incapable of properly rendering the intended rewritten route.
