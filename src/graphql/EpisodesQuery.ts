import 'vue-apollo';
import gql from 'graphql-tag';

export const episodes = gql`
  query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
      }

      results {
        id
        name
        air_date
        characters {
          name
        }
      }
    }
  }
`;
