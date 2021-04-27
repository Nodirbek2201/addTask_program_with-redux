import {connect} from 'react-redux'
import {Modal, ModalFooter, ModalBody, ModalHeader} from 'reactstrap'
import {useEffect, useState} from "react";
import {addChiqim,editChiqim} from "../Redux/Action/Action";

function ChiqimModal({modalVisible,toggleModal,addChiqim,modalStatus,chiqim_id,chiqimlar,editChiqim,foydalanuvchilar,kassalar}) {

    const [ismlar,setIsmlar] = useState([])
    const [kassaNomlari,setKassaNomlari] = useState([])
    const [inputVals,setInputVals] = useState({
        foydalanuvchi_id: '',
        kassa_id: '',
        miqdor:'',
        vaqt:''
    })

    useEffect(()=>{
        // ismlar va kassa nomlari statelarga array ko`rinishida o`zlashtirilyapti
        setIsmlar(foydalanuvchilar.map(item=>item.name))
        setKassaNomlari(kassalar.map(item=>item.name))
    },[foydalanuvchilar,kassalar])

    useEffect(()=>{
        if(chiqim_id.id){
            chiqimlar.forEach(item=>{
                if(item.id===chiqim_id.id)
                    setInputVals({
                        id:chiqim_id.id,
                        foydalanuvchi_id:item.foydalanuvchi_id,
                        kassa_id: item.kassa_id,
                        miqdor: item.miqdor,
                        vaqt: item.vaqt
                    })
            })
        }
    },[chiqim_id])

    function changeInput(status,value){
        if(status==='foydalanuvchi_id')
            setInputVals({...inputVals,foydalanuvchi_id:value})
        else if(status==='kassa_id')
            setInputVals({...inputVals,kassa_id:value})
        else if(status==='miqdor')
            setInputVals({...inputVals,miqdor:value})
        else if(status==='vaqt')
            setInputVals({...inputVals,vaqt:value})
    }

    function formSubmited(e){
        e.preventDefault()
        if(modalStatus==='adding'){
            addChiqim({
                foydalanuvchi_id: inputVals.foydalanuvchi_id,
                kassa_id: inputVals.kassa_id,
                miqdor:inputVals.miqdor,
                vaqt:inputVals.vaqt
            })
        }else {
            editChiqim({
                id:inputVals.id,
                foydalanuvchi_id: inputVals.foydalanuvchi_id,
                kassa_id: inputVals.kassa_id,
                miqdor:inputVals.miqdor,
                vaqt:inputVals.vaqt
            })
        }
        setInputVals({
            foydalanuvchi_id: '',
            kassa_id: '',
            miqdor:'',
            vaqt:''
        })
        toggleModal()
    }
    function closeModal(){
        setInputVals({
            foydalanuvchi_id: '',
            kassa_id: '',
            miqdor:'',
            vaqt:''
        })
        toggleModal()
    }

    return <Modal isOpen={modalVisible} toggle={toggleModal}>
        <ModalHeader>
            Chiqim Qilish
        </ModalHeader>
        <ModalBody>
            <form id={'my-form'} className={'w-75 mx-auto'} onSubmit={formSubmited}>
                <select className={'form-control my-3'}  required value={inputVals.foydalanuvchi_id}
                        onChange={(e)=>changeInput('foydalanuvchi_id',e.target.value)}>
                    <option value=''>Foydalanuvchini tanlang</option>
                    {
                        ismlar.map((item,index)=>(
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </select>
                <select className={'form-control my-3'} required value={inputVals.kassa_id}
                        onChange={(e)=>changeInput('kassa_id',e.target.value)}>
                    <option value=''>Kassani tanlang tanlang</option>
                    {
                        kassaNomlari.map((item,index)=>(
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </select>
                <input type="text" placeholder={'Miqdorni kiriting'} className={'form-control my-3'} required value={inputVals.miqdor}
                       onChange={(e)=>changeInput('miqdor',e.target.value)}/>
                <input type="date" className={'form-control my-3'} required value={inputVals.vaqt}
                       onChange={(e)=>changeInput('vaqt',e.target.value)}/>


            </form>
        </ModalBody>
        <ModalFooter>
            <button className="btn btn-success" form={'my-form'}>save</button>
            <button className="btn btn-danger" onClick={closeModal}>close</button>
        </ModalFooter>
    </Modal>

}

export default connect(({foydalanuvchiReducer,kassaReducer})=>({foydalanuvchilar:foydalanuvchiReducer.foydalanuvchilar,kassalar:kassaReducer.kassalar}),{addChiqim,editChiqim})(ChiqimModal);