const { assert } = require("chai");
const {
  indexOfExt,
  splitAtIndex,
  createUniqueName,
} = require("../utils/splitName");

describe("utils testing", function () {
  describe("tests for indexOfExt", function () {
    it("should return 8 for a proper name and extension of 3 letters", function () {
      const index = indexOfExt("fakename.jpg");
      assert.equal(index, 8);
    });
    it("should return 9 for a proper name and extension of 4 letters", function () {
      const index = indexOfExt("fakename.WebP");
      assert.equal(index, 8);
    });
    it("should return the index of the extension when a filename contains periods", function () {
      const index = indexOfExt("fake.name.jpg");
      assert.equal(index, 9);
    });
    it("should return 0 if index is 0 - not sure if possible?", function () {
      const index = indexOfExt(".jpg");
      assert.equal(index, 0);
    });
  });

  describe("tests for splitAtIndex", function () {
    it(`should return ["fakename", ".jpg"] for fakename.jpg`, function () {
      const array = splitAtIndex("fakename.jpg");
      assert.deepEqual(array, ["fakename", ".jpg"]);
    });
    it(`should return ["", ".jpg"]`, function () {
      const array = splitAtIndex(".jpg");
      assert.deepEqual(array, ["", ".jpg"]);
    });
    it(`should return ["fake.name", ".jpg"] for fake.name.jpg`, function () {
      const array = splitAtIndex("fake.name.jpg");
      assert.deepEqual(array, ["fake.name", ".jpg"]);
    });
  });

  describe("tests for createUniqueName", function () {
    it(``, function () {});
  });
});
