// When using node 12.x run this code with the --experimental-modules option
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const CosmosClient = require('@azure/cosmos').CosmosClient;
import { config } from './config.mjs';

console.log({ config });

const client = new CosmosClient({ endpoint: config.endpoint, key: config.auth.masterKey });

client
  .database(config.databaseId)
  .container(config.containerId)
  .item('0452cc34-0b6f-4c35-1f74-e4ce58ea3783')
  .read()
  .then(console.log);