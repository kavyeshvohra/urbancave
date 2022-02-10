import React from 'react'
import '../../styles/dashboard.css'
import * as DashStyles from '../../styles/dashboard-Style';
import { FaRupeeSign} from 'react-icons/fa'
import {BsCalculator} from 'react-icons/bs'
import Carousel from "react-bootstrap/Carousel"
import ChartPie, {ChartBar, ChartDoughnut} from './chart'
import {AiFillEye} from 'react-icons/ai'

const MemberDashboard = () => {
    const sStyle={
        display:"flex",
        flexDirection:"column",
        rowGap:"1em",
    }
    const aStyle={
        display:"flex",
        flexDirection:"row",
        columnGap:"5em",
        marginTop: "2em",
    }
        return(
            <>
                <DashStyles.Feature1Container>
                    <Feature1 heading = "ALL SOCIETIES" metrics="29,500"></Feature1>
                    <Feature1 heading = "ALL SOCIETIES" metrics="2,500"></Feature1>
                    <Feature1 heading = "ALL SOCIETIES" metrics="10,000"></Feature1>
                </DashStyles.Feature1Container>

                    <DashStyles.Feature2Container>
                        <DashStyles.Cont1>
                            <div style={sStyle}>
                                <div style={aStyle}>
                                    <DashStyles.CarouselRow>
                                        <DashStyles.CarouselContainer>
                                            <Carousel controls={false} indicators={false}>
                                                <Carousel.Item interval={2300} className="item1">
                                                    <Feature2 heading="INCOME" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                                </Carousel.Item>
                                                <Carousel.Item interval={2300} className='item1'>
                                                    <Feature2 heading="EXPENSE" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                                </Carousel.Item>
                                            </Carousel>
                                        </DashStyles.CarouselContainer>
                                    </DashStyles.CarouselRow>
                                    <Feature1 heading = "Active Complaints" metrics="1000"></Feature1>
                                </div>
                                <div style={aStyle}>
                                        {/* <DashStyles.CarouselRow>
                                            <DashStyles.CarouselContainer>
                                                <Carousel controls={false} indicators={false}>
                                                    <Carousel.Item interval={2300} className="item1">
                                                        <Feature2 heading="INCOME" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                                    </Carousel.Item>
                                                    <Carousel.Item interval={2300} className='item1'>
                                                        <Feature2 heading="EXPENSE" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </DashStyles.CarouselContainer>
                                            <DashStyles.CarouselContainer>
                                                <Carousel controls={false} indicators={false}>
                                                    <Carousel.Item interval={2300} className="item1">
                                                        <Feature2 heading="INCOME" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                                    </Carousel.Item>
                                                    <Carousel.Item interval={2300} className='item1'>
                                                        <Feature2 heading="EXPENSE" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </DashStyles.CarouselContainer>
                                    </DashStyles.CarouselRow> */}
                                    <Feature6 heading="Payment History"/>
                                </div>
                                {/* <div style={aStyle}> */}
                                        {/* <DashStyles.CarouselRow>
                                            <DashStyles.CarouselContainer>
                                                <Carousel controls={false} indicators={false}>
                                                    <Carousel.Item interval={2300} className="item1">
                                                        <Feature2 heading="INCOME" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                                    </Carousel.Item>
                                                    <Carousel.Item interval={2300} className='item1'>
                                                        <Feature2 heading="EXPENSE" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </DashStyles.CarouselContainer>
                                            <DashStyles.CarouselContainer>
                                                <Carousel controls={false} indicators={false}>
                                                    <Carousel.Item interval={2300} className="item1">
                                                        <Feature2 heading="INCOME" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                                    </Carousel.Item>
                                                    <Carousel.Item interval={2300} className='item1'>
                                                        <Feature2 heading="EXPENSE" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </DashStyles.CarouselContainer>
                                    </DashStyles.CarouselRow> */}
                                {/* </div>*/}
                            </div>
                        </DashStyles.Cont1>
                                {/* <Carousel controls={false} indicators={false}>
                                    <Carousel.Item interval={2300} className="item1">
                                        <Feature2 heading="TOTAL NO. OF SOCIETIES" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2300} className='item1'>
                                        <Feature2 heading="" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                    </Carousel.Item>
                                </Carousel> */}
                            <DashStyles.Cont2>
                            <DashStyles.DashItemContainer1>
                                {/* <Carousel controls={false} indicators={false}>
                                    <Carousel.Item interval={2300} className="item1">
                                        <Feature2 heading="INCOME" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2300} className='item1'>
                                        <Feature2 heading="EXPENSE" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                    </Carousel.Item>
                                </Carousel> */}
                                <Feature5 heading = "Recent Society Registered" ></Feature5>
                            </DashStyles.DashItemContainer1>
                            </DashStyles.Cont2>
                        {/* <Feature3 heading={"Society Analytics"} type={"Pie"}/>
                        <Feature4 heading={"Rent Stats By Month"}/> */}
                    </DashStyles.Feature2Container>
                        <br/><br/>
                    {/* <DashStyles.Feature3Container> */}
                        {/* <Feature3 heading={"Gender Ratio"}/>
                        <Feature4 heading={"Rent Stats By Month"}/> */}
                        {/* <DashStyles.CarouselRow>
                            <DashStyles.CarouselContainer>
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item interval={2300} className="item1">
                                        <Feature2 heading="INCOME" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2300} className='item1'>
                                        <Feature2 heading="EXPENSE" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                    </Carousel.Item>
                                </Carousel>
                            </DashStyles.CarouselContainer>
                            <DashStyles.CarouselContainer>
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item interval={2300} className="item1">
                                        <Feature2 heading="INCOME" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2300} className='item1'>
                                        <Feature2 heading="EXPENSE" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                    </Carousel.Item>
                                </Carousel>
                            </DashStyles.CarouselContainer>
                        </DashStyles.CarouselRow>
                    </DashStyles.Feature3Container> */}
                    {/* <DashStyles.Feature3Container> */}
                        {/* <Feature3 heading={"Gender Ratio"}/>
                        <Feature4 heading={"Rent Stats By Month"}/> */}
                        {/* <DashStyles.CarouselRow> */}

                            {/* <DashStyles.CarouselContainer>
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item interval={2300} className="item1">
                                        <Feature2 heading="INCOME" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2300} className='item1'>
                                        <Feature2 heading="EXPENSE" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                    </Carousel.Item>
                                </Carousel>
                            </DashStyles.CarouselContainer>
                        </DashStyles.CarouselRow>
                    </DashStyles.Feature3Container> */}
            </>
        );
    }

    const FeatureStyle = {
        textAlign: "center", 
        fontSize: '1.5rem', 
        fontWeight: "500",
        textDecoration: "underline", 
        marginBottom: "1em"        
    }
    const FeatureStyle1={
        textAlign: "center", 
        fontSize: '1.4rem', 
        fontWeight: "500",
        textDecoration: "underline", 
        marginBottom: "1em"         
    }
    const Feature1 = (props) => {
        return (
            <DashStyles.DashItemContainer>
                <DashStyles.Item>
                    <DashStyles.Title>{props.heading}</DashStyles.Title>
                    <DashStyles.Metrics>{props.metrics}</DashStyles.Metrics>
                    <DashStyles.Desc>Analytics for last week</DashStyles.Desc>
                </DashStyles.Item>
            </DashStyles.DashItemContainer>
        );
    };
    const Feature2 = (props) => {
        return (
            <>
                <DashStyles.Item2>
                    <DashStyles.Title>{props.heading}</DashStyles.Title>
                    <DashStyles.Metrics>{props.metrics}</DashStyles.Metrics>
                    <DashStyles.Icondiv>
                        <DashStyles.Icon>{props.icon}</DashStyles.Icon>
                    </DashStyles.Icondiv>
                    <DashStyles.Desc>Analytics for last week</DashStyles.Desc>
                </DashStyles.Item2>
            </>
        )
    }
    const Feature3 = (props) => {
        return (
            <>
                <DashStyles.Item3>
                    <DashStyles.Title style={{fontSize: '1.5em'}}>{props.heading}</DashStyles.Title>
                    { props.type=='Pie' ? (<ChartPie/>) : (<ChartDoughnut/>)}
                </DashStyles.Item3>
            </>
        )
    }
    const Feature4 = (props) => {
        return(
            <>
                <DashStyles.Item4>
                    <DashStyles.Title style={{fontSize: '1.5em'}}>{props.heading}</DashStyles.Title>
                    <ChartBar/>
                </DashStyles.Item4>
            </>
        )
    }

    const Feature6 = (props) => {
        let SrNo = 1
        const SocietyName = ['Siddhachal Flats', 'Shivrangi Appartments', 'Ankur Highrise', 'Suryasagar Appartments', 'Mahasagar Appartments'];
        const Date = ['1/1/2021', '5/1/2021', '7/2/2021', '14/2/2021', '27/2/2021', '2/3/2021', '22/3/2021']
        let i = 0;
        return(
            <>
                <DashStyles.DashItemContainer2>
                    <DashStyles.Item>
                        <DashStyles.Title style={FeatureStyle}>{props.heading}</DashStyles.Title>
                        {/* <DashStyles.Div style={{marginBottom: "1em"}}>
                                <div>Sr.No</div>
                                <div style={{flexBasis: "100%"}}>Society Name</div>
                                <div style={{flexBasis: "43%"}}>Amount (₹)</div>
                                <div style={{flexBasis: "40%"}}>Date</div>
                                <div>Actions</div>    
                        </DashStyles.Div>     */}
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td>Sr. No</td>
                                    <td>Society Name</td>
                                    <td>Amount (₹)</td>
                                    <td>Date Received</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                            {SocietyName.map(society => {return(
                            <tr>
                                <td data-label="Sr. No">{SrNo++})</td>
                                <td data-label="Society Name"><DashStyles.HeadName>{society}</DashStyles.HeadName></td>
                                <td date-label="Amount (₹)" style={{textAlign: "center"}}>5000</td>
                                <td date-label="Date Received" style={{textAlign: "center"}}>{Date[i++]}</td>
                                <td data-label="Actions" style={{fontSize: "1.2em", cursor: "pointer",textAlign: "center"}}><AiFillEye/></td>
                            </tr>
                            )})
                            }
                            </tbody>
                        </table>
                        <DashStyles.Desc style={{textAlign: "center"}}>(Analytics for last week)</DashStyles.Desc>
                {/* {SocietyName.map(society => {
                return(
                    <DashStyles.DashItemWrapper1>
                    <DashStyles.SrNo>{SrNo++})</DashStyles.SrNo>
                    <DashStyles.HeadName>{society}</DashStyles.HeadName>
                    <DashStyles.Payment>5000</DashStyles.Payment>
                    <DashStyles.Date>{Date[i++]}</DashStyles.Date>
                    <span style={{fontSize: '1.5em', fontWeight: '700', alignItems: "center"}}> &gt; </span>
                    </DashStyles.DashItemWrapper1>
                )
                })} */}
                    </DashStyles.Item>
                </DashStyles.DashItemContainer2>
            </>
        )
    }
    const Feature5 =  (props) =>{

        const SocietyName = ['Siddhachal Flats', 'Shivrangi Appartments', 'Ankur Highrise', 'Suryasagar Appartments', 'Mahasagar Appartments'];
        const Date = ['Drive In Road', 'Shivranjani', 'Navrangpura', 'Gurukul', 'Ranip', 'Mansi Char Rasta', 'Bopal']
        let i = 0;
        return(
            <>
                    <DashStyles.DashItemContainer1>
                        <DashStyles.Item>
                            <DashStyles.Title style={FeatureStyle1}>{props.heading}</DashStyles.Title>
                            <table className='table'>
                            <thead>
                                <tr>
                                    <td>Society Name</td>
                                    <td>Area/Locality</td>
                                </tr>
                            </thead>
                            <tbody>
                            {SocietyName.map(society => {return(
                            <tr>
                                <td data-label="Society Name"><DashStyles.HeadName>{society}</DashStyles.HeadName></td>
                                <td date-label="Area/Locality" style={{textAlign: "center"}}>{Date[i++]}</td>
                            </tr>
                            )})
                            }
                            </tbody>
                        </table>
                        <DashStyles.Desc style={{textAlign: "center"}}>(Analytics for last week)</DashStyles.Desc>
                            {/* <DashStyles.Div>
                                <div>Sr.No</div>
                                <div>Society Name</div>
                                <div>Area/Locality</div>    
                            </DashStyles.Div>    
                                <DashStyles.DashItemWrapper>
                                <DashStyles.SrNo>1)</DashStyles.SrNo>
                                <DashStyles.HeadName>{props.Sname} </DashStyles.HeadName>
                                |
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                    <DashStyles.SrNo>2)</DashStyles.SrNo>
                                    <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                    <div>|</div>
                                    <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <DashStyles.SrNo>3)</DashStyles.SrNo>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <DashStyles.SrNo>4)</DashStyles.SrNo>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <DashStyles.SrNo>5)</DashStyles.SrNo>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <DashStyles.SrNo>6)</DashStyles.SrNo>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <DashStyles.SrNo>7)</DashStyles.SrNo>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <DashStyles.SrNo>8)</DashStyles.SrNo>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <DashStyles.SrNo>9)</DashStyles.SrNo>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper> */}
                        </DashStyles.Item>
                    </DashStyles.DashItemContainer1>
            </>
        )
    }
export default MemberDashboard
