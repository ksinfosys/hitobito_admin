import { Children } from "react";
import { atom } from "recoil";

const sideMenu = atom({
    key: "sideMenu",
    default: {
        menu: [
            {
                pathname: "/jobseeker-mng",
                title: "구직자 회원관리",
                subMenu: [
                    {
                        pathname: "/jobseeker-mng",
                        title: "구직자 회원관리",
                    },
                    {
                        pathname: "/corp-mng",
                        title: "기업 회원관리",
                    },
                ],
            },
            {
                pathname: "/skill-mng",
                title: "스킬코드 관리",
            },
            {
                pathname: "/point-mng",
                title: "포인트 관리",
                subMenu: [
                    {
                        pathname: "/point-mng",
                        title: "구직자 포인트 관리",
                    },
                    {
                        pathname: "/point-corp-mng",
                        title: "기업 포인트 관리",
                    },
                ],
            },
            {
                pathname: "/password-change",
                title: "비밀번호 변경",
            },
            {
                pathname: "/",
                title: "로그아웃",
            },
        ],
    },
});

export { sideMenu };
