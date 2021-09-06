const app = new Vue({
    el: '#app',
    data: {
        activeTab: 'all',
        taskList: [
            {
                taskId: 0,
                taskText: 'Alguma coisa',
                isCompleted: false
            },
            {
                taskId: 1,
                taskText: 'Comer Funge',
                isCompleted: true
            }
        ],
        quantItems: 0
    },
    methods: {
        changeTab: function (e) {
            this.activeTab = e.target.innerText.toLowerCase();
        },
        switchTaskStatus: function (taskId) {
            for (let i = 0; i < this.taskList.length; i++) {
                if (this.taskList[i].taskId == taskId) {
                    this.taskList[i].isCompleted = !this.taskList[i].isCompleted;
                }
            }
        }
    },
    components: {

    }
})