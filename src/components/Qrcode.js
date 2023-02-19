import '../App.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import phone from '../img/phone.png';
import qr_code from '../img/QR_code_for_mobile_English.png';
import logoklassbits1 from '../img/logoklassbits1.png';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export default function Qrcode() {
    return (
        <div className='content-qr'>
            <div className='imgbook1'></div>
            <div className='imgbook2'></div>
            <div className='imgbook3'></div>
            <div className='imglaptop1'></div>
            <div className='imglaptop2'></div>
            <div className='imglaptop3'></div>
            <div className='imgpencil1'></div>
            <div className='imgpencil2'></div>
            <Container>
                <Grid container spacing={2} className='' style={{ marginBottom: "100px" }}>
                    <Grid item xs={5}>
                        <div className='text-head'>
                            <div>ดาวน์โหลดแอพพลิเคชั่น <br /> <span>Klass Bits</span> ได้ที่</div>
                            <div className='card-qr'>
                                <img src={qr_code} className="img-qr" alt="logo" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <img src={phone} className="phone-qr" alt="logo" />
                    </Grid>
                </Grid>
            </Container>
            <div className='content-contact'>
                <div className='widthbox'>
                    <Grid container spacing={2} className=''>
                        <Grid item xs={4}>
                            <img src={logoklassbits1} className="" alt="logo" />
                        </Grid>
                        <Grid item xs={7} style={{ display: "flex" }}>
                            <div className='boxenter-email'>
                                <div className='text-contactus'>Contact us</div>
                                <div className='box-input'>
                                    <ThemeProvider theme={darkTheme}>
                                        <FormControl fullWidth sx={{ m: 1 }}>
                                            <TextField id="outlined-basic" label="Enter your E-mail / Tel." variant="outlined" />
                                        </FormControl>
                                    </ThemeProvider>
                                </div>
                            </div> <div className="-btn-send">SEND</div>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    );
}