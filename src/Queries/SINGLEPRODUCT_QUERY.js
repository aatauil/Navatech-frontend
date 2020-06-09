import gql from "graphql-tag";

const SINGLEPRODUCT_QUERY = gql`
    query Singleproduct($productId: ID!){
        
        allProduct(id: $productId){
            Name
            Description
            Images{
                url
            }
            
        }
    }
`;

export default SINGLEPRODUCT_QUERY;