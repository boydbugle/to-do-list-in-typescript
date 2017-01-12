/// <reference path="./to-do-classinterface.ts" />

module  ToDoList{
    export var describePersonsTasks = function(assignedTo: Allpeople, collectTask: Task[]):string[] {
        var descriptions: string[] = [];
        for(var task of collectTask){
            if(task.peopleToTask === assignedTo){
                descriptions.push(task.description);
            }
        }
        return descriptions;
    }
}