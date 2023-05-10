import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";

const app = Fastify();
const prisma = new PrismaClient();
app.register(cors);

app.get("/", () => {
  return "Hello World";
});

app.listen({ port: 3333 });
