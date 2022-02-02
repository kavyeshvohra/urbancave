const ContentHeader=(props)=>{
    return(
        <div className="contentHeader">
                    <div className="cnfHeading">{props.text}</div>
                    <hr width="95%" size="2" border="none" color="#BBE5FA" />
                </div>
    );
}

export default ContentHeader;