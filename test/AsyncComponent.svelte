<script lang="ts">
import { createProvinces, createDistricts, createSubdistricts, createVillages } from "./regions-of-indonesia";

const provinces = createProvinces()
const districts = createDistricts("11")
const subdistricts = createSubdistricts("11.01")
const villages = createVillages("11.01.01")

</script>

<div>
  {#if $provinces.isSuccess}
    {#each $provinces.data as province}
      <div data-testid={`province-${province.code}`}>{province.name}</div>      
    {/each}
  {/if}

  {#if $districts.isSuccess}
    {#each $districts.data as district}
      <div data-testid={`district-${district.code}`}>{district.name}</div>      
    {/each}
  {/if}

  {#if $subdistricts.isSuccess}
    {#each $subdistricts.data as subdistrict}
      <div data-testid={`subdistrict-${subdistrict.code}`}>{subdistrict.name}</div>      
    {/each}
  {/if}

  {#if $villages.isSuccess}
    {#each $villages.data as village}
      <div data-testid={`village-${village.code}`}>{village.name}</div>      
    {/each}
  {/if}
</div>