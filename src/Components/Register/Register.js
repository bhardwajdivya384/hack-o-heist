import React from 'react'
import Button from 'react-bootstrap/Button';
import './Register.css'
import red from './img/Red.png'
import Dalli from '../About/photo.png'
import Nairobi from './img/Nairobi.png'
import Logo from '../Home/img/robotics-logo.png'
function Register() {


    return (
  <div className="ABC">
            <div className="heading">
                Did you Register?
                <br />
                <Button
                    id="button"
                    variant="outline-danger"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://bit.ly/hack-o-heist';
                    }}
                > <h4>Click To Register</h4></Button>
            </div>
            <div>
                <img className="Nairobi" src={Nairobi} alt="" />
            </div>
            <div>
                <img className="Dalli" src={Dalli} alt="" />
            </div>


            <div >
                <img className="wave" src={red} alt="" />
            </div>

            <div >
                <img className="RClogo" src={Logo} alt="" />
                <p className="Text">“If you’re struggling to “think outside the box” remember the box is self-imposed. Who says it has to be a box? Why not a bowl of petunias?” ― Ryan Lilly</p>
            </div>

            <p className="Contact">  <h3>Contact Us</h3> <br/>
             <li>Shivam Tyagi- 8102323657</li></p>






        </div>
    );
}

export default Register