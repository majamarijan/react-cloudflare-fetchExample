import { QueryClient, queryOptions } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";
import { getPosts } from "../../functions/api/fetchData";

const postListQuery = (q?:string)=> {
  return queryOptions({
    queryKey: ['posts', q ?? 'all'],
    queryFn: ()=> getPosts(q)
  })
}

export const queryPosts = {
  queryKey: ['posts'],
  queryFn: ()=> getPosts()
}

export function rootLoader(queryClient: QueryClient) {
  return async ({request}: LoaderFunctionArgs)=> {
    const url = new URL(request.url);
    const q = url.searchParams.get('q') ?? '';
    await queryClient.ensureQueryData(postListQuery(q));
    return {q}
  }
}


export const postDetailQuery = (id:string)=> {
  return queryOptions({
    queryKey: ['posts', id],
    queryFn: ()=> getPosts(id)
  })
}
export const postLoader = (QueryClient: QueryClient)=> {
  return async ({params}: LoaderFunctionArgs)=> {
    if(!params.id) throw new Error('No id is found!');
    await QueryClient.ensureQueryData(postDetailQuery(params.id));
    return {id: params.id}
  }
}