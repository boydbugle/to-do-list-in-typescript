var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, peopleToTask, peopleToTask2) {
            this.description = description;
            this.priority = priority;
            this.peopleToTask = peopleToTask;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description) {
            var _this = _super.call(this, description, "Low") || this;
            _this.description = description;
            return _this;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WeekendTask = (function (_super) {
        __extends(WeekendTask, _super);
        function WeekendTask(description, priority, peopleToTask, peopleToTask2) {
            var _this = _super.call(this, description, priority, peopleToTask, peopleToTask2) || this;
            _this.description = description;
            _this.priority = priority;
            _this.peopleToTask = peopleToTask;
            _this.peopleToTask2 = peopleToTask2;
            return _this;
        }
        return WeekendTask;
    }(Task));
    ToDoList.WeekendTask = WeekendTask;
    var SchoolTask = (function (_super) {
        __extends(SchoolTask, _super);
        function SchoolTask(dueDate, description, priority, peopleToTask) {
            var _this = _super.call(this, description, priority, peopleToTask) || this;
            _this.dueDate = dueDate;
            _this.description = description;
            _this.priority = priority;
            _this.peopleToTask = peopleToTask;
            return _this;
        }
        return SchoolTask;
    }(Task));
    ToDoList.SchoolTask = SchoolTask;
})(ToDoList || (ToDoList = {}));
;
/// <reference path ="./to-do-classinterface.ts" />
var ToDoList;
(function (ToDoList) {
    var ahmed = {
        name: "ahmed",
        email: "Ahmed@himself.com",
        skill: "jsManiac"
    };
    var boyd = {
        name: "boyd",
        email: "boyd@himself.com",
        skill: "serious joke"
    };
    var moringa = {
        name: "moringa",
        email: "moringa@tutorials.com",
        skill: "teach"
    };
    ToDoList.people = {
        "ahmed": ahmed,
        "boyd": boyd,
        "moringa": moringa
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="./to-do-classinterface.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describePersonsTasks = function (assignedTo, collectTask) {
        var descriptions = [];
        for (var _i = 0, collectTask_1 = collectTask; _i < collectTask_1.length; _i++) {
            var task = collectTask_1[_i];
            if (task.peopleToTask === assignedTo) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="./to-do-classinterface.ts"/>
/// <reference path="./to-do-people.ts"/>
/// <reference path="./to-do-listtasks.ts"/>
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("general cleaning"));
tasks.push(new ToDoList.HomeTask("grocery shopping"));
tasks.push(new ToDoList.HomeTask("do laundry"));
tasks.push(new ToDoList.WeekendTask("talk to johhny5", "high", people.moringa));
tasks.push(new ToDoList.WeekendTask("research on IOT", "low"));
tasks.push(new ToDoList.WeekendTask("visit nerokas,ktechnix", "high", people.ahmed, people.boyd));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.SchoolTask(today, "typescript exercise", "very high", people.boyd));
tasks.push(new ToDoList.SchoolTask(tomorrow, "taproom,music store exercise", "very high", people.boyd));
tasks.push(new ToDoList.SchoolTask(nextDay, "yoga", "very high", people.moringa));
console.log(tasks);
var boydTasks = ToDoList.describePersonsTasks(people.boyd, tasks);
console.log("boyd's tasks are:");
for (var _i = 0, boydTasks_1 = boydTasks; _i < boydTasks_1.length; _i++) {
    var task = boydTasks_1[_i];
    console.log(task);
}
// $('.disp').text(tasks);
