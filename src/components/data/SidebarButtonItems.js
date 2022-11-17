import { InboxOutlined } from "@ant-design/icons";
import { FileOutlined } from "@ant-design/icons";
import { SendOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import { INBOX } from "../List";
import { DRAFT } from "../List";
import { TRASH } from "../List";
import { SENT } from "../List";

export const SidebarButtonsItems = [
  {
    icon: <InboxOutlined />,
    text: "Inbox",
    key: INBOX,
  },
  {
    icon: <FileOutlined />,
    text: "Draft",
    key: DRAFT,
  },
  {
    icon: <SendOutlined />,
    text: "Sent",
    key: SENT,
  },
  {
    icon: <DeleteOutlined />,
    text: "Trash",
    key: TRASH,
  },
];
