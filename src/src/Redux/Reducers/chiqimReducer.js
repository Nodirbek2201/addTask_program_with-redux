export function chiqimReducer(state = {
    chiqimlar: [
        {
            id: 1,
            foydalanuvchi_id: 'Nodir',
            miqdor: '400',
            kassa_id: 'Kassa_1',
            vaqt: '2001-02-12'
        }
    ]
}, action) {
    switch (action.type){
        case 'ADD_CHIQIM':
            const allIds = state.chiqimlar.map(item => item.id)
            const maxId = Math.max(...allIds)
            state.chiqimlar.length ? action.payload.id = maxId + 1 : action.payload.id = 1
            state.chiqimlar.push(action.payload)
            state = {...state, chiqimlar: [...state.chiqimlar]}
            break;
        case 'REMOVE_CHIQIM':
            const chiqim_id = action.payload
            state.chiqimlar.forEach((item, index) => {
                if (item.id === chiqim_id)
                    state.chiqimlar.splice(index, 1)
            })
            state = {...state, chiqimlar: [...state.chiqimlar]}
            break;
        case 'EDIT_CHIQIM':
            const current_id = action.payload.id
            state.chiqimlar.forEach((item) => {
                if (item.id === current_id) {
                    item.foydalanuvchi_id = action.payload.foydalanuvchi_id
                    item.kassa_id = action.payload.kassa_id
                    item.miqdor = action.payload.miqdor
                    item.vaqt = action.payload.vaqt
                }
            })
            break;
    }
    return state
}