import gql from "graphql-tag";

const FILTERITEMS_QUERY = gql`
query filterItems{
    evoheatModels{
		id
        Name
    
    }
    bestSuitedFors{
    id
    Type
  }
}
`;

export default FILTERITEMS_QUERY;