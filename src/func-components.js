import React,{Component} from 'react';

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

export function Body() {
    return (
        <div style={{textAlign:'center'}}>
            <h2>Hello <br/>React & React Native</h2>
            <br/><br/><br/>
        </div>
    );
}

export const Footer = () => {
    return (
        <div style={{textAlign:'center'}}>
            &copy; {new Date().getFullYear()} My Company
        </div>
    );
}

export default class Calendar extends React.Component{
    getData(){
        const dayNmaes = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'];
        const monthNames = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
                            'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
        const date = new Date();
        const weekDay = dayNmaes[date.getDay()];
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear() + 543;
        return 'วัน' + weekDay + 'ที่ ' + day + ' ' + month + ' ' + year;
    }
    render(){
        return(
            <div style={{textAlign:'center', marginTop:'30px'}}>
                <h3>{this.getData()}</h3>
            </div>
        );
    }
};