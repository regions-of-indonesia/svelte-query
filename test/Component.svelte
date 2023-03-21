<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
  import AsyncComponent from './AsyncComponent.svelte';

  const client = new QueryClient()
</script>

<QueryClientProvider client={client}>
  <AsyncComponent />
</QueryClientProvider>