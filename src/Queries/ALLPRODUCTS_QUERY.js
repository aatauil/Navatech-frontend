import gql from "graphql-tag";


const ALLPRODUCTS_QUERY = gql`
query allProducts($model: String, $suited: String) {
    allProducts(where: {model_in: [$model] , best_suited_fors_in: [$suited ]}){
        id
        Name
        MainImage{
            url
        }
        model{
            id
            Name
        }
    } 
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

export default ALLPRODUCTS_QUERY;