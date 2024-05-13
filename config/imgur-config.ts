"use server";
import { ImgurClient } from "imgur";

const imgurClient = new ImgurClient({ clientId: process.env.IMGUR_CLIENT_ID });

// const imgurClient = new ImgurClient({ clientId: "d56f63814906172" });

export { imgurClient };
