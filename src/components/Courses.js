import '../App.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import sci from '../img/sci.png';
import homework from '../img/homework.png';
import start from '../img/start.png';
import starbg from '../img/icon/starbg.png';
import Imgslide from './Imgslide';
import Qrcode from './Qrcode';
import Footer from './Footer';

export default function Courses() {
    return (
        <div>
            <div className='bg-gray'>
                <div className='courses-content'>
                    <img src={starbg} className="startbg" alt="logo" />
                    <div className='imglaptopcourese1'></div>
                    <div className='imgpencil1'></div>
                    <div className='imglaptopcourese2'></div>
                    <div className='startbg2'></div>
                    <div className='imgpencil2'></div>
                    <div className='imgbook1'></div>
                    <div className='startbg3'></div>
                    <div className='imgpencil3'></div>
                    <div className='imglaptopcourese3'></div>
                    <Grid container spacing={2} className='top'>
                        <Grid item xs={5}>
                            <img src={sci} className="img-sci" alt="logo" />
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <div className='text-head'>Courses</div>
                                <div className='text-subhead'>หลักสูตรเนื้อหาวิชาที่เปิดสอน</div>
                                <div className='text-disruption'>เนื้อหาวิชา สื่อประกอบการสอน และชุดข้อสอบเพื่อวัดผลการเรียนรู้ในแต่ละระดับ
                                    ชั้นโดยใช้มาตรฐานกลางสำหรับสถาบันการศึกษา เพื่อยกระดับคุณภาพ
                                    บุคคลากรและเกิดประโยชน์สูงสุดของผู้เรียน</div>
                            </div>
                            <Container sx={{ flexGrow: 1 }} style={{ marginTop: "120px" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <CardContent className='card-type-subject'>
                                            <div style={{ display: "flex" }}>
                                                <div className='header'>Mathematics</div>
                                                <img src={homework} className="imgforsubject" alt="logo" />
                                            </div>
                                            <div className='text-subject'>วิชาคณิตศาสตร์</div>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CardContent className='card-type-subject'>
                                            <div style={{ display: "flex" }}>
                                                <div className='header'>Science</div>
                                                <img src={start} className="imgforsubject" alt="logo" />
                                            </div>
                                            <div className='text-subject'>วิชาวิทยาศาสตร์</div>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </div>
                <div className='app-content'>
                    <div className='texthead'>Klass Bits Application</div>
                    <div className='textsub'>แอพพลิเคชั่นจัดการเรียนการสอนสำหรับนักเรียน</div>
                    <Container>
                        <Imgslide />
                    </Container>
                </div>
                <Qrcode />
            </div>
            <Footer />
        </div>
    );
}