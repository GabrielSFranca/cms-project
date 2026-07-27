import { MongoClient, MongoClientOptions } from 'mongodb';
import { attachDatabasePool } from '@vercel/functions';

const options: MongoClientOptions = {
  appName: "devrel.vercel.integration",
  maxIdleTimeMS: 5000
};

const URI=process.env.MONGODB_URI;
if (!URI){
    throw new Error("nao definido mongo uri");
}

const client=new MongoClient(URI, options);


// const client = new MongoClient(process.env.MONGODB_URI, options);
   
// Attach the client to ensure proper cleanup on function suspension
attachDatabasePool(client);

// Export a module-scoped MongoClient to ensure the client can be shared across functions.
export default client; 