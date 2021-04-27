import {connect} from 'react-redux'
import {HiViewGridAdd, MdDelete, MdEdit} from "react-icons/all";
import {changeModalValues,removeCompletedTask} from "../Redux/Action/Action";

function Completed({completed, modalToggle, changeModalValues,removeCompletedTask}) {

    function openModal() {
        modalToggle()
        changeModalValues({
            title:'Add completed task',
            status:'adding',
            taskStatus:'completed',
            taskName:''
        })
    }

    function editTask(name,id){
        modalToggle()
        changeModalValues({
            title:'Edit completed task',
            status:'editing',
            taskStatus:'completed',
            taskName:name,
            taskId:id
        })
    }

    return <div className={'card'}>
        <div className="card-header">
            <h3>Completed: <span className={'btn bg-info text-white'}>{completed.length}</span></h3>
        </div>
        <div className="card-body">
            <ul className={'list-group'}>
                {
                    completed.map(item => (
                        <li key={item.id} className={'list-group-item item'}>
                            <span className={'title'}>{item.name}</span>
                            <div className="box">
                                <button className={'text-dark'} onClick={()=>editTask(item.name,item.id)}><MdEdit/></button>
                                <button className={'text-danger'} onClick={()=>removeCompletedTask(item.id)}><MdDelete/></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="card-footer text-right">
            <button className={'btn btn-success'} onClick={openModal}><HiViewGridAdd/> add</button>
        </div>
    </div>
}

export default connect(({completed}) => ({completed}), {changeModalValues,removeCompletedTask})(Completed)
