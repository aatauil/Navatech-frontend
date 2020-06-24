import gql from "graphql-tag";

const EVOMODELS_QUERY = gql`
    query Evomodels {
    evoheatModels( sort:"Position:asc") {
        id
        FullName
        Name
        Description
        Image{
            url
        }
    }
}
`;

export default EVOMODELS_QUERY;