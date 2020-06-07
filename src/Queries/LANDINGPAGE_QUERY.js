import gql from "graphql-tag";

const LANDINGPAGE_QUERY = gql`
    query Evomodels {
        
        landingPage{
            Image{
            url
            }
            
        }
    }
`;

export default LANDINGPAGE_QUERY;