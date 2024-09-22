import {atom} from "recoil"
export const TodoAtom =atom({
    key:'TodoAtom',
    default:{
        title:'',
        description:''
    }
})
export const TodoListAtom=atom({
    key:'TodoListAtom',
    default:[]
})

export const FilterAtom=atom({
    key:'FilteredAtom',
    default:''
})
export const FilteredTodoAtom=atom({
    key:'FilteredTodoAtom',
    default:[]
})