

function getActualTheme() {
    const actualTheme = localStorage.getItem('theme');

    if (actualTheme == null || actualTheme == 'undefined') {
        setDarkTheme();
    } else {
        if (actualTheme === 'dark') {
            setDarkTheme();
        } else {
            setWhiteTheme();
        }
    }

    return actualTheme;
}

function setWhiteTheme() {
    localStorage.setItem('theme', 'white');

    document.querySelector('.theme-file-src').href = 'CSS/light-theme.css';

    document.querySelector('.theme-toggle-button--icon').src = 'IMAGES/icon-moon.svg';
}

function setDarkTheme() {
    localStorage.setItem('theme', 'dark');

    document.querySelector('.theme-file-src').href = 'CSS/dark-theme.css';
    document.querySelector('.theme-toggle-button--icon').src = 'IMAGES/icon-sun.svg';
}





const app = new Vue({
    el: '#app',
    data: {
        activeTab: 'all',
        taskList: [
        ],
        totalTasks: 0,
        newTask: '',
        quantCompleted: 0,
        quantActive: 0,
        isDarkTheme: true
    },
    methods: {
        changeTab: function (e) {
            this.activeTab = e.target.innerText.toLowerCase();
        },
        switchTaskStatus: function (event, taskId) {
            let i;
            for (i = 0; i < this.taskList.length; i++) {
                if (this.taskList[i].taskId == taskId) {
                    this.taskList[i].isCompleted = !this.taskList[i].isCompleted;

                    if(this.taskList[i].isCompleted) {
                        this.quantCompleted++;
                        this.quantActive--;
                    } else {
                        this.quantCompleted--;
                        this.quantActive++;
                    }
                    break;
                }
            }
        },
        clearCompleted: function () {
            this.taskList = this.taskList.filter((task) => !task.isCompleted);
            this.quantCompleted = 0;
        },
        addNewTask: function () {
            if (this.newTask != '') {
                this.taskList.push({
                    taskId: this.taskList.length,
                    taskText: this.newTask,
                    isCompleted: false
                })
                this.quantActive++;
            }
            this.newTask = '';
        },
        deleteTask: function(taskId) {
            this.taskList = this.taskList.filter((task) => {
                if (task.taskId != taskId) {
                    return true;
                }
                if (task.isCompleted) {
                    this.quantCompleted--;
                } else {
                    this.quantActive--;
                }
                return false;
            })
        },
        changeTheme: function () {
            this.isDarkTheme = getActualTheme() == 'dark' ? true : false;

            if (this.isDarkTheme) {
                setWhiteTheme();
            } else {
                setDarkTheme();
            }
            this.isDarkTheme = !this.isDarkTheme;
        },
        
    },
    components: {

    },
    computed: {
        quantItems: function() {
            return this.quantCompleted + this.quantActive;
        }
    }
})

getActualTheme();