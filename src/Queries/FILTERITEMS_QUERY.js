import gql from "graphql-tag";

const FILTERITEMS_QUERY = gql`
query filterItems{
    evoheatModels(sort:"Position:asc"){
		id
        Name
    
    }
    bestSuitedFors(sort:"Position:asc"){
    id
    Type
  }
}
`;

export default FILTERITEMS_QUERY;