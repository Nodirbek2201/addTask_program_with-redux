import {connect} from 'react-redux'
import {AiFillDelete, AiFillEdit, HiViewGridAdd} from "react-icons/all";
import {useState} from "react";
import {removeKirim} from '../Redux/Action/Action'
import KirimModal from "../Modals/KirimModal";

function Kirimlar({kirimlar, removeKirim}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [modalStatus, setModalStatus] = useState('adding')
    const [kirim_id, setKirim_id] = useState({id: ''})

    function toggleModal() {
        setModalStatus('adding')
        setModalVisible(prev => !prev)
    }


    function editKirim(id) {
        setModalStatus('editing')
        setKirim_id({id: id})
        setModalVisible(prev => !prev)
    }

    return <div className={'row kirimlar justify-content-center'}>
        <div className="col-lg-8">
            <div className="block">
                <span>Kirimlar</span>
                <button className={'btn btn-success'} onClick={toggleModal}><HiViewGridAdd/> add</button>
            </div>

            <table className={'table text-center'}>
                <thead className={'bg-secondary text-white'}>
                <tr>
                    <th>№</th>
                    <th>Foydalanuvchi</th>
                    <th>Kassa</th>
                    <th>Miqdor</th>
                    <th>Vaqt</th>
                    <th>O`zgarishlar</th>
                </tr>
                </thead>
                <tbody>
                {
                    kirimlar.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.foydalanuvchi_id}</td>
                            <td>{item.kassa_id}</td>
                            <td>{item.miqdor}</td>
                            <td>{item.vaqt.split('-').reverse().join('/')}</td>
                            <td>
                                <button className={'btn btn-outline-success'}
                                        onClick={() => editKirim(item.id)}>
                                    <AiFillEdit/></button>
                                <button className={'btn btn-outline-danger'}
                                        onClick={() => removeKirim(item.id)}>
                                    <AiFillDelete/></button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        <KirimModal modalVisible={modalVisible} toggleModal={toggleModal} modalStatus={modalStatus}
                    kirim_id={kirim_id} kirimlar={kirimlar}/>
    </div>
}

export default connect(({kirimReducer}) => ({kirimlar: kirimReducer.kirimlar}), {removeKirim})(Kirimlar)