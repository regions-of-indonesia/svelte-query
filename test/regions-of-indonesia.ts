import { RegionsOfIndonesiaClient } from "@regions-of-indonesia/client";

import { createSvelteQuery } from "../src";

const { createProvinces, createDistricts, createSubdistricts, createVillages } = createSvelteQuery(
  new RegionsOfIndonesiaClient({ baseURL: { dynamic: "http://127.1.0.0:8000" } })
);

export { createProvinces, createDistricts, createSubdistricts, createVillages };
