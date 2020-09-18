const { MongoClient } = require('mongodb');

const { DB_URI, DB_NAME } = process.env;

module.exports = async (collect) => {
  try {
    const client = await MongoClient.connect(DB_URI, { useNewUrlParser: true });
    const dBase = client.db(DB_NAME);
    return dBase.collection(collect);
  } catch (error) {
    throw new Error('connection failed');
  }
};
