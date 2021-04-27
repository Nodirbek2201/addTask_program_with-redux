import {connect} from 'react-redux'
import {Modal, ModalFooter, ModalBody, ModalHeader} from 'reactstrap'
import {useEffect, useState} from "react";
import {addFoydalanuvchi,editFoydalanuvchi} from "../Redux/Action/Action";

function FoydalanuvchiModal({modalVisible,toggleModal,addFoydalanuvchi,modalStatus,foydalanuvchi_id,foydalanuvchilar,editFoydalanuvchi}) {

    const [inputVals,setInputVals] = useState({
        name: '',
        phone: '',
    })

    useEffect(()=>{
        if(foydalanuvchi_id.id){
            foydalanuvchilar.forEach(item=>{
                if(item.id===foydalanuvchi_id.id)
                    setInputVals({
                        id:foydalanuvchi_id.id,
                        name:item.name,
                        phone: item.phone
                    })
            })
        }
    },[foydalanuvchi_id])

    function changeInput(status,value){
        if(status==='name')
            setInputVals({...inputVals,name:value})
        else if(status==='phone')
            setInputVals({...inputVals,phone:value})
    }

    function formSubmited(e){
        e.preventDefault()
        if(modalStatus==='adding'){
            addFoydalanuvchi({
                name:inputVals.name,
                phone:inputVals.phone
            })
        }else {
            editFoydalanuvchi({
                id:inputVals.id,
                name:inputVals.name,
                phone:inputVals.phone
            })
        }
        setInputVals({
            name: '',
            phone: ''
        })
        toggleModal()
    }

    return <Modal isOpen={modalVisible} toggle={toggleModal}>
        <ModalHeader>
            Foydalanuvchi Qo`shish
        </ModalHeader>
        <ModalBody>
            <form id={'my-form'} className={'w-75 mx-auto'} onSubmit={formSubmited}>
                <input type="text" className={'form-control my-3'} placeholder={'Ism'} value={inputVals.name}
                onChange={(e)=>changeInput('name',e.target.value)} required/>
                <input type="text" className={'form-control my-3'} placeholder={'Telefon'} value={inputVals.phone}
                onChange={(e)=>changeInput('phone',e.target.value)} required/>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className="btn btn-success" form={'my-form'}>save</button>
            <button className="btn btn-danger" onClick={toggleModal}>close</button>
        </ModalFooter>
    </Modal>

}

export default connect(null,{addFoydalanuvchi,editFoydalanuvchi})(FoydalanuvchiModal);