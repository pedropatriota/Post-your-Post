import { QueryCache, QueryClient } from "react-query";

const queryErrorHandler = (error: unknown): void => {
  const title =
    error instanceof Error ? error.message : "error connecting to server";

  throw new Error(title);
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
});
