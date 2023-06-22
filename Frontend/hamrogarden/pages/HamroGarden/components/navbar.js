import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FiMail } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlinePhone, AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { RiShoppingCartLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)

    const fixNavbar = () => {
        if (window.scrollY >= 40) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", fixNavbar)
    }, [])

    const [menu, setMenu] = useState(false)
    const [list, setList] = useState(false)
    const [cart, setCart] = useState(false)

    // let myRef = useRef();
    // useEffect(() => {
    //     let handler = (e) => {
    //         if (!myRef.current.contains(e.target)) {
    //             setCart(false);
    //             console.log(myRef.current)
    //         }
    //     };
    //     document.addEventListener('mousedown', handler);

    //     return () => {
    //         document.removeEventListener('mousedown', handler);
    //     }
    // });

    // dropdown menu



    return (
        <>
            <div className={navbar ? "navContainer active" : "navContainer"}>
                <div className={navbar ? "topNavbar active" : "topNavbar"}>
                    <div className="container">
                        <div className="topElmnt flex space-between">
                            <div className="wlcmTxt">Welcome to Hamro Garden</div>
                            <div className="rightElmnt">
                                <ul className='flex justify-center align-center'>
                                    <li className='flex justify-center align-center'><a className='flex justify-center align-center' href=""><FiMail className='topIcon' />hamrogarden@support.com</a></li>
                                    <li className='flex justify-center align-center'><a className='flex justify-center align-center' href=""><CiLocationOn className='topIcon' />Location</a></li>
                                    <li className='flex justify-center align-center'><a className='flex justify-center align-center' href=""><AiOutlinePhone className='topIcon' />9815282289</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Container">
                    <div className={navbar ? "mainNav active flex space-between align-center" : "mainNav flex space-between align-center"}>
                        <Link href={'/'}><div className="logo">
                            <img src="\images\logo.png" alt="" />
                        </div></Link>
                        <div class="search_box">
                            <div className="dropdown" onClick={() => { setList(!list), setCart(false), setMenu(false) }}>
                                <div class="default_option">All Categories</div>
                                <ul className={list ? "catList active" : "catList"}>
                                    <li>non-veg</li>
                                    <li>vegetables</li>
                                    <li>fruits</li>
                                </ul>
                            </div>
                            <div class="search_field">
                                <input type="text" class="input" placeholder="Search Hamro Garden" />
                                <div className="searchIcon flex justify-center align-center">
                                    <GoSearch className='searchBtn' />
                                </div>
                            </div>
                            <div className="flag">
                                <img src="images\flag.gif" alt="" />
                            </div>
                        </div>
                        <div className="navlinks">
                            <ul className='flex justify-center align-center'>
                                <li className='flex justify-center align-center' ><RiShoppingCartLine className='navIcons' />cart</li>
                                <Link href="Register">
                                    <li className='flex justify-center align-center'>
                                        <FaUserCircle className='navIcons' />hello, sign in
                                    </li>
                                </Link>
                                <div className={menu ? "menuBtn active flex justify-center align-center" : "menuBtn flex justify-center align-center"} onClick={() => { setMenu(!menu), setCart(false), setList(false) }}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}
