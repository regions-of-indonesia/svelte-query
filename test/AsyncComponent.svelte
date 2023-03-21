<script lang="ts">
import { createProvinces } from "./regions-of-indonesia";

const query = createProvinces()

</script>

<div>
  {#if $query.isSuccess}
    {#each $query.data as item}
      <div data-testid={`code-${item.code}`}>{item.name}</div>      
    {/each}
  {/if}
</div>