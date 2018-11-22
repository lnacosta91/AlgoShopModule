import gql from 'graphql-tag'

const exampleQuery = gql`
{
    exampleEntity {
      exampleField
      exampleRelation {
        exampleField
      }
    }
}`;