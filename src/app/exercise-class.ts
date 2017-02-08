import {isNumber} from "util";
export class ExerciseClass {
    constructor( public id: number, public name: string)
    {}
    addToId(id: number)
    {
        return (this.id + 10)
    }
}
