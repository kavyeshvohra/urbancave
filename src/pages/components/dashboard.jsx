import React from 'react'
import '../../styles/dashboard.css'
import * as DashStyles from '../../styles/dashboard-Style';
import {FaUserCircle, FaRupeeSign} from 'react-icons/fa'
import {AiOutlinePoweroff} from 'react-icons/ai'
import {BsCalculator} from 'react-icons/bs'
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.css'
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
                        <Feature3 heading={"Society Analytics"} type={"Pie"}/>
                        <Feature4 heading={"Rent Stats By Month"}/>
                    </DashStyles.Feature2Container>
                        <br/><br/>
                    <DashStyles.Feature3Container>
                        <Feature3 heading={"Gender Ratio"}/>
                        <Feature4 heading={"Rent Stats By Month"}/>
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
                        <Feature3 heading={"Gender Ratio"}/>
                        <Feature4 heading={"Rent Stats By Month"}/>
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

export default Dashboard