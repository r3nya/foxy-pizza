import gql from 'graphql-tag';

export const GET_PIZZA_SIZES_QUERY = gql`
  {
    pizzaSizes {
      name
      maxToppings
      basePrice
    }
  }
`;

export const GET_TOPPINGS_QUERY = gql`
  query Toppings($pizzaSize: PizzaSizes!) {
    pizzaSizeByName(name: $pizzaSize) {
      toppings {
        topping {
          name
          price
        }
        defaultSelected
      }
    }
  }
`;
