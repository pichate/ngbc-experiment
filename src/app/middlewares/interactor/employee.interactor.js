var EmployeeInteractor = (function () {
    function EmployeeInteractor(employeeDataAccess, Utility) {
        this.employeeDataAccess = employeeDataAccess;
        this._Utility = Utility;
    }
    EmployeeInteractor.prototype.getOne = function (id) {
        return this.employeeDataAccess.getOne(id).then(function (result) {
            var name = result.name;
            var age = result.age;
            this.employee = new EmployeeEntity(name, age);
            return this.employee;
        });
    };
    EmployeeInteractor.prototype.getAll = function () {
        var self = this;
        return this.employeeDataAccess.getAll().then(function (results) {
            this.employeeCollection = [];
            self._Utility.forEach(results, function (element) {
                var name = element.name;
                var age = element.age;
                this.employeeCollection.push(new EmployeeEntity(name, age));
            });
            return this.employeeCollection;
        });
    };
    return EmployeeInteractor;
}());
