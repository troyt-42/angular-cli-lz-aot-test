import {
  AssetAllocation,
  getAssetAllocationsWithColors,
  AssetAllocationWithColor,
} from './assetAllocation';

export interface AssetAllocatable {
  readonly assetAllocations: Array<AssetAllocation>;
  readonly assetAllocationDescription?: string;
}

export function getSortedAssetAllocations(assetAllocatable: AssetAllocatable) {
  return assetAllocatable.assetAllocations.slice().sort(
    (assetAllocation1, assetAllocation2) => {
      return assetAllocation2.allocationPercent - assetAllocation1.allocationPercent;
    }
  );
}

export function getSortedAssetAllocationsWithColors(assetAllocatable: AssetAllocatable) {
  return getAssetAllocationsWithColors(
    getSortedAssetAllocations(assetAllocatable)
  );
}
