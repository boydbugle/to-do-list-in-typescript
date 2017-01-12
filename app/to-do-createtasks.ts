/// <reference path="./to-do-classinterface.ts"/>
/// <reference path="./to-do-people.ts"/>
/// <reference path="./to-do-listtasks.ts"/>

var people = ToDoList.people

var tasks = [];
tasks.push(new ToDoList.HomeTask("general cleaning",));
tasks.push(new ToDoList.HomeTask("grocery shopping"));
tasks.push(new ToDoList.HomeTask("do laundry"))

tasks.push(new ToDoList.WeekendTask("talk to johhny5", "high", people.moringa))
tasks.push(new ToDoList.WeekendTask("research on IOT", "low"))
tasks.push(new ToDoList.WeekendTask("visit nerokas,ktechnix", "high",people.ahmed,people.boyd))

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.SchoolTask(today, "typescript exercise", "very high", people.boyd))
tasks.push(new ToDoList.SchoolTask(tomorrow, "taproom,music store exercise", "very high", people.boyd))
tasks.push(new ToDoList.SchoolTask(nextDay, "yoga", "very high", people.moringa))


console.log(tasks);
var boydTasks = ToDoList.describePersonsTasks(people.boyd, tasks)
console.log("boyd's tasks are:")
for (var task of boydTasks){
    console.log(task);
}
// $('.disp').text(tasks);
