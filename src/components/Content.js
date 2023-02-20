import '../App.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import homeimage from '../img/homeimage.png';
import CardContent from '@mui/material/CardContent';
import student_study from '../img/student_study.png';
import workingman from '../img/workingman.png';
import computer from '../img/computer.png';
import computersci from '../img/computersci.png';
import computerunuse from '../img/computerunuse.png';
import table from '../img/table.png';
import groupusimage from '../img/groupusimage.png';

export default function Content() {
  return (
    <div>
      <div className='imgbookforbg1'></div>
      <div className='imgbookforbg2'></div>
      <div className='imglaptopforbg1'></div>
      <div className='imglaptopforbg2'></div>
      <div className='imgpencilforbg1'></div>
      <div className='imgpencilforbg2'></div>
      <div className='imgpencilforbg3'></div>
      <Container>
        <div className="top-banertop">
          <Grid container >
            <Grid item xs={6}>
              <div className="text-head">Klass</div>
              <div style={{ marginTop: "-50px" }} className="text-head">Bils</div>
              <div style={{ marginTop: "-30px" }} className="text-subthai">แพลตฟอร์มจัดการเรียนรู้</div>
              <div className="text-sub">Learning Management System</div>
              <div className="text-content">ยกระดับคุณภาพโรงเรียนและบุคคลากรด้านการศึกษา<br />
                เพื่อการจัดการเรียนการสอนได้อย่างเต็มรูปแบบและมีประสิทธิภาพ</div>
              <div className="row-btn">
                <div className="-btn-submit">develop learners</div>
                <div className="-btn-submit">help teacher</div>
                <div className="-btn-submit">school upgrade</div>
              </div>
              <div className="-btn-getstart">GET STARTED</div>
            </Grid>
            <Grid item xs={6}>
              <img src={homeimage} className="img-homeimage" alt="logo" />
            </Grid>
          </Grid>
        </div>

        <CardContent className="box-content">
          <div>
            <div className='imgbookforcontent1'></div>
            <div className='imgbookforcontent2'></div>
            <div className='imglaptopcontent1'></div>
            <div className='imgpencilcontentt1'></div>
            <div className='imgpencilcontentt2'></div>
            <div className='imgstarcontent1'></div>
            <div className='imgstarcontent2'></div>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img src={groupusimage} className="img-girl" alt="logo" />
              </Grid>
              <Grid item xs={6}>
                <div className='header'>Klass Bits</div>
                <div className='subtitle' style={{ marginTop: "-20px" }} >แพลตฟอร์มจัดการเรียนรู้ (LMS)</div>
                <div className='disruption'>Klass Bits แพลตฟอร์มจัดการเรียนรู้ Learning Management
                  System (LMS) เพื่อสร้างความสำเร็จในการสอนและการเรียนรู้
                  เพื่อสร้างความเหมาะสมสำหรับการจัดการเรียนการสอนในโรงเรียน
                  ออนไลน์หรือรูปแบบแบบผสมในระดับชั้นปฐมวัย

                  มีระบบเครื่องมือ และฟังก์ชั่นการใช้งานผ่านแอปพลิเคชั่นอย่าง
                  ครบถ้วนสำหรับการจัดการเรียนการสอน เพื่อให้นักเรียนได้รับการเรียน
                  รู้ในบทเรียนได้อย่างครบถ้วน และเหมาะสมในแต่ละระดับชั้นเรียน
                </div>
                <div className='box-btn-type'>
                  <Grid container spacing={4}>
                    <Grid item xs={3}><div className="-btn-type">School</div></Grid>
                    <Grid item xs={3}><div className="-btn-type">Teacher</div></Grid>
                    <Grid item xs={3}><div className="-btn-type">Classroom</div></Grid>
                    <Grid item xs={3}><div className="-btn-type">Student</div></Grid>
                  </Grid>
                  <Grid container spacing={4} style={{ marginTop: "-5px" }}>
                    <Grid item xs={3}><div className="-btn-type">Parent</div></Grid>
                    <Grid item xs={3}><div className="-btn-type">Lesson</div></Grid>
                    <Grid item xs={3}><div className="-btn-type">Teaching</div></Grid>
                    <Grid item xs={3}><div className="-btn-type">Track Score</div></Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>


            <Container sx={{ flexGrow: 1 }} style={{ marginTop: "120px" }}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <CardContent className='card-type'>
                    <div style={{ display: "flex" }}>
                      <div className='header'>Management</div>
                      <img src={student_study} className="img" alt="logo" />
                    </div>
                    <div className='text-thai'>การจัดการโรงเรียน/ผู้สอน</div>
                  </CardContent>
                </Grid>
                <Grid item xs={4}>
                  <CardContent className='card-type'>
                    <div style={{ display: "flex" }}>
                      <div className='header'>Management</div>
                      <img src={table} className="img" alt="logo" />
                    </div>
                    <div className='text-thai'>การจัดการโรงเรียน/ผู้สอน</div>
                  </CardContent>
                </Grid>
                <Grid item xs={4}>
                  <CardContent className='card-type'>
                    <div style={{ display: "flex" }}>
                      <div className='header'>Management</div>
                      <img src={computerunuse} className="img" alt="logo" />
                    </div>
                    <div className='text-thai'>การจัดการโรงเรียน/ผู้สอน</div>
                  </CardContent>
                </Grid>

              </Grid>
              <Grid container spacing={3} style={{ marginTop: "180px" }}>
                <Grid item xs={4}>
                  <CardContent className='card-type'>
                    <div style={{ display: "flex" }}>
                      <div className='header'>Management</div>
                      <img src={computersci} className="img" alt="logo" />
                    </div>
                    <div className='text-thai'>การจัดการโรงเรียน/ผู้สอน</div>
                  </CardContent>
                </Grid>
                <Grid item xs={4}>
                  <CardContent className='card-type'>
                    <div style={{ display: "flex" }}>
                      <div className='header'>Management</div>
                      <img src={computer} className="img" alt="logo" />
                    </div>
                    <div className='text-thai'>การจัดการโรงเรียน/ผู้สอน</div>
                  </CardContent>
                </Grid>
                <Grid item xs={4}>
                  <CardContent className='card-type'>
                    <div style={{ display: "flex" }}>
                      <div className='header'>Management</div>
                      <img src={workingman} className="img" alt="logo" />
                    </div>
                    <div className='text-thai'>การจัดการโรงเรียน/ผู้สอน</div>
                  </CardContent>
                </Grid>

              </Grid>
            </Container>
          </div>
        </CardContent>
      </Container>
    </div>
  );
}