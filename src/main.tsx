import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { queryClient } from "./service";
import Template from "./template";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Template />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
