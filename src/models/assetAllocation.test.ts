import {
  AssetAllocation, createAssetAllocation, getAssetAllocationClassNames,
  getAssetAllocationWithColor, assetAllocationColors, getAssetAllocationsWithColors, getAssetAllocationPercentages
} from './assetAllocation';

describe('Model: AssetAllocation', () => {

  let assetAllocation: AssetAllocation;
  let assetAllocations: Array<AssetAllocation>;

  beforeEach(() => {
    assetAllocation = createAssetAllocation('Video Games', 100);
  });

  describe('getAssetAllocationWithColor()', () => {
    describe('when the index is less than 0', () => {
      it('should throw an array', () => {
        expect(() => {
          getAssetAllocationWithColor(assetAllocation, -1);
        }).toThrowError('The index must be between 0 and 11');
      });
    });

    describe('when the index is greater than the number of colors available', () => {
      it('should throw an array', () => {
        expect(() => {
          getAssetAllocationWithColor(assetAllocation, 9999);
        }).toThrowError('The index must be between 0 and 11');
      });
    });

    describe('when the index is valid', () => {
      it('should assign a default color according to the specified index', () => {
        const assetAllocationWithColor = getAssetAllocationWithColor(assetAllocation, 0);
        expect(assetAllocationWithColor.assetClassName).toEqual(assetAllocation.assetClassName);
        expect(assetAllocationWithColor.allocationPercent).toEqual(assetAllocation.allocationPercent);
        expect(assetAllocationWithColor.color).toEqual(assetAllocationColors[0]);
      });
    });
  });

  describe('when there are no asset allocations', () => {
    beforeEach(() => {
      assetAllocations = [];
    });

    describe('getAssetAllocationsWithColors()', () => {
      it('should return an empty list', () => {
        expect(getAssetAllocationsWithColors(assetAllocations)).toEqual([]);
      });
    });

    describe('getAssetAllocationClassNames()', () => {
      it('should return an empty list', () => {
        expect(getAssetAllocationClassNames(assetAllocations)).toEqual([]);
      });
    });

    describe('getAssetAllocationPercentages()', () => {
      it('should return an empty list', () => {
        expect(getAssetAllocationPercentages(assetAllocations)).toEqual([]);
      });
    });
  });

  describe('when there are many asset allocations', () => {
    beforeEach(() => {
      assetAllocations = [
        createAssetAllocation('Bonds', 40),
        createAssetAllocation('North American Equities', 45),
        createAssetAllocation('Emerging Market Equities', 15)
      ];
    });

    describe('getAssetAllocationsWithColors()', () => {
      it('should return a list of asset allocations with assigned colors', () => {
        const assetAllocationsWithColors = getAssetAllocationsWithColors(assetAllocations);

        expect(assetAllocationsWithColors.length).toEqual(3);
        expect(assetAllocationsWithColors[0].color).toEqual(assetAllocationColors[0]);
        expect(assetAllocationsWithColors[1].color).toEqual(assetAllocationColors[1]);
        expect(assetAllocationsWithColors[2].color).toEqual(assetAllocationColors[2]);
      });
    });

    describe('getAssetAllocationClassNames()', () => {
      it('should return an array of class names', () => {
        const classNames = getAssetAllocationClassNames(assetAllocations);

        expect(classNames.length).toEqual(3);
        expect(classNames[0]).toEqual(assetAllocations[0].assetClassName);
        expect(classNames[1]).toEqual(assetAllocations[1].assetClassName);
        expect(classNames[2]).toEqual(assetAllocations[2].assetClassName);
      });
    });

    describe('getAssetAllocationPercentages()', () => {
      it('should return an array of percentages', () => {
        const percentages = getAssetAllocationPercentages(assetAllocations);

        expect(percentages.length).toEqual(3);
        expect(percentages[0]).toEqual(assetAllocations[0].allocationPercent);
        expect(percentages[1]).toEqual(assetAllocations[1].allocationPercent);
        expect(percentages[2]).toEqual(assetAllocations[2].allocationPercent);
      });
    });
  });
});