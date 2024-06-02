import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "@/utils/connectDB";
import EstateProfile from "@/models/EstateProfile";
import EstateUser from "@/models/EstateUser";

export const PATCH = async (req, context) => {
  try {
    await connectDB();
    const id = context.params.profileId;
    const session = await getServerSession(req);
    const user = await EstateUser.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "کاربری با این مشخصات پیدا نشد" },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "دسترسی محدود" }, { status: 403 });
    }
    const profile = await EstateProfile.findOne({ _id: id });
    if (!profile) {
      return NextResponse.json({ error: "آگهی پیدا نشد" }, { status: 404 });
    }
    profile.published = true;
    await profile.save();
    return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "مشکلی در سرور رخ داده" }, { status: 500 });
  }
};

export const DELETE = async (req, context) => {
  try {
    await connectDB();
    const id = context.params.profileId;
    const session = await getServerSession(req);
    const user = await EstateUser.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "کاربری با این مشخصات پیدا نشد" },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "دسترسی محدود" }, { status: 403 });
    }
    const profile = await EstateProfile.findOne({ _id: id });
    if (!profile) {
      return NextResponse.json({ error: "آگهی پیدا نشد" }, { status: 404 });
    }
    await EstateProfile.deleteOne({ _id: id });

    return NextResponse.json(
      { message: "آگهی از صف انتشار حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ error: "مشکلی در سرور رخ داده" }, { status: 500 });
  }
};
