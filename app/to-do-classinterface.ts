module ToDoList{

    export interface AllTask{
        description:string;
        priority:string;
        done:boolean;
        markDone(): void;
        peopleToTask ?: Allpeople;
        peopleToTask2 ?:Allpeople;
    
    }
    export interface Allpeople{
        name: string;
        email: string;
        skill: string;
    }
    export class Task implements AllTask{
        done:boolean= false;
        constructor(public description:string, public priority:string, public peopleToTask ?:Allpeople,peopleToTask2 ?:Allpeople)
        {}
        markDone(){
            this.done= true;
        }
    }
    export class HomeTask extends Task{
        constructor(public description: string){
            super(description,"Low")
        }
    }
    export class WeekendTask extends Task{
        constructor(public description:string, public priority: string, public peopleToTask ?:Allpeople,public peopleToTask2 ?: Allpeople){
            super(description, priority, peopleToTask,peopleToTask2);
        }
    }
    export class SchoolTask extends Task{
        constructor(public dueDate: Date, public description:string,public priority: string,public peopleToTask:Allpeople){
            super(description,priority,peopleToTask);
        }
    } 
};

