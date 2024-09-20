import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const user = await currentUser();

  if (!user) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  try {

    const amount = await prisma.savedArticle.count({
      where: {
        user: {
          userId: user.id,
        }
      },
    });

    return new Response(JSON.stringify({ amount }), {
      status: 200,
      statusText: "OK",
    });

  } catch(e) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
