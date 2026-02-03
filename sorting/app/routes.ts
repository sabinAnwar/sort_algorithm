import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("bubble", "routes/bubble.tsx"),
  route("insertion", "routes/insertion.tsx"),
  route("selection", "routes/selection.tsx"),
  route("merge", "routes/merge.tsx"),
] satisfies RouteConfig;
