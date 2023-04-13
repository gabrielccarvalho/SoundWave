import NextAuth, { type NextAuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXT_AUTH_SECRET,
	session: {
		strategy: "jwt",
		maxAge: 60 * 60 * 24 * 1, // 1 day
	},
	providers: [
		GoogleProvider({
			clientId: String(process.env.GOOGLE_ID),
			clientSecret: String(process.env.GOOGLE_SECRET),
		}),
		// CredentialsProvider({
		// 	name: "Sign in",
		// 	credentials: {
		// 		email: {
		// 			label: "Email",
		// 			type: "email",
		// 			placeholder: "example@example.com",
		// 		},
		// 		password: { label: "Password", type: "password" },
		// 	},
		// 	async authorize(credentials) {
		// 		const user = { id: "1", name: "Admin", email: "admin@admin.com" }
		// 		return user
		// 	},
		// }),
	],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }