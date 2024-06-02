import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { Types } from "mongoose";
import connectDB from "@/utils/connectDB";
import EstateUser from "@/models/EstateUser";
import EstateProfile from "@/models/EstateProfile";

export const GET = async () => {
  try {
    await connectDB();
    let profiles = await EstateProfile.find({ published: true }).select(
      "-userId "
    );
    return NextResponse.json({ data: profiles }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده!" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    await connectDB();

    const {
      title,
      description,
      phone,
      location,
      realEstate,
      price,
      constructionDate,
      category,
      rules,
      amenities,
    } = await req.json();
    if (
      !title ||
      !description ||
      !phone ||
      !location ||
      !realEstate ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }

    const session = await getServerSession(req);
    console.log(session.user.email);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا ابتدا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }
    const user = await EstateUser.findOne({ email: session.user.email });
    console.log(user);
    console.log(user._id);
    if (!user) {
      return NextResponse.json(
        { error: "کاربری با این مشخصات پیدا نشد" },
        { status: 404 }
      );
    }

    const newProfile = await EstateProfile.create({
      title,
      description,
      phone,
      location,
      realEstate,
      price: +price,
      constructionDate,
      category,
      rules,
      amenities,
      userId: new Types.ObjectId(user._id),
    });
    console.log(newProfile);
    return NextResponse.json(
      { message: "آگهی جدید اضافه شد" },
      { status: 201 }
    );
  } catch (error) {
    NextResponse.json({ error: "مشکلی در سرور رخ داده است" }, { status: 500 });
  }
};
export const PATCH = async (req) => {
  try {
    await connectDB();

    const {
      _id,
      title,
      description,
      phone,
      location,
      realEstate,
      price,
      constructionDate,
      category,
      rules,
      amenities,
    } = await req.json();
    if (
      !title ||
      !description ||
      !phone ||
      !location ||
      !realEstate ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا ابتدا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }
    const user = await EstateUser.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "کاربری با این مشخصات پیدا نشد" },
        { status: 404 }
      );
    }
    const profile = await EstateProfile.findOne({ _id });
    if (!profile) {
      return NextResponse.json({ error: "آگهی پیدا نشد" }, { status: 404 });
    }
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است!" },
        { status: 403 }
      );
    }
    profile.title = title;
    profile.description = description;
    profile.phone = phone;
    profile.location = location;
    profile.price = +price;
    profile.realEstate = realEstate;
    profile.constructionDate = constructionDate;
    profile.category = category;
    profile.rules = rules;
    profile.amenities = amenities;
    await profile.save();
    return NextResponse.json(
      { message: "آگهی با موفقیت ویرایش شد" },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ error: "مشکلی در سرور رخ داده است" }, { status: 500 });
  }
};
