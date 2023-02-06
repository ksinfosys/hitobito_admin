import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";

import Dashboard from "../views/dashboard/dashboard";
import JobSeekerMng from "../views/member-mng/jobseeker-mng";
import CorpMng from "../views/member-mng/corp-mng";
import PasswordChange from "../views/password-change/password-change";
import SkillMng from "../views/skill-mng/skill-mng";
import SkillMng2 from "../views/skill-mng/skill-mng2";
import SkillMng3 from "../views/skill-mng/skill-mng3";
import PointMng from "../views/point-mng/point-mng";
import PointCorpMng from "../views/point-mng/point-corp-mng";

function Router() {
    const routes = [
        {
            path: "/",
            element: <SideMenu />,
            children: [
                // 대시보드
                {
                    path: "/",
                    element: <Dashboard />,
                },

                // 회원관리
                {
                    path: "/jobseeker-mng",
                    element: <JobSeekerMng />,
                },
                {
                    path: "/corp-mng",
                    element: <CorpMng />,
                },
                // 스킬코드 관리
                {
                    path: "/skill-mng",
                    element: <SkillMng />,
                },
                {
                    path: "/skill-mng2",
                    element: <SkillMng2 />,

                },
                {
                    path: "/skill-mng3",
                    element: <SkillMng3/>,

                },
                // 포인트 관리
                {
                    path: "/point-mng",
                    element: <PointMng />,

                },
                {
                    path: "/point-corp-mng",
                    element: <PointCorpMng />,

                },
                // 비밀번호 변경
                {
                    path: "/password-change",
                    element: <PasswordChange />,
                },
            ],
        },

    ];

    return useRoutes(routes);
}

export default Router;
