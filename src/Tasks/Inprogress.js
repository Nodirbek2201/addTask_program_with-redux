import {connect} from 'react-redux'
import {HiViewGridAdd, MdDelete, MdEdit} from "react-icons/all";
import {changeModalValues,removeInprogressTask} from "../Redux/Action/Action";

function Inprogress({inprogress, modalToggle, changeModalValues,removeInprogressTask}) {

    function openModal() {
        modalToggle()
        changeModalValues({
            title:'Add inprogress task',
            status:'adding',
            taskStatus:'inprogress',
            taskName:''
        })
    }

    function editTask(name,id){
        modalToggle()
        changeModalValues({
            title:'Edit inprogress task',
            status:'editing',
            taskStatus:'inprogress',
            taskName:name,
            taskId:id
        })
    }

    return <div className={'card'}>
        <div className="card-header">
            <h3>Inprogress: <span className={'btn bg-info text-white'}>{inprogress.length}</span></h3>
        </div>
        <div className="card-body">
            <ul className={'list-group'}>
                {
                    inprogress.map(item => (
                        <li key={item.id} className={'list-group-item item'}>
                            <span className={'title'}>{item.name}</span>
                            <div className="box">
                                <button className={'text-dark'} onClick={()=>editTask(item.name,item.id)}><MdEdit/></button>
                                <button className={'text-danger'} onClick={()=>removeInprogressTask(item.id)}><MdDelete/></button>
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

export default connect(({inprogress}) => ({inprogress}), {changeModalValues,removeInprogressTask})(Inprogress)
