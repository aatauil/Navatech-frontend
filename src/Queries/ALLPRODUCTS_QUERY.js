import gql from "graphql-tag";


const ALLPRODUCTS_QUERY = gql`
query allProducts {
    allProducts{
        id
        Name
        Images{
            url
        }
    } 
}
`;

export default ALLPRODUCTS_QUERY;