import {connect} from 'react-redux'
import {HiViewGridAdd, MdDelete, MdEdit} from "react-icons/all";
import {changeModalValues,removeOpenTask} from "../Redux/Action/Action";

function Open({open, modalToggle, changeModalValues,removeOpenTask}) {

    function openModal() {
        modalToggle()
        changeModalValues({
            title:'Add open task',
            status:'adding',
            taskStatus:'open',
            taskName:''
        })
    }

    function editTask(name,id){
        modalToggle()
        changeModalValues({
            title:'Edit open task',
            status:'editing',
            taskStatus:'open',
            taskName:name,
            taskId:id
        })
    }

    return <div className={'card'}>
        <div className="card-header">
            <h3>Open: <span className={'btn bg-info text-white'}>{open.length}</span></h3>
        </div>
        <div className="card-body">
            <ul className={'list-group'}>
                {
                    open.map(item => (
                        <li key={item.id} className={'list-group-item item'}>
                            <span className={'title'}>{item.name}</span>
                            <div className="box">
                                <button className={'text-dark'} onClick={()=>editTask(item.name,item.id)}><MdEdit/></button>
                                <button className={'text-danger'} onClick={()=>removeOpenTask(item.id)}><MdDelete/></button>
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

export default connect(({open}) => ({open}), {changeModalValues,removeOpenTask})(Open)
