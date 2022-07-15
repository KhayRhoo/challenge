import React from 'react';
import {Link} from 'react-router';

export default function Expenses() {
    return (
        <nav>
            <ul>
                <li><link to={"/home"}>Home</link></li>
                <li><link to={"/shop"}>Shop</link></li>
                {/* <li><link to={"/about"}>About</link></li>
                <li><link to={"/contact"}>Contact</link></li> */}
            </ul>
        </nav>
    );
  };