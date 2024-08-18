import Image from "next/image";
import { Form, Input, Button, Typography, Row, Col, Layout } from "antd";
import svgIcon from "/public/EinsteinLogoGreen.svg";
import "antd/dist/reset.css";
import "./App.css";
import { callMariaDB } from "@/lib/mariadb";

const { Title } = Typography;
const { Content } = Layout;

export default function Home() {
  const [form] = Form.useForm();

  const onFinish = async (values: {
    name: string;
    email: string;
    phone: string;
  }) => {
    console.log("Form Submitted:", values);

    try {
      // Make a database call
      const [result] = await callMariaDB(
        "INSERT INTO pedidos_contacto (name, email, phone, idcentros) VALUES (?, ?, ?, 1)",
        [values.name, values.email, values.phone]
      );
      console.log("Database Insert Result:", result);
    } catch (error) {
      console.error("Database Error:", error);
    }

    form.resetFields();
  };
  return (
    <Layout style={{ background: "#181c19" }} className="w-full h-screen">
      <Content className="flex flex-col w-full h-full justify-center">
        <Row justify="center" align="middle">
          <div className="logo-container">
            <Image src={svgIcon} alt="logo" className="logo" />
          </div>
        </Row>
        <Row justify="center" align="middle">
          <Col xs={24} sm={18} md={12} lg={8}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Title level={1} style={{ color: "#ffffff" }}>
                Disponivel brevemente...
              </Title>
              <Title level={4} style={{ color: "#ffffff" }}>
                Aproveita para te juntares a nós!
              </Title>
            </div>
            <Form
              form={form}
              name="coming-soon"
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                label="Nome"
                rules={[
                  { required: true, message: "Por favor insira o seu nome" },
                ]}
              >
                <Input placeholder="O seu nome" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Por favor insira o seu email",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="O seu email" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Telemóvel"
                rules={[
                  {
                    required: true,
                    message: "Por favor insira o seu número de telemóvel.",
                  },
                ]}
              >
                <Input placeholder="O seu número de telemóvel" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Contactem-me!
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
