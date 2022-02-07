import React from 'react'
import '../../styles/dashboard.css'
import * as DashStyles from '../../styles/dashboard-Style';
import { FaRupeeSign} from 'react-icons/fa'
import {BsCalculator} from 'react-icons/bs'
import Carousel from "react-bootstrap/Carousel"
import ChartPie, {ChartBar, ChartDoughnut} from './chart'

const Dashboard = () => {
        return(
            <>
                <DashStyles.Feature1Container>
                    <Feature1 heading = "ALL SOCIETIES" metrics="29,500"></Feature1>
                    <Feature1 heading = "ALL SOCIETIES" metrics="2,500"></Feature1>
                    <Feature1 heading = "ALL SOCIETIES" metrics="10,000"></Feature1>
                </DashStyles.Feature1Container>

                    <DashStyles.Feature2Container>
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
                            <DashStyles.CarouselContainer>
                                {/* <Carousel controls={false} indicators={false}>
                                    <Carousel.Item interval={2300} className="item1">
                                        <Feature2 heading="TOTAL NO. OF SOCIETIES" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2300} className='item1'>
                                        <Feature2 heading="" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                    </Carousel.Item>
                                </Carousel> */}
                                <Feature1 heading = "Active Complaints" metrics="1000"></Feature1>
                            </DashStyles.CarouselContainer>
                            <DashStyles.CarouselContainer>
                                {/* <Carousel controls={false} indicators={false}>
                                    <Carousel.Item interval={2300} className="item1">
                                        <Feature2 heading="INCOME" metrics="350k" icon={<FaRupeeSign/>}></Feature2>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2300} className='item1'>
                                        <Feature2 heading="EXPENSE" metrics="50k" icon={<BsCalculator/>}></Feature2>
                                    </Carousel.Item>
                                </Carousel> */}
                                <Feature5 heading = "Recent Society Registered" Sname="Siddhachal Flats"></Feature5>
                            </DashStyles.CarouselContainer>
                        </DashStyles.CarouselRow>
                        {/* <Feature3 heading={"Society Analytics"} type={"Pie"}/>
                        <Feature4 heading={"Rent Stats By Month"}/> */}
                    </DashStyles.Feature2Container>
                        <br/><br/>
                    <DashStyles.Feature3Container>
                        {/* <Feature3 heading={"Gender Ratio"}/>
                        <Feature4 heading={"Rent Stats By Month"}/> */}
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
                    </DashStyles.Feature3Container>
                    <DashStyles.Feature3Container>
                        {/* <Feature3 heading={"Gender Ratio"}/>
                        <Feature4 heading={"Rent Stats By Month"}/> */}
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
                    </DashStyles.Feature3Container>
            </>
        );
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

    const Feature5 =  (props) =>{
        return(
            <>
                    <DashStyles.DashItemContainer1>
                        <DashStyles.Item>
                            <DashStyles.Title style={{textAlign: "center", fontSize: '1.5rem', fontWeight: "500",textDecoration: "underline"}}>{props.heading}</DashStyles.Title>
                            <DashStyles.Table>
                            <DashStyles.TableRow>
                                <td>1)</td>
                                <td><DashStyles.HeadName>{props.Sname} </DashStyles.HeadName></td>
                                <td>|</td>
                                <td><DashStyles.Area>Navrangpura</DashStyles.Area></td>
                            </DashStyles.TableRow>
                            <DashStyles.TableRow>
                                <DashStyles.TableColumn>
                                    <div>2)</div>
                                    <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                    <div>|</div>
                                    <DashStyles.Area>Navrangpura</DashStyles.Area>
                                </DashStyles.TableColumn>
                            </DashStyles.TableRow>
                            <DashStyles.DashItemWrapper>
                                <div>3)</div>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <div>4)</div>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <div>5)</div>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <div>6)</div>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <div>7)</div>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <div>8)</div>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            <DashStyles.DashItemWrapper>
                                <div>9)</div>
                                <DashStyles.HeadName>{props.Sname}  </DashStyles.HeadName>
                                <div>|</div>
                                <DashStyles.Area>Navrangpura</DashStyles.Area>
                            </DashStyles.DashItemWrapper>
                            </DashStyles.Table>
                        </DashStyles.Item>
                    </DashStyles.DashItemContainer1>
            </>
        )
    }
export default Dashboard