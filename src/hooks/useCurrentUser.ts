import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/lib/queries/apiAuth";

export function useCurrentUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getCurrentUser();
    },
    staleTime: Infinity,
  });

  return {
    user,
    isLoading,
    error,
  };
}
