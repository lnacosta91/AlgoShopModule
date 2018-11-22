import {
  GraphQLObjectType
} from 'graphql'

import AddAuditLog from './AddAuditLog'

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: Object.assign(
      AddAuditLog
  )
});

export default Mutation
