require('dotenv').config();

const Typesense = require('typesense');

module.exports = (async () => {
  const TYPESENSE_CONFIG = {
    nodes: [
      {
        host: process.env.TYPESENSE_HOST,
        port: process.env.TYPESENSE_PORT,
        protocol: process.env.TYPESENSE_PROTOCOL,
      },
    ],
    apiKey: process.env.TYPESENSE_ADMIN_API_KEY,
  };

  console.log('Config: ', TYPESENSE_CONFIG);

  const typesense = new Typesense.Client(TYPESENSE_CONFIG);

  const schema = {
    name: 'articles',
    num_documents: 0,
    fields: [
      // {
      //   name: 'language',
      //   type: 'string',
      //   facet: true,
      // },
      {
        name: 'doc',
        type: 'string',
        facet: true,
      },
      {
        name: 'title',
        type: 'string',
        facet: false,
      },
      {
        name: 'abstract',
        type: 'string',
        facet: false,
      },
      {
        name: 'publisher',
        type: 'string',
        facet: true,
      },
      {
        name: 'year',
        type: 'int32',
        facet: true,
      },
      {
        name: 'cited',
        type: 'int32',
        facet: true,
      },
    ],
    default_sorting_field: 'cited',
  };

  const articles = require('./data/df.json');

  try {
    const collection = await typesense.collections('articles').retrieve();
    console.log('Found existing collection of articles');
    console.log(JSON.stringify(collection, null, 2));

    if (collection.num_documents !== articles.length) {
      console.log('Collection has different number of documents than data');
      console.log('Deleting collection');
      await typesense.collections('articles').delete();
    }
  } catch (err) {
    console.error(err);
  }

  console.log('Creating schema...');
  console.log(JSON.stringify(schema, null, 2));

  await typesense.collections().create(schema);

  console.log('Populating collection...');
  // articles.forEach(async (article) => {
  //   delete article.year;
  //   delete article.cited;
  // });
  try {
    const returnData = await typesense
      .collections('articles')
      .documents()
      .import(articles);

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }
})();
