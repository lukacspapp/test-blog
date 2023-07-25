import { gql } from 'graphql-request';
import { fetcher } from './fetcher';

export async function getCategories() {
  const query = gql`
    query MyQuery {
      categories {
        id
        name
        slug
        color
      }
    }
  `;

  const { categories } = await fetcher(query);

  return categories;
}