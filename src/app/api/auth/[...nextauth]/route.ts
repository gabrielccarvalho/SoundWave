import NextAuth, { type NextAuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter"

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
					redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/callback/google",
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
					include_granted_scopes: true,
				},
			},
		}),
		TwitterProvider({
			clientId: String(process.env.TWITTER_KEY),
			clientSecret: String(process.env.TWITTER_SECRET)
		})
	],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }