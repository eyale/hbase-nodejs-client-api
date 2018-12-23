const HBase = require('hbase-client');

const client = HBase.create({
  zookeeperHosts: [ '127.0.0.1:2181' ],
  zookeeperRoot: '/hbase-0.94.16',
});

const putMany = (table_name, row, column_values) => {
  client.putRow(
    table_name,
    row,
    {...column_values},
    (err) => { console.log(err)},
  );
}
