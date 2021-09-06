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
        ]
    },
    methods: {

    },
    components: {

    }
})