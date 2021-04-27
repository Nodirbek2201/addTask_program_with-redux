export function foydalanuvchiReducer(state = {
    foydalanuvchilar: [
        {
            id: 1,
            name: 'Nodir',
            phone: '+998990082735'
        }, {
            id: 2,
            name: 'Sardor',
            phone: '+998945679832'
        },
    ]
}, action) {
    switch (action.type) {
        case 'ADD_FOYDALANUVCHI':
            const allIds = state.foydalanuvchilar.map(item => item.id)
            const maxId = Math.max(...allIds)
            state.foydalanuvchilar.length ? action.payload.id = maxId + 1 : action.payload.id = 1
            state.foydalanuvchilar.push(action.payload)
            state = {...state, foydalanuvchilar: [...state.foydalanuvchilar]}
            break;
        case 'REMOVE_FOYDALANUVCHI':
            const foydalanuvchi_id = action.payload
            state.foydalanuvchilar.forEach((item, index) => {
                if (item.id === foydalanuvchi_id)
                    state.foydalanuvchilar.splice(index, 1)
            })
            state = {...state, foydalanuvchilar: [...state.foydalanuvchilar]}
            break;
        case 'EDIT_FOYDALANUVCHI':
            const current_id = action.payload.id
            state.foydalanuvchilar.forEach((item) => {
                if (item.id === current_id) {
                    item.name = action.payload.name
                    item.phone = action.payload.phone
                }
            })
            break;
        case 'SEARCH_FOYDALANUVCHI':
            state={...state,foydalanuvchilar: [...action.payload]}
            break;
    }
    return state
}