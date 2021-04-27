import {connect} from 'react-redux'
import {Modal, ModalFooter, ModalBody, ModalHeader} from 'reactstrap'
import {
    addOpenTask, addInprogressTask, addCompletedTask, editOpenTask, editInprogressTask, editCompletedTask
} from "../Redux/Action/Action";

function MyModal({
                     modalToggle,
                     modalVisible,
                     modalValues,
                     addOpenTask,
                     addInprogressTask,
                     addCompletedTask,
                     editOpenTask,
                     editInprogressTask,
                     editCompletedTask
                 }) {


    function submitForm(e) {
        e.preventDefault()
        modalToggle()
        const name = e.target[0].value
        const status = e.target[1].value
        if (modalValues.status === 'adding') {
            if (status === 'open') {
                console.log(name)
                addOpenTask({name})
            } else if (status === 'inprogress') {
                addInprogressTask({name})
            } else if (status === 'completed') {
                addCompletedTask({name})
            }
        } else if (modalValues.status === 'editing') {
            if (modalValues.taskStatus === 'open') {
                editOpenTask({id: modalValues.taskId,name:name,status:status})
            } else if (modalValues.taskStatus === 'inprogress') {
                editInprogressTask({id: modalValues.taskId,name:name,status:status})
            } else if (modalValues.taskStatus === 'completed') {
                editCompletedTask({id: modalValues.taskId,name:name,status:status})
            }
        }
    }

    return <Modal isOpen={modalVisible} toggle={modalToggle}>
        <ModalHeader>
            {modalValues.title}
        </ModalHeader>
        <ModalBody>
            <form id={'my-form'} className={'w-75 mx-auto'} onSubmit={submitForm}>
                <input type="text" className={'form-control my-3'} placeholder={'Task title'}
                       defaultValue={modalValues.taskName} required/>
                <select defaultValue={modalValues.taskStatus} className={'form-control my-3'} required>
                    <option value="">Status</option>
                    <option value="open">Open</option>
                    <option value="inprogress">Inprogress</option>
                    <option value="completed">Completed</option>
                </select>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className={'btn btn-success'} form={'my-form'}>save</button>
            <button className={'btn btn-danger'} onClick={modalToggle}>cancel</button>
        </ModalFooter>
    </Modal>
}

export default connect(({modalValues}) => ({modalValues}), {
    addOpenTask, addCompletedTask, addInprogressTask, editOpenTask, editInprogressTask, editCompletedTask
})(MyModal)