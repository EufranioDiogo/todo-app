let element = 0;
const app = new Vue({
    el: '#app',
    data: {
        activeTab: 'all',
        taskList: [
        ],
        quantItems: 0,
        totalTasks: 0,
        newTask: ''
    },
    methods: {
        changeTab: function (e) {
            this.activeTab = e.target.innerText.toLowerCase();
        },
        switchTaskStatus: function (event, taskId) {
            event.stopPropagation();
            event.preventDefault();

            let i;
            for (i = 0; i < this.taskList.length; i++) {
                if (this.taskList[i].taskId == taskId) {
                    this.taskList[i].isCompleted = !this.taskList[i].isCompleted;
                    break;
                }
            }
        },
        clearCompleted: function () {
            this.taskList.filter((task) => !task.isCompleted);
        },
        addNewTask: function () {
            if (this.newTask != '') {
                this.taskList.push({
                    taskId: this.taskList.length,
                    taskText: this.newTask,
                    isCompleted: false
                })
            }
        }
    },
    components: {

    }
})