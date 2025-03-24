//stackpress
import type { 
  UnknownNest,
  NestedObject, 
  StatusResponse
} from '@stackpress/lib/dist/types';
import type Engine from '@stackpress/inquire/dist/Engine';
//common
import Exception from '../../Exception';
//schema
import type Model from '../../schema/spec/Model';
//local
import { toErrorResponse } from '../helpers';
import detail from './detail';

/**
 * Updates a database table row
 */
export default async function update<M extends UnknownNest = UnknownNest>(
  model: Model, 
  engine: Engine,
  ids: Record<string, string|number>,
  input: NestedObject
): Promise<StatusResponse<M>> {
  //collect errors, if any
  const errors = model.assert(input, false);
  //if there were errors
  if (errors) {
    //return the errors
    return Exception
      .for('Invalid parameters')
      .withCode(400)
      .withErrors(errors as NestedObject<string>)
      .toResponse() as StatusResponse<M>;
  }

  //action and return response
  const update = engine
    .update(model.snake)
    .set(model.serialize(input) as NestedObject<string>);
  for (const column of model.ids) {
    if (!ids[column.name]) {
      return Exception
        .for('Missing %s', column.name)
        .withCode(400)
        .toResponse()as StatusResponse<M>;
    }
    update.where(`${column.snake} = ?`, [ ids[column.name] ]);
  }
  try {
    await update;
  } catch (e) {
    return toErrorResponse(e as Error) as StatusResponse<M>;
  }
  return await detail(model, engine, ids) as StatusResponse<M>;
};