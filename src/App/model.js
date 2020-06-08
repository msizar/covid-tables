import {action} from 'easy-peasy';

export default {
     todos :[ {
        name: 'play ',
        completed: true,
    },
    {
        name: 'sleep',
        completed: true,

    },
    {
        name: 'dream',
        completed: false,

    }],

//actions 
toggle: action((state, id) => {
    state.todos.map(todo => {
        if(todo.id === id ) {
            todo.completed = !todo.completed
        }
        return todo;
    })
})
}