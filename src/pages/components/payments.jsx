import Images from '../../images';

const Payments = () => {

    return (
        <>
            <div className="galleryButtons">
            <div className="galleryCaption">Maintenance Transactions</div>
                <button className="galleryButtonControls" onClick="">Pay Maintenance</button>
            </div>
            <div className="noticeContainer">
            <table className="noticeTable">
                <tr>
                    <td>SrNo</td>
                    <td>User</td>
                    <td>Society</td>
                    <td>Transaction ID</td>
                    <td>Amount</td>
                    <td>Time</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="Mori"
                    time="9876543210"
                    status="01:10 AM"
                /> 
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="Mori"
                    time="9876543210"
                    status="01:10 AM"
                />
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="Mori"
                    time="9876543210"
                    status="01:10 AM"
                />
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="Mori"
                    time="9876543210"
                    status="01:10 AM"
                />
            </table>
            <div>
                <div>showing 1 out of 10 entries</div>
            </div>
        </div>
        <div className="galleryButtons">
            <div className="galleryCaption">Donations</div>
                <button className="galleryButtonControls" onClick="">Donate</button>
            </div>
            <div className="noticeContainer">
            <table className="noticeTable">
                <tr>
                <td>SrNo</td>
                    <td>User</td>
                    <td>Society</td>
                    <td>Transaction ID</td>
                    <td>Amount</td>
                    <td>Time</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="Mori"
                    time="9876543210"
                    status="01:10 AM"
                />
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="Mori"
                    time="9876543210"
                    status="01:10 AM"
                />
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="Mori"
                    time="9876543210"
                    status="01:10 AM"
                />
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="Mori"
                    time="9876543210"
                    status="01:10 AM"
                />
            </table>
            <div>
                <div>showing 1 out of 10 entries</div>
            </div>
        </div>
        </>
        );
}

const Row=(props)=>{
    return(
        <>
            <tr className="notHeading">
                <td>
                    <div>{props.sr}</div>
                </td>
                <td>
                    <div className="visitorText">{props.user}</div>
                </td>
                <td>
                    <div className="visitorText">{props.society}</div>
                </td>
                <td>
                    <div className="visitorText">{props.tID}</div>
                </td>
                <td>
                    <div className="visitorText">{props.amount}</div>
                </td>
                <td>
                    <div className="visitorText">{props.time}</div>
                </td>
                <td>
                    <div className="visitorText">{props.status}</div>
                </td>
                <td>
                    <div className="noticeActions">
                        <img src={Images.showIcon}/>
                        <img src={Images.dustbinIcon}/>
                        <img src={Images.dustbinIcon}/>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default Payments;
