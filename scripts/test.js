// const dfd = require('danfojs-node');

// const df = dfd.read_csv(
//   'https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv'
// );

// const articles = dfd.to_json(df, { download: false }); //column format

// console.log(articles);

const dfd = require('danfojs-node');

async function load_process_data() {
  let df = await dfd.read_csv('./data/df.csv');
  df.head().print();
  // const articles = dfd.to_json(df, { download: false });
  dfd.to_json(df, { filePath: './data/df.json' });
}

load_process_data();
