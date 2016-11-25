export interface AssetAllocation {
  readonly assetClassName: string;
  readonly allocationPercent: number;
}

export interface AssetAllocationWithColor extends AssetAllocation {
  readonly color: string;
}

export function createAssetAllocation(assetClassName: string, allocationPercent: number) {
  return {
    assetClassName,
    allocationPercent
  };
}

export const assetAllocationColors = [
  '#fa9fb1',
  '#87c3ee',
  '#fadd99',
  '#ecedee',
  '#93d4d4',
  '#bdd1dc',
  '#f4a890',
  '#9fcdac',
  '#f9cd9c',
  '#BD8D79',
  '#BDBAA1',
  '#677271'
];

export function getAssetAllocationWithColor(
  assetAllocation: AssetAllocation, index: number
): AssetAllocationWithColor {
  if (index < 0 || index >= assetAllocationColors.length) {
    throw new Error('The index must be between 0 and ' + (assetAllocationColors.length - 1));
  }

  return Object.assign({}, assetAllocation, {
    color: assetAllocationColors[index]
  });
}

export function getAssetAllocationsWithColors(
  assetAllocations: Array<AssetAllocation>
): Array<AssetAllocationWithColor> {
  return assetAllocations.map((assetAllocation, index) => {
    return getAssetAllocationWithColor(assetAllocation, index);
  });
}

function getAssetAllocationPropertyArray<T>(
  assetAllocations: Array<AssetAllocation>, mapFunction: (AssetAllocation) => T
): Array<T> {
  return assetAllocations ? assetAllocations.map(mapFunction) : [];
}

export function getAssetAllocationClassNames(assetAllocations: Array<AssetAllocation>) {
  return getAssetAllocationPropertyArray(
    assetAllocations, assetAllocation => assetAllocation.assetClassName
  );
}

export function getAssetAllocationPercentages(assetAllocations: Array<AssetAllocation>) {
  return getAssetAllocationPropertyArray(
    assetAllocations, assetAllocation => assetAllocation.allocationPercent
  );
}