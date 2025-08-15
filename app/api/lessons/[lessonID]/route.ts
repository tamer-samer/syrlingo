import { NextRequest, NextResponse } from "next/server";
import db from "@/db/drizzle";
import { lessons } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getIsAdmin } from "@/lib/admin";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ lessonID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { lessonID } = await params;

  const lesson = await db.query.lessons.findFirst({
    where: eq(lessons.id, parseInt(lessonID)),
  });

  return NextResponse.json(lesson);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ lessonID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { lessonID } = await params;

  const body = await request.json();
  const lesson = await db
    .update(lessons)
    .set(body)
    .where(eq(lessons.id, parseInt(lessonID)))
    .returning();

  return NextResponse.json(lesson[0]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ lessonID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { lessonID } = await params;

  const lesson = await db
    .delete(lessons)
    .where(eq(lessons.id, parseInt(lessonID)))
    .returning();

  return NextResponse.json(lesson[0]);
}
