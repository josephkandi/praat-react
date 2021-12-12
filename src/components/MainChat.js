import { Typography, Input, List, Row, Col, Layout } from "antd";
const { Title } = Typography;
const { Sider, Content, Header } = Layout;

function MainChat(props) {
    return (
        <Layout>
            <Content style={{ padding: 8, height: '100vh' }}>
                <Col>
                    <Row>
                        <List style={{ width: '100%', height: '92vh' }}
                            header={
                                <Row justify="center">
                                    <Title level={3}>Welcome to Praat Group Chat</Title>
                                </Row>
                            }
                            renderItem={item => (
                                <List.Item>
                                    <Typography.Text>{item}</Typography.Text>
                                </List.Item>
                            )} />
                    </Row>
                    <Row>
                        <Input placeholder="Say something nice" />
                    </Row>
                </Col>
            </Content>
        </Layout>
    )
}

export default MainChat;