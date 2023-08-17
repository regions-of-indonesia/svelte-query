<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

  import Regions from "./Regions.svelte";

  const client = new QueryClient();
</script>

<QueryClientProvider {client}>
  <Regions />
</QueryClientProvider>
