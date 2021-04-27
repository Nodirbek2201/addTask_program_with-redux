export function reducer(state = {
    open: [
        {
            id: 1,
            name: 'Task 1'
        }
    ],
    inprogress: [
        {
            id: 1,
            name: 'Task 1'
        }
    ],
    completed: [
        {
            id: 1,
            name: 'Task 1'
        }
    ],
    modalValues: {
        title: '',
        status: '',
        taskName: '',
        taskStatus: ''
    },
}, action) {
    switch (action.type) {
        case 'SET_MODAL_VALUES':
            state = {...state, modalValues: action.payload}
            break
        case 'ADD_OPEN_TASK':
            console.log(action.payload)
            // Taskdagi eng katta id topiladi
            const allOpenTaskIDs = state.open.map(item => item.id)
            const maxOpenId = Math.max(...allOpenTaskIDs)
            // Agar open task bo`sh bo`lmasa yangi taskga uning eng katta id + 1 berilsin,
            // aks holda yangi taskni idsi 1 ga teng bo`lsin
            state.open.length ? action.payload.id = maxOpenId + 1 : action.payload.id = 1
            state.open.push(action.payload)
            state = {...state}
            break;
        case 'ADD_INPROGRESS_TASK':
            const allInprogressTaskIDs = state.open.map(item => item.id)
            const maxInprogressId = Math.max(...allInprogressTaskIDs)
            state.inprogress.length ? action.payload.id = maxInprogressId + 1 : action.payload.id = 1
            state.inprogress.push(action.payload)
            state = {...state}
            break;
        case 'ADD_COMPLETED_TASK':
            const allCompletedTaskIDs = state.open.map(item => item.id)
            const maxCompletedId = Math.max(...allCompletedTaskIDs)
            state.completed.length ? action.payload.id = maxCompletedId + 1 : action.payload.id = 1
            state.completed.push(action.payload)
            state = {...state}
            break;
        case 'EDIT_OPEN_TASK':
            // Avval o`zgartirilayotgan task joriy massivdan o`chirib yuboriladi
            state.open.forEach((item, index) => item.id === action.payload.id ? state.open.splice(index, 1) : '')
            // Statusiga qarab massivga qo`shiladi
            if (action.payload.status === 'open') {
                //Yangi massivga qo`shilishdan oldin eng katta id ga ega bo`lishi lozim
                const lastOpenId = state.open.length ? state.open[state.open.length - 1].id : 0
                action.payload.id = lastOpenId + 1
                state.open.push(action.payload)
            }
            else if (action.payload.status === 'inprogress') {
                const lastInprogressId = state.inprogress.length ? state.inprogress[state.inprogress.length - 1].id : 0
                action.payload.id = lastInprogressId + 1
                state.inprogress.push(action.payload)
            }
            else if (action.payload.status === 'completed') {
                const lastCompletedId = state.completed.length ? state.completed[state.completed.length - 1].id : 0
                action.payload.id = lastCompletedId + 1
                state.completed.push(action.payload)
            }
            break;
        case 'EDIT_INPROGRESS_TASK':
            state.inprogress.forEach((item, index) => item.id === action.payload.id ? state.inprogress.splice(index, 1) : '')
            if (action.payload.status === 'open') {
                const lastOpenId = state.open.length ? state.open[state.open.length - 1].id : 0
                action.payload.id = lastOpenId + 1
                state.open.push(action.payload)
            }
            else if (action.payload.status === 'inprogress') {
                const lastInprogressId = state.inprogress.length ? state.inprogress[state.inprogress.length - 1].id : 0
                action.payload.id = lastInprogressId + 1
                state.inprogress.push(action.payload)
            }
            else if (action.payload.status === 'completed') {
                const lastCompletedId = state.completed.length ? state.completed[state.completed.length - 1].id : 0
                action.payload.id = lastCompletedId + 1
                state.completed.push(action.payload)
            }
            break;
        case 'EDIT_COMPLETED_TASK':
            state.completed.forEach((item, index) => item.id === action.payload.id ? state.completed.splice(index, 1) : '')
            if (action.payload.status === 'open') {
                const lastOpenId = state.open.length ? state.open[state.open.length - 1].id : 0
                action.payload.id = lastOpenId + 1
                state.open.push(action.payload)
            }
            else if (action.payload.status === 'inprogress') {
                const lastInprogressId = state.inprogress.length ? state.inprogress[state.inprogress.length - 1].id : 0
                action.payload.id = lastInprogressId + 1
                state.inprogress.push(action.payload)
            }
            else if (action.payload.status === 'completed') {
                const lastCompletedId = state.completed.length ? state.completed[state.completed.length - 1].id : 0
                action.payload.id = lastCompletedId + 1
                state.completed.push(action.payload)
            }
            break;
        case 'REMOVE_OPEN_TASK':
            state.open.forEach((item, index) => item.id === action.payload ? state.open.splice(index, 1) : '')
            state={...state,open: [...state.open]}
        break
        case 'REMOVE_INPROGRESS_TASK':
            state.inprogress.forEach((item, index) => item.id === action.payload ? state.inprogress.splice(index, 1) : '')
            state={...state,inprogress: [...state.inprogress]}
            break
        case 'REMOVE_COMPLETED_TASK':
            state.completed.forEach((item, index) => item.id === action.payload ? state.completed.splice(index, 1) : '')
            state={...state,completed: [...state.completed]}
            break
    }
    return state
}