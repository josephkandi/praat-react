import {  Input, Typography, Row, Col } from "antd";

const { Title } = Typography;
const ENTER_KEY = 13;

function Nickname(){

    const onHandleNickname =  (event) => {
        if(event.keyCode  == ENTER_KEY){
            
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