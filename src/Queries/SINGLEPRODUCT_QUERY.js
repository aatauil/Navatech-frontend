import gql from "graphql-tag";

const SINGLEPRODUCT_QUERY = gql`
    query Singleproduct($singleProductId: ID!){
        allProduct(id: $singleProductId){
            id
            Name
            Description
            Images(limit: 3){
                id
                url
            }
            Warranty
            Freight
            Bulk
            model{
                id
                Products(limit: 4){
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