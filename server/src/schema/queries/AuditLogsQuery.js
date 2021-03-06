import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql'

import {
  AuthentificationError
} from '../../errors/index'

import { AuditLogType } from '../types/index'
import { AuditLog } from '../../models/index'
import logger from '../../config/logger'

const args = {
  key: { type: new GraphQLNonNull(GraphQLString) }
};

const resolve = (parent, { key }, context) => {
  logger.debug('auditLogs -> Entering Fuction.');

  if (!context.userId) {
    throw new AuthentificationError()
  }

  return AuditLog.find({
    authId: context.userId,
    keyId: key
  })
};

const query = {
  auditLogs: {
    type: new GraphQLList(AuditLogType),
    args,
    resolve
  }
};

export default query
