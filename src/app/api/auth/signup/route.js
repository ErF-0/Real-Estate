import { NextResponse } from "next/server";
import EstateUser from "@/models/EstateUser";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const existingUser = await EstateUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "کاربری با این مشخصات وجود دارد" },
        { status: 422 }
      );
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await EstateUser.create({
      email,
      password: hashedPassword,
    });
    return NextResponse.json(
      { message: "حساب کاربری با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "ارتباط با سرور برقرار نشد" },
      { status: 500 }
    );
  }
}
