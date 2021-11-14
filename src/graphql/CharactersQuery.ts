import 'vue-apollo';
import gql from 'graphql-tag';

export const characters = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }

      results {
        id
        name
        image
        location {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`;
