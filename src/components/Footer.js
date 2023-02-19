import '../App.css';
import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import lineicon from '../img/icon/line-icon.png';
import fbicon from '../img/icon/fb-icon.png';

export default function Footer() {
    return (
        <div className='content-footer'>
            <div className="box-footer">
                <div className="flex-header">
                    <div>Copyright © 2022 Klass Bits <br />
                        All rights reserved.</div>

                    <div className="">
                        <ul className="menu-header">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Courses</li>
                            <li>Testimonial</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="row-social">
                        <div className="line"><img src={lineicon} className="icon" alt="line" /></div>
                        <div className="fb"><img src={fbicon} className="icon" alt="fackbook" /></div>
                    </div>
                </div>

            </div>
        </div>
    );
}