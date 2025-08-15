import { NextRequest, NextResponse } from "next/server";
import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getIsAdmin } from "@/lib/admin";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ unitID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { unitID } = await params;

  const unit = await db.query.units.findFirst({
    where: eq(units.id, parseInt(unitID)),
  });

  return NextResponse.json(unit);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ unitID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { unitID } = await params;

  const body = await request.json();
  const unit = await db
    .update(units)
    .set(body)
    .where(eq(units.id, parseInt(unitID)))
    .returning();

  return NextResponse.json(unit[0]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ unitID: string }> }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { unitID } = await params;

  const unit = await db
    .delete(units)
    .where(eq(units.id, parseInt(unitID)))
    .returning();

  return NextResponse.json(unit[0]);
}
