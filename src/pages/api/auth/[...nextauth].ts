import NextAuth, { NextAuthOptions } from "next-auth";
import CreadentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CreadentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        fullname: { label: "Fullname", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password, fullname } = credentials as {
          email: string;
          password: string;
          fullname: string;
        };
        const user: any = {
          id: 1,
          email: email,
          password: password,
          fullname: fullname,
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, profile, user }: any) {
      if (account?.provider === "cedentials") {
        token.email = user.email;
        token.fullname = user.fullname;
      }
      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
