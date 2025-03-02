import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getCharacters } from "@/services/dragonball-api/characters";

import styles from "./page.module.css";
import CharactersGrid from "@/components/CharactersGrid";

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });

  //TODO: define types
  const gridData = queryClient.getQueriesData({})?.[0]?.[1] as { items: any };

  return (
    <div className={styles.page}>
      <div>search bar</div>
      <CharactersGrid data={gridData?.items}></CharactersGrid>
    </div>
  );
}
