// 基本消息类型
interface BaseMsg {
  // id
  id: number;
  // 标题
  title: string;
  // 描述
  description: string;
  // 时间
  time: Date;
}

// 系统
interface SystemMsg extends BaseMsg {
  // 链接
  link: string;
}

// 消息
interface MessageMsg extends BaseMsg {
  // 类型
  level: number;
}

// 通知
interface Notification {
  system: SystemMsg[];
  message: MessageMsg[];
}

export type { SystemMsg, MessageMsg, Notification };
