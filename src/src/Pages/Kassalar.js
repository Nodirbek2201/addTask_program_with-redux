import {connect} from 'react-redux'
import {AiFillDelete, AiFillEdit, HiViewGridAdd} from "react-icons/all";
import {useState} from "react";
import {removeKassa} from '../Redux/Action/Action'
import KassaModal from "../Modals/KassaModal";
import KassaSearch from "../Search/KassaSearch";

function Kassalar({kassalar, removeKassa}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [modalStatus, setModalStatus] = useState('adding')
    const [kassa_id, setKassa_id] = useState({id:''})

    function toggleModal() {
        setModalStatus('adding')
        setModalVisible(prev => !prev)
    }

    function editKassa(id) {
        setModalStatus('editing')
        setKassa_id({id})
        setModalVisible(prev => !prev)
    }

    return <div className={'row kassa justify-content-center'}>
        <div className="col-lg-5">
            <div className="block">
                <KassaSearch kassalar={kassalar}/>
                <span>Kassalar</span>
                <button className={'btn btn-success'} onClick={toggleModal}><HiViewGridAdd/> add</button>
            </div>

            <table className={'table text-center'}>
                <thead className={'bg-secondary text-white'}>
                <tr>
                    <th>№</th>
                    <th>Nomi</th>
                    <th>O`zgarishlar</th>
                </tr>
                </thead>
                <tbody>
                {
                    kassalar.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <button className={'btn btn-outline-success'}
                                        onClick={() => editKassa(item.id)}>
                                    <AiFillEdit/></button>
                                <button className={'btn btn-outline-danger'}
                                        onClick={() => removeKassa(item.id)}>
                                    <AiFillDelete/></button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        <KassaModal modalVisible={modalVisible} toggleModal={toggleModal} modalStatus={modalStatus}
                    kassa_id={kassa_id} kassalar={kassalar}/>
    </div>
}

export default connect(({kassaReducer}) => ({kassalar: kassaReducer.kassalar}), {removeKassa})(Kassalar)