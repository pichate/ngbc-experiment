var EmployeeCollectionEntity = (function () {
    function EmployeeCollectionEntity(collection) {
        this._collection = collection;
    }
    Object.defineProperty(EmployeeCollectionEntity.prototype, "collection", {
        get: function () {
            return this._collection;
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeCollectionEntity;
}());
