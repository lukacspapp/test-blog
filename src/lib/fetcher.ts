import request from "graphql-request";

export const graphqlAPI = process.env.REACT_APP_API as string;
export async function fetcher(query: string, variables?: Record<string, any>): Promise<any> {

  try {

    const response = await request(graphqlAPI, query, variables);

    return response;

  } catch (error) {

    console.error('An error occurred:', error);

    return error;
  }
}
