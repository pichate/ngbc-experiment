class EmployeeEntity {
    private _name: string;
    private _age: number;
    private _branch: string;

    constructor(name:string, age:number) {
        this._name = name;
        this._age = age;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get age():number {
        return this._age;
    }

    set age(value:number) {
        this._age = value;
    }

    get branch():string {
        return this._branch;
    }

    set branch(value:string) {
        this._branch = value;
    }
}

