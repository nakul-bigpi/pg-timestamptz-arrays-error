import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "prisma-client-autogen";

async function main() {
  const connectionString = process.env.POSTGRES_URL;

  const adapter = new PrismaPg(
    {
      connectionString,
      database: "prismalocal",
      host: "localhost",
      password: "prisma-local-only",
      port: "54120",
      user: "prismalocal",
    },
    {
      schema: "prismalocal",
    }
  );

  const prisma = new PrismaClient({ adapter });

  console.log("[nodejs] connecting...");
  await prisma.$connect();
  console.log("[nodejs] connected");

  console.log("[nodejs] creating a Metadata entry...");

  try {
    const newMetadata = await prisma.metadata.create({
      data: {
        fieldName: "inductionDates",
        dateListValues: [new Date(), new Date()],
      },
    });

    console.log(
      "[nodejs] created Metadata entry:",
      JSON.stringify(newMetadata, null, 2)
    );

    // Verify it was stored correctly by retrieving it
    const retrievedMetadata = await prisma.metadata.findUnique({
      where: {
        id: newMetadata.id,
      },
    });

    console.log(
      "[nodejs] retrieved Metadata entry:",
      JSON.stringify(retrievedMetadata, null, 2)
    );
  } catch (error) {
    console.error("Error with Prisma operations:", error);
  }

  console.log("[nodejs] disconnecting...");
  await prisma.$disconnect();
  console.log("[nodejs] disconnected");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
