import {connect} from 'react-redux'
import {AiFillDelete, AiFillEdit, HiViewGridAdd} from "react-icons/all";
import {useState} from "react";
import {removeFoydalanuvchi} from '../Redux/Action/Action'
import FoydalanuvchiSearch from "../Search/FoydalanuvchiSearch";
import FoydalanuvchiModal from "../Modals/FoydalanuvchiModal";


function Foydalanuchilar({foydalanuvchilar, removeFoydalanuvchi}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [modalStatus, setModalStatus] = useState('adding')
    const [foydalanuvchi_id, setFoydalanuvchi_id] = useState({id: ''})

    function toggleModal() {
        setModalStatus('adding')
        setModalVisible(prev => !prev)
    }

    function editFoydalanuvchi(id) {
        setModalStatus('editing')
        setFoydalanuvchi_id({id})
        setModalVisible(prev => !prev)
    }

    return <div className={'row foydalanuvchi justify-content-center'}>
        <div className="col-lg-7">
            <div className="block">
                <FoydalanuvchiSearch foydalanuvchilar={foydalanuvchilar}/>
                <span>Foydalanuvchilar</span>
                <button className={'btn btn-success'} onClick={toggleModal}><HiViewGridAdd/> add</button>
            </div>

            <table className={'table text-center'}>
                <thead className={'bg-secondary text-white'}>
                <tr>
                    <th>№</th>
                    <th>Ism</th>
                    <th>Telefon</th>
                    <th>O`zgarishlar</th>
                </tr>
                </thead>
                <tbody>
                {
                    foydalanuvchilar.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button className={'btn btn-outline-success'}
                                        onClick={() => editFoydalanuvchi(item.id)}>
                                    <AiFillEdit/></button>
                                <button className={'btn btn-outline-danger'}
                                        onClick={() => removeFoydalanuvchi(item.id)}>
                                    <AiFillDelete/></button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        <FoydalanuvchiModal modalVisible={modalVisible} toggleModal={toggleModal} modalStatus={modalStatus}
                            foydalanuvchi_id={foydalanuvchi_id} foydalanuvchilar={foydalanuvchilar}/>
    </div>
}

export default connect(({foydalanuvchiReducer}) => ({foydalanuvchilar: foydalanuvchiReducer.foydalanuvchilar}), {removeFoydalanuvchi})(Foydalanuchilar)