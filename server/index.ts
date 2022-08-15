import Fastify from "fastify";
import FastifyCors from "@fastify/cors";

const fastify = Fastify();

fastify.register(FastifyCors, {});

fastify.get("/", (_, reply) => {
  reply.send({ hello: "world" });
});

fastify.get("/hi", (_, reply) => {
  reply.send({ hello: "how are you?" });
});

fastify.listen({ port: 8888, host: "0.0.0.0" });
