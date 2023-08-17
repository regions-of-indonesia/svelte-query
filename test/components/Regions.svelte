<script lang="ts">
  import {
    createProvinces,
    createDistricts,
    createSubdistricts,
    createVillages,
    createSearch,
    createSearchProvinces,
    createSearchDistricts,
    createSearchSubdistricts,
    createSearchVillages,
  } from "../libs";

  const provinces = createProvinces();
  const districts = createDistricts("11");
  const subdistricts = createSubdistricts("11.01");
  const villages = createVillages("11.01.01");
  const search = createSearch("a");
  const searchProvinces = createSearchProvinces("a");
  const searchDistricts = createSearchDistricts("a");
  const searchSubdistricts = createSearchSubdistricts("a");
  const searchVillages = createSearchVillages("a");
</script>

<div data-testid="create-provinces">
  {#if $provinces.error}
    <span id="error" />
  {:else if $provinces.isLoading}
    <span id="loading" />
  {:else}
    <ul id="data">
      {#each $provinces.data ?? [] as item}
        <li data-code={item?.code} data-name={item?.name} />
      {/each}
    </ul>
  {/if}
</div>

<div data-testid="create-districts">
  {#if $districts.error}
    <span id="error" />
  {:else if $districts.isLoading}
    <span id="loading" />
  {:else}
    <ul id="data">
      {#each $districts.data ?? [] as item}
        <li data-code={item?.code} data-name={item?.name} />
      {/each}
    </ul>
  {/if}
</div>

<div data-testid="create-subdistricts">
  {#if $subdistricts.error}
    <span id="error" />
  {:else if $subdistricts.isLoading}
    <span id="loading" />
  {:else}
    <ul id="data">
      {#each $subdistricts.data ?? [] as item}
        <li data-code={item?.code} data-name={item?.name} />
      {/each}
    </ul>
  {/if}
</div>

<div data-testid="create-villages">
  {#if $villages.error}
    <span id="error" />
  {:else if $villages.isLoading}
    <span id="loading" />
  {:else}
    <ul id="data">
      {#each $villages.data ?? [] as item}
        <li data-code={item?.code} data-name={item?.name} />
      {/each}
    </ul>
  {/if}
</div>

<div data-testid="create-search">
  {#if $search.error}
    <span id="error" />
  {:else if $search.isLoading}
    <span id="loading" />
  {:else}
    <ul id="data">
      {#each $search.data ?? [] as item}
        <li data-code={item?.code} data-name={item?.name} />
      {/each}
    </ul>
  {/if}
</div>

<div data-testid="create-search-provinces">
  {#if $searchProvinces.error}
    <span id="error" />
  {:else if $searchProvinces.isLoading}
    <span id="loading" />
  {:else}
    <ul id="data">
      {#each $searchProvinces.data ?? [] as item}
        <li data-code={item?.code} data-name={item?.name} />
      {/each}
    </ul>
  {/if}
</div>

<div data-testid="create-search-districts">
  {#if $searchDistricts.error}
    <span id="error" />
  {:else if $searchDistricts.isLoading}
    <span id="loading" />
  {:else}
    <ul id="data">
      {#each $searchDistricts.data ?? [] as item}
        <li data-code={item?.code} data-name={item?.name} />
      {/each}
    </ul>
  {/if}
</div>

<div data-testid="create-search-subdistricts">
  {#if $searchSubdistricts.error}
    <span id="error" />
  {:else if $searchSubdistricts.isLoading}
    <span id="loading" />
  {:else}
    <ul id="data">
      {#each $searchSubdistricts.data ?? [] as item}
        <li data-code={item?.code} data-name={item?.name} />
      {/each}
    </ul>
  {/if}
</div>

<div data-testid="create-search-villages">
  {#if $searchVillages.error}
    <span id="error" />
  {:else if $searchVillages.isLoading}
    <span id="loading" />
  {:else}
    <ul id="data">
      {#each $searchVillages.data ?? [] as item}
        <li data-code={item?.code} data-name={item?.name} />
      {/each}
    </ul>
  {/if}
</div>
