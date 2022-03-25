import '../../../styles/displayInfoModal.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const PaymentInfoModal=(props)=>{
    console.log(props.data);
    return(<>
        <div className="dimScreen">
            <div className="displayInfoContent">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">{props.type}</div>
                    <AiOutlineCloseCircle onClick={()=>props.closeModal()} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="visitorInfoContainer">
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">{props.type}ID:</lable>
                            <input className="displayInfoInput" value={props.data.id} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">TransactionID:</lable>
                            <input className="displayInfoInput" value={props.data.tID} readOnly/>
                        </div>
                    </div>

                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">User:</lable>
                            <input className="displayInfoInput" value={props.data.user} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Society:</lable>
                            <input className="displayInfoInput" value={props.data.society} readOnly/>
                        </div>
                    </div>

                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Amount:</lable>
                            <input className="displayInfoInput" value={props.data.amount} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Late Fee:</lable>
                            <input className="displayInfoInput" value={props.data.latefee} readOnly/>
                        </div>
                    </div>

                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Date of transaction:</lable>
                            <input className="displayInfoInput" value={props.data.date} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Due Date </lable>
                            <input className="displayInfoInput" value={props.data.dueDate} readOnly/>
                        </div>
                    </div>

                    {

                        props.type=="Donation"?(<div className="visitorDataContainer">
                            <lable className="displayInfoLable">Description:</lable>
                            <textarea className="displayInfoInput2" value={props.data.description} readOnly/>
                        </div>):(<></>)
                    }
                    {
                        props.action!="show"?(<div className="visitorDataButtons">
                            <button className="galleryButtonControls">Save</button>
                            <button className="galleryButtonControls">Cancel</button>
                        </div>):(<></>)
                    }
                </div>
            </div>
        </div>
    </>);
}

export default PaymentInfoModal;