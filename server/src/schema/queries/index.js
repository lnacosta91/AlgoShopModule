import {
  GraphQLObjectType
} from 'graphql'

import AuditLogsQuery from './AuditLogsQuery'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: Object.assign(
    AuditLogsQuery
  )
});

export default RootQuery
