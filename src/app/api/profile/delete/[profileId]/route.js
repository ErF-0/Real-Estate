import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "@/utils/connectDB";
import EstateProfile from "@/models/EstateProfile";
import EstateUser from "@/models/EstateUser";

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
    const profile = await EstateProfile.findOne({ _id: id });
    if (!profile) {
      return NextResponse.json({ error: "آگهی پیدا نشد" }, { status: 404 });
    }
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }
    await EstateProfile.deleteOne({ _id: id });
    return NextResponse.json(
      { message: "آگهی مورد نظر حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ error: "مشکلی در سرور رخ داده" }, { status: 500 });
  }
};
