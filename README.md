# Next.js on Cloudflare Workers Assets

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technology Used

- Application Hosting: [Cloudflare Workers Assets](https://developers.cloudflare.com/workers/static-assets/) & OpenNext
- Database for Products: [Cloudflare D1](https://developers.cloudflare.com/d1/)
- Front end Framework: Next.js 14 built with App Router Architecture
  - Static Routes
  - Dynamic Routes
  - Loading States
  - Server Actions
  - Cloudflare Bindings

## Getting Started

1. Clone the repository to your local machine.
2. Create the database where products will live in the local and remote environment.

    - Create you database with the following command:
    `npx wrangler d1 create cloudflare-ecommerce-nextjs`.
    - The output of the command will have show your database id. Update the `wrangler.json` with your database id.
    - Populate your local D1 database by running executing `schema.sql` script. This is in the root of the project 
    `npx wrangler d1 execute cloudflare-ecommerce-nextjs --local --file=./schema.sql`.
    - Populate your remote D1 database by changing `--local` to `--remote` in the previous command: 
    `npx wrangler d1 execute cloudflare-ecommerce-nextjs --remote --file=./schema.sql`.

3. Start the Next.js development server with `npm run dev` and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
4. Deploy your application to Cloudflare Workers Assets with `npm run deploy`

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
