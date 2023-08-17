<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

  import Region from "./Region.svelte";

  const client = new QueryClient();
</script>

<QueryClientProvider {client}>
  <Region />
</QueryClientProvider>
