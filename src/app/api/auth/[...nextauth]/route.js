import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";
import EstateUser from "@/models/EstateUser";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است.");
        }
        const { email, password } = credentials;
        if (!email || !password)
          throw new Error("لطفا اطلاعات معتبر وارد کنید");
        const user = await EstateUser.findOne({ email: email.toLowerCase() });
        if (!user) throw new Error("لطفا ابتدا ثبت نام کنید");
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است.");
        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
