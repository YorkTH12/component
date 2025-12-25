import React, { Component } from 'react';

// 1. Header Component
export function Header() {
    const aStyle = {
        display: 'inline-block',
        color: '#384ffeff',
        margin: '7px',
        textDecoration: 'underline'
    };
    return (
        <div style={{backgroundColor:'#ccc'}}>
            <a href="#home" style={aStyle}>Home</a>
            <a href="#react" style={aStyle}>React</a>
            <a href="#react-native" style={aStyle}>React Native</a>
        </div>
    );
}

// 2. Body Component (ใน App.js อย่าลืม import ชื่อให้ตรงกัน)
export function Body() {
    return (
        <div style={{textAlign:'center'}}>
            <h2>Hello <br/>React & React Native</h2>
            <br/><br/><br/>
        </div>
    );
}

// 3. Footer Component
export const Footer = () => {
    return (
        <div style={{textAlign:'center'}}>
            &copy; {new Date().getFullYear()} My Company
        </div>
    );
}

// 4. Calendar Component (เปลี่ยนเป็น export ปกติ)
export class Calendar extends Component {
    getData() {
        const dayNames = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'];
        const monthNames = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
                            'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
        const date = new Date();
        const weekDay = dayNames[date.getDay()];
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear() + 543;
        return 'วัน' + weekDay + 'ที่ ' + day + ' ' + month + ' ' + year;
    }
    render() {
        return (
            <div style={{textAlign:'center', marginTop:'30px'}}>
                <h3>{this.getData()}</h3>
            </div>
        );
    }
}

// 5. MsgBox2 Component (ใช้ props ตามหน้า 31 และเปลี่ยนชื่อเป็น PascalCase)
export function MsgBox2(props) {
    const divStyle = {
        margin: '10px',
        padding: '5px',
        border: props.border,
        backgroundColor: props.bgColor,
        color: props.color,
        fontSize: props.fontSize
    };
    return <div style={divStyle}>{props.text}</div>
}