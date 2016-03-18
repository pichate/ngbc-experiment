class EmployeeCollectionEntity {
    private _collection: Array<EmployeeEntity>;

    constructor(collection:Array<EmployeeEntity>) {
        this._collection = collection;
    }

    get collection():Array<EmployeeEntity> {
        return this._collection;
    }
}

