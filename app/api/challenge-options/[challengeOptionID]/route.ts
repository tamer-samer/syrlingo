import { NextRequest, NextResponse } from "next/server";
import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getIsAdmin } from "@/lib/admin";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ challengeOptionID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { challengeOptionID } = await params;

  const challengeOption = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, parseInt(challengeOptionID)),
  });

  return NextResponse.json(challengeOption);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ challengeOptionID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { challengeOptionID } = await params;

  const body = await request.json();
  const challengeOption = await db
    .update(challengeOptions)
    .set(body)
    .where(eq(challengeOptions.id, parseInt(challengeOptionID)))
    .returning();

  return NextResponse.json(challengeOption[0]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ challengeOptionID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { challengeOptionID } = await params;

  const challengeOption = await db
    .delete(challengeOptions)
    .where(eq(challengeOptions.id, parseInt(challengeOptionID)))
    .returning();

  return NextResponse.json(challengeOption[0]);
}
