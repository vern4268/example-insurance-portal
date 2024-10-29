import type {
    GetServerSidePropsContext,
    NextApiRequest,
    NextApiResponse,
} from 'next';
import GoogleProvider from 'next-auth/providers/google';

import { getServerSession, type NextAuthOptions } from 'next-auth';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: 'signin',
        signOut: 'signout',
    },
};

export function auth(
    ...args:
      | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
      | [NextApiRequest, NextApiResponse]
      | []
) {
    return getServerSession(...args, authOptions);
}
