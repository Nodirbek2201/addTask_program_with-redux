
export function kirimReducer(state={
    kirimlar:[
        {
            id: 1,
            foydalanuvchi_id: 'Nodir',
            miqdor: '200',
            kassa_id: 'Kassa_1',
            vaqt: '2019-11-07'
        },{
            id: 2,
            foydalanuvchi_id: 'Sardor',
            miqdor: '500',
            kassa_id: 'Kassa_2',
            vaqt: '2015-06-14'
        }
    ]
}, action){
    switch (action.type){
        case 'ADD_KIRIM':
            const allIds = state.kirimlar.map(item => item.id)
            const maxId = Math.max(...allIds)
            state.kirimlar.length ? action.payload.id = maxId + 1 : action.payload.id = 1
            state.kirimlar.push(action.payload)
            state = {...state, kirimlar: [...state.kirimlar]}
            break;
        case 'REMOVE_KIRIM':
            const kirim_id = action.payload
            state.kirimlar.forEach((item, index) => {
                if (item.id === kirim_id)
                    state.kirimlar.splice(index, 1)
            })
            state = {...state, kirimlar: [...state.kirimlar]}
            break;
        case 'EDIT_KIRIM':
            const current_id = action.payload.id
            state.kirimlar.forEach((item) => {
                if (item.id === current_id) {
                    item.kassa_id = action.payload.kassa_id
                    item.foydalanuvchi_id = action.payload.foydalanuvchi_id
                    item.miqdor = action.payload.miqdor
                    item.vaqt = action.payload.vaqt
                }
            })
            break;
    }
    return state
}