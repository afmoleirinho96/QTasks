export class TaskItem{
    id:number;
    description:string="";
    //completed:boolean;

    constructor(values: Object={ }){
        Object.assign(this, values);
    }
}