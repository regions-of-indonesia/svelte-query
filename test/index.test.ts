import { describe, expect, it } from "vitest";

import { render } from "@testing-library/svelte";

import { isRegionCode, isRegionName } from "@regions-of-indonesia/utils";

import RootRegion from "./components/RootRegion.svelte";
import RootRegions from "./components/RootRegions.svelte";

const fetching = () => new Promise<void>((resolve) => setTimeout(resolve, 200));

const getDataElement = async (element: HTMLElement) => {
  expect(element).toBeDefined();
  expect(element.querySelector("#loading")).toBeDefined();
  await fetching();
  expect(element.querySelector("#error")).toBeNull();
  const data = element.querySelector("#data");
  expect(data).toBeDefined();
  return data!;
};

const expectRegionElement = (element: Element) => {
  expect(isRegionCode(element.getAttribute("data-code"))).toEqual(true);
  expect(isRegionName(element.getAttribute("data-name"))).toEqual(true);
};

const expectRegionsElement = (element: Element) => {
  [...element.children].forEach(expectRegionElement);
};

describe("Data", () => {
  it("region", async () => {
    const { getByTestId } = render(RootRegion);

    expectRegionElement(await getDataElement(getByTestId("create-province")));
    expectRegionElement(await getDataElement(getByTestId("create-district")));
    expectRegionElement(await getDataElement(getByTestId("create-subdistrict")));
    expectRegionElement(await getDataElement(getByTestId("create-village")));
    expectRegionElement(await getDataElement(getByTestId("create-region")));
  });

  it("regions", async () => {
    const { getByTestId } = render(RootRegions);

    expectRegionsElement(await getDataElement(getByTestId("create-provinces")));
    expectRegionsElement(await getDataElement(getByTestId("create-districts")));
    expectRegionsElement(await getDataElement(getByTestId("create-subdistricts")));
    expectRegionsElement(await getDataElement(getByTestId("create-villages")));
    expectRegionsElement(await getDataElement(getByTestId("create-search")));
    expectRegionsElement(await getDataElement(getByTestId("create-search-provinces")));
    expectRegionsElement(await getDataElement(getByTestId("create-search-districts")));
    expectRegionsElement(await getDataElement(getByTestId("create-search-subdistricts")));
    expectRegionsElement(await getDataElement(getByTestId("create-search-villages")));
  });
});
