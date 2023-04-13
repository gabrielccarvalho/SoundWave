import NextAuth, { type NextAuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
	secret: process.env.SECRET,
	session: {
		strategy: "jwt",
		maxAge: 60 * 60 * 24 * 1, // 1 day
	},
	providers: [
		GoogleProvider({
			clientId: String(process.env.GOOGLE_ID),
			clientSecret: String(process.env.GOOGLE_SECRET),
			authorization: {
				params: {
					prompt: "consent",
					access_type: "online",
					response_type: "code",
					include_granted_scopes: true,
				},
			},
		}),
	],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }