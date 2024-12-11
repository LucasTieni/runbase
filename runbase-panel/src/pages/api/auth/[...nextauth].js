import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize({ email, password }) {
        const response = await fetch(process.env.STRAPI_API_URL + '/auth/local', {
          method: 'POST',
          body: new URLSearchParams({ identifier: email, password: password }),
        })

        const dataresponse = await response.json()

        if (dataresponse.user) {
          console.log('dataresponse', dataresponse)
          return {
            ...dataresponse.user,
            jwt: dataresponse.jwt,
          }
        } else {
          return null
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: true,
  // session: { strategy: 'jwt' },
  callbacks: {
    async session({ session, token, user }) {
      // session.jwt = token.jwt
      // session.id = 123
      // // return session
      // session.user = token.user
      // return session
      session.user = token.user
      return session
    },
    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false
      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account?.provider}/callback?access_token=${account?.access_token}`
        )
        const data = await response.json()
        // token.jwt = data.jwt
        // token.id = data.user.id
        // token.jwt = data.jwt
        token.user = user
      }
      return token
    },
    // async session({ session, token }) {
    //   session.user = token.user
    //   return session
    // },
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.user = user
    //   }
    //   return token
    // },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
}

const Auth = (req, res) => NextAuth(req, res, authOptions)

export default Auth
