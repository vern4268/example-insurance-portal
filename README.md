This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

This project uses Next Auth and Google OAuth for authentication. Here are the env variables you need to supply before running the project:

- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- AUTH_SECRET

Check out the [Google Guide](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid) if you are unsure of how to obtain the Google credentials. AUTH_SECRET can be generated using the `npx auth secret` command. Copy and paste .env.example to .env and paste in all the env variables.

Optional: Replace NEXTAUTH_URL in the env file, google authorised origins and redirect urls with your domain if needed.

Install the project:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Or build and serve:

```bash
npm run build
# or
yarn build
```

```bash
npm run start
# or
yarn start
```
