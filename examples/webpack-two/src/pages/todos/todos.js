import { TuaPage } from '@/../../../src/'

import '@/styles/todomvc-common-base.css'
import '@/styles/todomvc-app-css.css'
import './todos.less'

let uid = 0

const filters = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.completed),
    completed: todos => todos.filter(todo => todo.completed),
}

const getValFromEvent = ({ detail, currentTarget }) =>
    ({ ...detail, ...currentTarget.dataset })

TuaPage({
    data () {
        return {
            todos: [
                { id: uid++, title: 'a', completed: true },
                { id: uid++, title: 'b', completed: false },
            ],
            newTodo: '',
            editedTodo: '',
            visibility: 'all',
        }
    },
    computed: {
        filteredTodos () {
            return filters[this.visibility](this.todos)
        },
        remaining () {
            return filters.active(this.todos).length
        },
        remainingStr () {
            return this.pluralize('item', this.remaining)
        },
        allDone () {
            return this.remaining === 0
        },
        clearCompletedStyleStr () {
            const visibility = this.todos.length <= this.remaining
                ? 'hidden'
                : 'visible'

            return `visibility: ${visibility};`
        },
    },
    watch: {
    },
    onLoad () {
    },
    methods: {
        toggleAll (e) {
            const { value } = getValFromEvent(e)

            if (value[0] === 'false') {
                this.todos.forEach((todo) => {
                    todo.completed = true
                })
            } else {
                this.todos.forEach((todo) => {
                    todo.completed = false
                })
            }
        },
        toggleTodo (e) {
            const { index } = getValFromEvent(e)
            const todo = this.todos[index]

            todo.completed = !todo.completed
        },
        inputTodo (e) {
            const { value } = getValFromEvent(e)

            this.newTodo = value
        },
        filteredTodosClass (todo) {
            return [
                todo.completed ? 'completed' : '',
                todo === this.editedTodo ? 'editing' : '',
            ].join(' ')
        },
        onPressTodo (e) {
            const { todo } = getValFromEvent(e)

            this.editTodo(todo)
        },
        onBlurTodo (e) {
            const { index, value } = getValFromEvent(e)
            const todo = this.todos[index]

            if (!this.editedTodo) return

            this.editedTodo = null
            todo.title = value.trim()

            if (!todo.title) {
                this.removeTodo(todo)
            }
        },
        onTapRemove (e) {
            const { index } = getValFromEvent(e)

            this.removeTodo(this.todos[index])
        },
        changeFilter (e) {
            const { filter } = getValFromEvent(e)

            this.visibility = filter
        },

        // 原始函数
        pluralize (word, count) {
            return word + (count === 1 ? '' : 's')
        },
        addTodo () {
            const value = this.newTodo && this.newTodo.trim()
            if (!value) return

            this.todos.push({
                id: uid++,
                title: value,
                completed: false,
            })
            this.newTodo = ''
        },
        removeTodo (todo) {
            const index = this.todos.indexOf(todo)
            this.todos.splice(index, 1)
        },
        editTodo (todo) {
            this.beforeEditCache = todo.title
            this.editedTodo = todo
        },
        doneEdit (todo) {
            if (!this.editedTodo) return

            this.editedTodo = null
            todo.title = todo.title.trim()

            if (!todo.title) {
                this.removeTodo(todo)
            }
        },
        cancelEdit (todo) {
            this.editedTodo = null
            todo.title = this.beforeEditCache
        },
        removeCompleted () {
            this.todos = filters.active(this.todos)
        },
    },
})