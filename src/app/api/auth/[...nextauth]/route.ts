import NextAuth, { type NextAuthOptions } from "next-auth"
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
					redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/callback/google",
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }