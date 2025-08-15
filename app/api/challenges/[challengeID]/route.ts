import { NextRequest, NextResponse } from "next/server";
import db from "@/db/drizzle";
import { challenges } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getIsAdmin } from "@/lib/admin";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ challengeID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { challengeID } = await params;

  const challenge = await db.query.challenges.findFirst({
    where: eq(challenges.id, parseInt(challengeID)),
  });

  return NextResponse.json(challenge);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ challengeID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { challengeID } = await params;

  const body = await request.json();
  const challenge = await db
    .update(challenges)
    .set(body)
    .where(eq(challenges.id, parseInt(challengeID)))
    .returning();

  return NextResponse.json(challenge[0]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ challengeID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { challengeID } = await params;

  const challenge = await db
    .delete(challenges)
    .where(eq(challenges.id, parseInt(challengeID)))
    .returning();

  return NextResponse.json(challenge[0]);
}
