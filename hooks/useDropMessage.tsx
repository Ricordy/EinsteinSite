import { message } from "antd";
import { NoticeType } from "antd/es/message/interface";

const useDropMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const DropMessage = (type: NoticeType, message: string) => {
    messageApi.open({
      type: type,
      content: message,
      duration: type === "loading" ? 1000 : 2000,
    });
    setTimeout(messageApi.destroy, 2500);
  };
  return { contextHolder, DropMessage };
};

export default useDropMessage;
