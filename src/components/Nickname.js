import {  Input, Typography, Row, Col } from "antd";
import {  useEffect, useState } from "react";
import { io } from "socket.io-client";

const { Title } = Typography;
const ENTER_KEY = 13;
const ADD_USER_KEY = "add user";

function Nickname(){

    const socket = io("https://chat.peruzal.com")
 
    useEffect(() => {
        socket.on('connect', () => {
            // TODO - Set a visible icon for connection status
            console.log('connected')
        })

        socket.on('connect_error', (error) => {
            console.log(error)
        })
    }, [socket])

    const onHandleNickname =  (event) => {
        if(event.keyCode  === ENTER_KEY){
            socket.emit(ADD_USER_KEY, event.target.value)
        }
    };

    return (
        <div>
            <Title level={1}>What is your nickname</Title>
            <Input placeholder="Enter name" onKeyUp={onHandleNickname}/>   
        </div>
        
    )
}

export default Nickname;