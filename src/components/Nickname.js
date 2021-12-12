import { Input, Typography } from "antd";

const { Title } = Typography;

function Nickname(props) {
    const onHandleNickname = (event) => {
        if (event.key === 'Enter') {
            props.onHandleNickname(event.target.value)
        }
    }

    return (
        <div>
            <Title level={1}>What is your nickname</Title>
            <Input placeholder="Enter name" onKeyUp={onHandleNickname}/>
        </div>
    )
}

export default Nickname;