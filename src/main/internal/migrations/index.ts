import { Sequelize } from 'sequelize';
import * as sqlite3 from 'sqlite3';
import { SequelizeStorage, Umzug } from 'umzug';

export default async function runMigrations(){
  const sequelize = new Sequelize({
    dialectModule: sqlite3,
    storage: '../../../../local/db.sqlite'
  })

  const umzug = new Umzug({
    migrations: {glob: 'sqlite/*.ts'},
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console
  });

  await umzug.up();
}
