import { RegionsOfIndonesiaClient } from "@regions-of-indonesia/client";

import { createQuery } from "@tanstack/svelte-query";
import type { QueryFunctionContext as Context } from "@tanstack/svelte-query";

type QueryKey = [string, string];

const isKey = (value: unknown): value is string => typeof value === "string" && value !== "",
  getValidKey = <T>(value: unknown, callback: (value: string) => T) => (isKey(value) ? callback(value) : ([] as unknown as QueryKey));

const initialDataOptions = <QK, QF>(queryKey: QK, queryFn: QF, enabled?: boolean) => ({ queryKey, queryFn, enabled });

const createSvelteQuery = (client: RegionsOfIndonesiaClient = new RegionsOfIndonesiaClient()) => {
  const key = {
      provinces: ["provinces"],
      province: (code: string) => ["province", code] as QueryKey,
      districts: (provinceCode: string) => ["districts", provinceCode] as QueryKey,
      district: (code: string) => ["district", code] as QueryKey,
      subdistricts: (districtCode: string) => ["subdistricts", districtCode] as QueryKey,
      subdistrict: (code: string) => ["subdistrict", code] as QueryKey,
      villages: (subdistrictCode: string) => ["villages", subdistrictCode] as QueryKey,
      village: (code: string) => ["village", code] as QueryKey,

      search: (name: string) => ["search", name] as QueryKey,
      searchProvinces: (name: string) => ["search/provinces", name] as QueryKey,
      searchDistricts: (name: string) => ["search/districts", name] as QueryKey,
      searchSubdistricts: (name: string) => ["search/subdistricts", name] as QueryKey,
      searchVillages: (name: string) => ["search/villages", name] as QueryKey,
    },
    fetcher = {
      provinces: () => client.province.find(),
      province: <C extends Context<QueryKey>>(ctx: C) => client.province.findByCode(ctx.queryKey[1]),
      districts: <C extends Context<QueryKey>>(ctx: C) => client.district.findByProvinceCode(ctx.queryKey[1]),
      district: <C extends Context<QueryKey>>(ctx: C) => client.district.findByCode(ctx.queryKey[1]),
      subdistricts: <C extends Context<QueryKey>>(ctx: C) => client.subdistrict.findByDistrictCode(ctx.queryKey[1]),
      subdistrict: <C extends Context<QueryKey>>(ctx: C) => client.subdistrict.findByCode(ctx.queryKey[1]),
      villages: <C extends Context<QueryKey>>(ctx: C) => client.village.findBySubdistrictCode(ctx.queryKey[1]),
      village: <C extends Context<QueryKey>>(ctx: C) => client.village.findByCode(ctx.queryKey[1]),

      search: <C extends Context<QueryKey>>(ctx: C) => client.search(ctx.queryKey[1]),
      searchProvinces: <C extends Context<QueryKey>>(ctx: C) => client.province.search(ctx.queryKey[1]),
      searchDistricts: <C extends Context<QueryKey>>(ctx: C) => client.district.search(ctx.queryKey[1]),
      searchSubdistricts: <C extends Context<QueryKey>>(ctx: C) => client.subdistrict.search(ctx.queryKey[1]),
      searchVillages: <C extends Context<QueryKey>>(ctx: C) => client.village.search(ctx.queryKey[1]),
    };

  return {
    createProvinces: () => createQuery(initialDataOptions(key.provinces, fetcher.provinces)),
    createProvince: (code?: string) => createQuery(initialDataOptions(getValidKey(code, key.province), fetcher.province, isKey(code))),
    createDistricts: (provinceCode?: string) =>
      createQuery(initialDataOptions(getValidKey(provinceCode, key.districts), fetcher.districts, isKey(provinceCode))),
    createDistrict: (code?: string) => createQuery(initialDataOptions(getValidKey(code, key.district), fetcher.district, isKey(code))),
    createSubdistricts: (districtCode?: string) =>
      createQuery(initialDataOptions(getValidKey(districtCode, key.subdistricts), fetcher.subdistricts, isKey(districtCode))),
    createSubdistrict: (code?: string) =>
      createQuery(initialDataOptions(getValidKey(code, key.subdistrict), fetcher.subdistrict, isKey(code))),
    createVillages: (subdistrictCode?: string) =>
      createQuery(initialDataOptions(getValidKey(subdistrictCode, key.villages), fetcher.villages, isKey(subdistrictCode))),
    createVillage: (code?: string) => createQuery(initialDataOptions(getValidKey(code, key.village), fetcher.village, isKey(code))),

    createSearch: (name?: string) => createQuery(initialDataOptions(getValidKey(name, key.search), fetcher.search, isKey(name))),
    createSearchProvinces: (name?: string) =>
      createQuery(initialDataOptions(getValidKey(name, key.searchProvinces), fetcher.searchProvinces, isKey(name))),
    createSearchDistricts: (name?: string) =>
      createQuery(initialDataOptions(getValidKey(name, key.searchDistricts), fetcher.searchDistricts, isKey(name))),
    createSearchSubdistricts: (name?: string) =>
      createQuery(initialDataOptions(getValidKey(name, key.searchSubdistricts), fetcher.searchSubdistricts, isKey(name))),
    createSearchVillages: (name?: string) =>
      createQuery(initialDataOptions(getValidKey(name, key.searchVillages), fetcher.searchVillages, isKey(name))),
  };
};

export default createSvelteQuery;
