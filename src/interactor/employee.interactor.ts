class EmployeeInteractor {
    employee:EmployeeEntity;
    employeeCollection:EmployeeCollectionEntity;
    employeeDataAccess:employeeDataAccess;
    //Utility:Object;
    private _Utility: Utility;

    constructor(employeeDataAccess:employeeDataAccess, Utility:Utility) {
        this.employeeDataAccess = employeeDataAccess;
        this._Utility = Utility;
    }

    getOne(id:number) {
        return this.employeeDataAccess.getOne(id).then(function (result:any) {
            var name = result.name;
            var age = result.age;
            this.employee = new EmployeeEntity(name, age);
            return this.employee;
        });
    }

    getAll() {
        var self = this;
        return this.employeeDataAccess.getAll().then(function (results:any) {
            this.employeeCollection = [];
            self._Utility.forEach(results, function(element:any) {
                var name = element.name;
                var age = element.age;
                this.employeeCollection.push(new EmployeeEntity(name, age));
            });
            return this.employeeCollection;
        });
    }
}

interface employeeDataAccess {
    getOne: Function;
    getAll: Function;
}

interface Utility {
    forEach: Function;
}
