import * as type from './ActionType'

export const removeFoydalanuvchi = foydalanuvchi_id => {
    return {
        type: type.REMOVE_FOYDALANUVCHI,
        payload: foydalanuvchi_id
    }
}
export const addFoydalanuvchi = new_foydalanuvchi => {
    return {
        type: type.ADD_FOYDALANUVCHI,
        payload: new_foydalanuvchi
    }
}
export const editFoydalanuvchi = edited_foydalanuvchi => {
    return {
        type: type.EDIT_FOYDALANUVCHI,
        payload: edited_foydalanuvchi
    }
}
export const searchFoydalanuvchi = searched_foydalanuvchilar =>{
    return {
        type: type.SEARCH_FOYDALANUVCHI,
        payload: searched_foydalanuvchilar
    }
}
export const removeKassa = kassa_id => {
    return {
        type: type.REMOVE_KASSA,
        payload: kassa_id
    }
}
export const addKassa = new_kassa => {
    return {
        type: type.ADD_KASSA,
        payload: new_kassa
    }
}
export const editKassa = edited_kassa => {
    return {
        type: type.EDIT_KASSA,
        payload: edited_kassa
    }
}
export const searchKassa = searched_kassalar =>{
    return {
        type: type.SEARCH_KASSA,
        payload: searched_kassalar
    }
}
export const removeKirim = kirim_id => {
    return {
        type: type.REMOVE_KIRIM,
        payload: kirim_id
    }
}
export const addKirim = new_kirim => {
    return {
        type: type.ADD_KIRIM,
        payload: new_kirim
    }
}
export const editKirim = edited_kirim => {
    return {
        type: type.EDIT_KIRIM,
        payload: edited_kirim
    }
}
export const removeChiqim = chiqim_id => {
    return {
        type: type.REMOVE_CHIQIM,
        payload: chiqim_id
    }
}
export const addChiqim = new_chiqim => {
    return {
        type: type.ADD_CHIQIM,
        payload: new_chiqim
    }
}
export const editChiqim = edited_chiqim => {
    return {
        type: type.EDIT_CHIQIM,
        payload: edited_chiqim
    }
}
