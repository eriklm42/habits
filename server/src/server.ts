import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";

const app = Fastify();
const prisma = new PrismaClient();
app.register(cors);

app.get("/", () => {
  return "Hello World";
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server running!")
});
