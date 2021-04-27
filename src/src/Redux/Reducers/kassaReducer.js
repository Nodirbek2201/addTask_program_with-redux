
export function kassaReducer(state={
    kassalar:[
        {
            id:1,
            name:'Kassa_1'
        },{
            id:2,
            name:'Kassa_2'
        },
    ]
}, action){
    switch (action.type){
        case 'ADD_KASSA':
            const allIds = state.kassalar.map(item => item.id)
            const maxId = Math.max(...allIds)
            state.kassalar.length ? action.payload.id = maxId + 1 : action.payload.id = 1
            state.kassalar.push(action.payload)
            state = {...state, kassalar: [...state.kassalar]}
            break;
        case 'REMOVE_KASSA':
            const foydalanuvchi_id = action.payload
            state.kassalar.forEach((item, index) => {
                if (item.id === foydalanuvchi_id)
                    state.kassalar.splice(index, 1)
            })
            state = {...state, kassalar: [...state.kassalar]}
            break;
        case 'EDIT_KASSA':
            const current_id = action.payload.id
            state.kassalar.forEach((item) => {
                if (item.id === current_id) {
                    item.name = action.payload.name
                }
            })
            break;
        case 'SEARCH_KASSA':
            state={...state,kassalar: [...action.payload]}
            break;
    }
    return state
}