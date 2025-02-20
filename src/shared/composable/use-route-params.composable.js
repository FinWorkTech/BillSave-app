import { computed } from "vue";
import { useRoute } from "vue-router";

export function useRouteParams(paramName) {
  const route = useRoute();
  return computed(() => route.params[paramName]);
}