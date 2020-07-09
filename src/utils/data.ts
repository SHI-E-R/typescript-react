export interface Todo {
  id: string;
  user: string;
  date: string;
  // time?: string; 可选属性
  // readonly time: string; 只读属性
  content: string;
  isCompleted: boolean;
  [propName: string]: any; // 多余属性检查，可能有未定义的字段出现，指定为any类型
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export function getUserById(userId: string) {
  return userList.filter(user => user.id === userId)[0];
}

export const todoListData: Todo[] = [
  {
    id: "1",
    content: "空谈不如实干，踱步何不向前",
    user: "23410977",
    date: "2020年7月9日 13:34",
    isCompleted: false
  },
  {
    id: "2",
    content: "空谈不如实干，踱步何不向前",
    user: "23410345",
    date: "2020年7月9日 14:34",
    isCompleted: false
  },
  {
    id: "3",
    content: "空谈不如实干，踱步何不向前",
    user: "23410345",
    date: "2020年7月9日 15:34",
    isCompleted: false
  },
  {
    id: "4",
    content: "空谈不如实干，踱步何不向前",
    user: "25455350",
    date: "2020年7月9日 19:34",
    isCompleted: false
  }
];

export const userList: User[] = [
  {
    id: "23410345",
    name: "winnshier",
    avatar: "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1782959667,617309577&fm=26&gp=0.jpg"
  },
  {
    id: "23410977",
    name: "lufei",
    avatar: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1055388296,1425226147&fm=26&gp=0.jpg"
  },
  {
    id: "25455350",
    name: "lucifer",
    avatar: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2091711702,2468700162&fm=111&gp=0.jpg"
  }
];