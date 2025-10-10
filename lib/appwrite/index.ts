// using node-appwrite (so we kno all services work on server side
// appwrite client:

"use server";

import { Client, Account, Databases, Avatars, Storage } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { cookies } from "next/headers";

export const createSessionClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId); // client will be used to initialize
  // instances and services, stay connected to same project!!!

  const session = (await cookies()).get("appwrite-session");

  if (!session || !session.value) throw new Error("No session");

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};

// new client per request bc sharing same connection can lead to security issues
// admin or session client, we are doing session client! user sessions!
// ex. manage ur own data
// ADMIN has a bunch of power and can handle other stuff (higher level access, not users)

export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId) // client will be used to initialize instances
    .setKey(appwriteConfig.secretKey); // and servies, stay connected to same project!!!

  // same as session but remove session stuff + set key + get storage

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
    get avatar() {
      return new Avatars(client);
    },
  };
};
