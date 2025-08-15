import { NextRequest, NextResponse } from "next/server";
import db from "@/db/drizzle";
import { courses } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getIsAdmin } from "@/lib/admin";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ courseID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { courseID } = await params;

  const course = await db.query.courses.findFirst({
    where: eq(courses.id, parseInt(courseID)),
  });

  return NextResponse.json(course);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ courseID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { courseID } = await params;

  const body = await request.json();
  const course = await db
    .update(courses)
    .set(body)
    .where(eq(courses.id, parseInt(courseID)))
    .returning();

  return NextResponse.json(course[0]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ courseID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { courseID } = await params;

  const course = await db
    .delete(courses)
    .where(eq(courses.id, parseInt(courseID)))
    .returning();

  return NextResponse.json(course[0]);
}
