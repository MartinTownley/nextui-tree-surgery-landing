"use server";
import { zodEnv } from "@/app/lib/envSchema";
import { ImgurClient } from "imgur";

// const imgurClient = new ImgurClient({ clientId: zodEnv.IMGUR_CLIENT_ID });

const imgurClient = new ImgurClient({ clientId: "d56f63814906172" });

export { imgurClient };
