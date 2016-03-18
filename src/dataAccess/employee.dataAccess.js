var employeeDataAccess = {
    getOne: function (id) {
        return new Promise(function (resolve) {
            resolve({
                name: 'AAA Original Name',
                age: 10
            })
        });
    },
    getAll: function () {
        return new Promise(function (resolve) {
            resolve(
                [
                    {
                        name: 'AAA Original Name',
                        age: 10
                    },
                    {
                        name: 'BBB Original Name',
                        age: 20
                    },
                    {
                        name: 'CCC Original Name',
                        age: 30
                    }
                ]
            )
        });
    }
};