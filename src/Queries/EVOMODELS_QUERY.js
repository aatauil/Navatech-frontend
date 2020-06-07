import gql from "graphql-tag";

const EVOMODELS_QUERY = gql`
    query Evomodels {
    evoheatModels {
        id
        FullName
        Description
        Image{
            url
        }
    }
}
`;

export default EVOMODELS_QUERY;