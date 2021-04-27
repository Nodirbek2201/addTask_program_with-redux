import {connect} from 'react-redux'
import {AiFillDelete, AiFillEdit, HiViewGridAdd} from "react-icons/all";
import {useState} from "react";
import {removeChiqim} from '../Redux/Action/Action'
import ChiqimModal from "../Modals/ChiqimModal";

function Chiqimlar({chiqimlar, removeChiqim}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [modalStatus, setModalStatus] = useState('adding')
    const [chiqim_id, setChiqim_id] = useState({id: ''})

    function toggleModal() {
        setModalStatus('adding')
        setModalVisible(prev => !prev)
    }


    function editChiqim(id) {
        setModalStatus('editing')
        setChiqim_id({id: id})
        setModalVisible(prev => !prev)
    }

    return <div className={'row chiqimlar justify-content-center'}>
        <div className="col-lg-8">
            <div className="block">
                <span>Chiqimlar</span>
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
                    chiqimlar.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.foydalanuvchi_id}</td>
                            <td>{item.kassa_id}</td>
                            <td>{item.miqdor}</td>
                            <td>{item.vaqt.split('-').reverse().join('/')}</td>
                            <td>
                                <button className={'btn btn-outline-success'}
                                        onClick={() => editChiqim(item.id)}>
                                    <AiFillEdit/></button>
                                <button className={'btn btn-outline-danger'}
                                        onClick={() => removeChiqim(item.id)}>
                                    <AiFillDelete/></button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        <ChiqimModal modalVisible={modalVisible} toggleModal={toggleModal} modalStatus={modalStatus}
                     chiqim_id={chiqim_id} chiqimlar={chiqimlar}/>
    </div>
}

export default connect(({chiqimReducer}) => ({chiqimlar: chiqimReducer.chiqimlar}), {removeChiqim})(Chiqimlar)