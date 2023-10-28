import EntryCard from "@/components/EntryCard";
import { analyze } from "@/utils/ai";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { request } from "http";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const PATCH = async (request: Request, { params }) => {
  const { content } = await request.json();
  const user = await getUserByClerkID();
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      content,
    },
  });

  const analysis = await analyze(updatedEntry.content);
  const updated = await prisma.analysis.upsert({
    where: {
      entryId: updatedEntry.id,
    },
    create: { userId: user.id, entryId: updatedEntry.id, ...analysis },
    update: analysis,
  });

  return NextResponse.json({
    data: { ...updatedEntry, analysis: updated },
  });
};

export const DELETE = async (request: Request) => {
  const { userId, id } = await request.json();
  const user = await getUserByClerkID();
  console.log(userId, id, "finakl data");
  const deleteEntry = await prisma.journalEntry.delete({
    where: {
      userId: userId,
      id: id,
    },
  });

  return NextResponse.json({
    data: deleteEntry,
  });
};
