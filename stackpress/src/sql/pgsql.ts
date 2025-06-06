import actions, { Actions } from './actions/index.js';

export type {
  Field,
  Relation,
  ForeignKey,
  AlterFields,
  AlterKeys,
  AlterUnqiues,
  AlterPrimaries,
  AlterForeignKeys,
  StrictValue,
  StrictOptValue,
  FlatValue,
  Value,
  Resolve,
  Reject,
  Order,
  Join,
  Dialect,
  QueryObject,
  Transaction,
  Connection
} from '@stackpress/inquire';

//@ts-ignore
export type { Results, Resource, Connector } from '@stackpress/inquire-pg';

export type {
  SearchParams,
  SearchJoin,
  SearchJoinMap,
  SearchPath,
  DatabaseConfig,
  DatabasePlugin
} from './types.js';

export {
  Alter,
  Create,
  Delete,
  Insert,
  Select,
  Update,
  Mysql,
  Pgsql,
  Sqlite,
  Engine,
  Exception,
  joins
} from '@stackpress/inquire';

//@ts-ignore
export { PGConnection, connect } from '@stackpress/inquire-pg';

export {
  stringable,
  floatable,
  dateable,
  boolable,
  intable,
  toErrorResponse,
  toResponse,
  toSqlString,
  toSqlBoolean,
  toSqlDate,
  toSqlInteger,
  toSqlFloat,
  sequence,
  getColumns,
  getColumnInfo,
  getColumnPath,
  getColumnJoins,
  getAlias
} from './helpers.js';

export { actions, Actions };