import { Client, Databases, Storage } from 'appwrite';

export const client = new Client();

client
     .setEndpoint('https://fra.cloud.appwrite.io/v1')
     .setProject(process.env.NEXT_PUBLIC_PROJECT_ID); // Replace with your project ID

export const STORAGE = new Storage(client);
export const DATABASES = new Databases(client);

export { ID } from 'appwrite';
