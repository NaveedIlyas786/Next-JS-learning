import { NextResponse } from "next/server";

export const GET = async (req, context) => {
  const paramsData = await context.params; // Await the context before accessing params
  console.log("params: ", paramsData);
  const getID = paramsData.id;

  console.log("Id is: ", getID);

  return NextResponse.json({ message: "ID received", id: getID }, { status: 200 });
};
