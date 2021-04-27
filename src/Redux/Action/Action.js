import * as type from './ActionType'

export function changeModalValues(values){
    return {
        type: type.SET_MODAL_VALUES,
        payload:values
    }
}
export function addOpenTask(newTask){
    return {
        type: type.ADD_OPEN_TASK,
        payload:newTask
    }
}
export function addInprogressTask(newTask){
    return {
        type: type.ADD_INPROGRESS_TASK,
        payload:newTask
    }
}
export function addCompletedTask(newTask){
    return {
        type: type.ADD_COMPLETED_TASK,
        payload:newTask
    }
}
export function editOpenTask(editedTask){
    return {
        type: type.EDIT_OPEN_TASK,
        payload:editedTask
    }
}
export function editInprogressTask(editedTask){
    return {
        type: type.EDIT_INPROGRESS_TASK,
        payload:editedTask
    }
}
export function editCompletedTask(editedTask){
    return {
        type: type.EDIT_COMPLETED_TASK,
        payload:editedTask
    }
}
export function removeOpenTask(removedTaskId){
    return {
        type: type.REMOVE_OPEN_TASK,
        payload:removedTaskId
    }
}
export function removeInprogressTask(removedTaskId){
    return {
        type: type.REMOVE_INPROGRESS_TASK,
        payload:removedTaskId
    }
}
export function removeCompletedTask(removedTaskId){
    return {
        type: type.REMOVE_COMPLETED_TASK,
        payload:removedTaskId
    }
}
