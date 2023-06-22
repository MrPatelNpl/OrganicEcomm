import React from 'react'
import { useEffect, useState } from 'react'

export default function Register() {
    useEffect(() => {
        const labels = document.querySelectorAll('label');
        labels.forEach((label) => {
            label.innerHTML = label.innerText.split(' ').map((letters, i) => `<span style="transition-delay: ${i * 50}ms">${letters}</span>`)
                .join(' ');
        });
    }, []);
    return (
        <div className="pageData flex justify-center align-center">
            <form>
                <div className="logo loginlogo">
                    <a href=""><img src="\images\logo.png" alt="" /></a>
                </div>
                <h2>New Account</h2>
                <div className="inputBox">
                    <input type='text' required />
                    <label htmlFor="">Username</label>
                </div>
                <div className="inputBox">
                    <input type='text' required />
                    <label htmlFor="">Email</label>
                </div>
                <div className="inputBox">
                    <input type='password' required />
                    <label htmlFor="">create password</label>
                </div>
                <div className="inputBox">
                    <input type='password' required />
                    <label htmlFor="">confirm  password</label>
                </div>
                <div className="inputBox">
                    <input type="submit" value="signup" />
                </div>
                <p>already have an account? <a href="">login</a></p>
            </form>
        </div>
    )
}
