import gql from "graphql-tag";

const SINGLEPRODUCT_QUERY = gql`
    query Singleproduct($productId: ID!){
        allProduct(id: $productId){
            Name
            Description
            Images(limit: 3){
                url
            }
            Warranty
            Freight
            Bulk
            model{
                Products(limit: 3){
                    id
                    Name
                    MainImage{
                        url
                    }
                }
            }
            best_suited_fors{
                id
                Type
            }
        }
    }
`;

export default SINGLEPRODUCT_QUERY;