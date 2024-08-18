"use client";
import Image from "next/image";
import {
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  Layout,
  message,
  ConfigProvider,
} from "antd";
import svgIcon from "/public/EinsteinLogoGreen.svg";
import "antd/dist/reset.css";

const { Title } = Typography;
const { Content } = Layout;

export default function Home() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: {
    name: string;
    email: string;
    phone: string;
  }) => {
    const success = () => {
      messageApi.open({
        type: "success",
        content: "Pedido submetido com sucesso!",
      });
    };

    const errorM = () => {
      messageApi.open({
        type: "error",
        content: "Ocorreu um erro ao submeter o pedido.",
      });
    };

    const loading = () => {
      messageApi.open({
        type: "loading",
        content: "A submeter o pedido...",
      });
    };
    loading();

    try {
      // Make a POST request to the API route
      const response = await fetch("/api/pedidoContacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: values.name,
          email: values.email,
          telemovel: values.phone,
        }),
      });

      if (response.ok) {
        success();
      } else {
        console.error("Failed to submit form:", response.statusText);
        errorM();
      }
    } catch (error) {
      console.error("API Error:", error);
      errorM();
    }

    // Reset form fields after submission
    //form.resetFields();
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#ffffff",
          colorPrimary: "#109847",
        },
      }}
    >
      <Layout style={{ background: "#181c19" }} className="w-full h-screen">
        {contextHolder}
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
    </ConfigProvider>
  );
}
