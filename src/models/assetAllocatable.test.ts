import {
  AssetAllocatable,
  getSortedAssetAllocations,
  getSortedAssetAllocationsWithColors
} from './assetAllocatable';
import {createAssetAllocation, assetAllocationColors} from './assetAllocation';

describe('Model: AssetAllocatable', () => {
  let assetAllocatable: AssetAllocatable;

  describe('when there are no asset allocations', () => {
    beforeEach(() => {
      assetAllocatable = {
        assetAllocations: []
      };
    });

    describe('getSortedAssetAllocations()', () => {
      it('should return an empty list', () => {
        expect(getSortedAssetAllocations(assetAllocatable)).toEqual([]);
      });
    });

    describe('getSortedAssetAllocationsWithColors()', () => {
      it('should return an empty list', () => {
        expect(getSortedAssetAllocations(assetAllocatable)).toEqual([]);
      });
    });
  });

  describe('when there are many asset allocations', () => {
    beforeEach(() => {
      assetAllocatable = {
        assetAllocations: [
          createAssetAllocation('Bonds', 40),
          createAssetAllocation('North American Equities', 45),
          createAssetAllocation('Emerging Market Equities', 15)
        ]
      };
    });

    describe('getSortedAssetAllocations()', () => {
      it('should return a sorted list from largest percentage to smallest', () => {
        const assetAllocations = getSortedAssetAllocations(assetAllocatable);

        expect(assetAllocations.length).toEqual(3);
        expect(assetAllocations[0]).toEqual(assetAllocatable.assetAllocations[1]);
        expect(assetAllocations[1]).toEqual(assetAllocatable.assetAllocations[0]);
        expect(assetAllocations[2]).toEqual(assetAllocatable.assetAllocations[2]);
      });
    });

    describe('getSortedAssetAllocationsWithColors()', () => {
      it('should return a sorted list with colors', () => {
        const assetAllocations = getSortedAssetAllocationsWithColors(assetAllocatable);

        expect(assetAllocations.length).toEqual(3);
        expect(assetAllocations[0].allocationPercent).toEqual(
          assetAllocatable.assetAllocations[1].allocationPercent
        );
        expect(assetAllocations[0].color).toEqual(assetAllocationColors[0]);
        expect(assetAllocations[1].allocationPercent).toEqual(
          assetAllocatable.assetAllocations[0].allocationPercent
        );
        expect(assetAllocations[1].color).toEqual(assetAllocationColors[1]);
        expect(assetAllocations[2].allocationPercent).toEqual(
          assetAllocatable.assetAllocations[2].allocationPercent
        );
        expect(assetAllocations[2].color).toEqual(assetAllocationColors[2]);
      });
    });
  });
});