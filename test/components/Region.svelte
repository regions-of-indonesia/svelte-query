<script lang="ts">
  import { createProvince, createDistrict, createSubdistrict, createVillage, createRegion } from "../libs";

  const province = createProvince("11");
  const district = createDistrict("11");
  const subdistrict = createSubdistrict("11");
  const village = createVillage("11");
  const region = createRegion("11");
</script>

<div data-testid="create-province">
  {#if $province.error}
    <span id="error" />
  {:else if $province.isLoading}
    <span id="loading" />
  {:else}
    <span id="data" data-code={$province.data?.code} data-name={$province.data?.name} />
  {/if}
</div>

<div data-testid="create-district">
  {#if $district.error}
    <span id="error" />
  {:else if $district.isLoading}
    <span id="loading" />
  {:else}
    <span id="data" data-code={$district.data?.code} data-name={$district.data?.name} />
  {/if}
</div>

<div data-testid="create-subdistrict">
  {#if $subdistrict.error}
    <span id="error" />
  {:else if $subdistrict.isLoading}
    <span id="loading" />
  {:else}
    <span id="data" data-code={$subdistrict.data?.code} data-name={$subdistrict.data?.name} />
  {/if}
</div>

<div data-testid="create-village">
  {#if $village.error}
    <span id="error" />
  {:else if $village.isLoading}
    <span id="loading" />
  {:else}
    <span id="data" data-code={$village.data?.code} data-name={$village.data?.name} />
  {/if}
</div>

<div data-testid="create-region">
  {#if $region.error}
    <span id="error" />
  {:else if $region.isLoading}
    <span id="loading" />
  {:else}
    <span id="data" data-code={$region.data?.code} data-name={$region.data?.name} />
  {/if}
</div>
