import gql from "graphql-tag";


const ALLPRODUCTS_QUERY = gql`
query allProducts {
    allProducts{
        id
        Name
        MainImage{
            url
        }
    } 
}
`;

export default ALLPRODUCTS_QUERY;