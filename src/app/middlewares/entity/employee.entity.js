var EmployeeEntity = (function () {
    function EmployeeEntity(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(EmployeeEntity.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeEntity.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeEntity.prototype, "branch", {
        get: function () {
            return this._branch;
        },
        set: function (value) {
            this._branch = value;
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeEntity;
}());
