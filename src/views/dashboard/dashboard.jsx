import {

} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { createRoot } from 'react-dom/client'

import Arrow01 from "@/assets/images/arrow01.svg";
import DashboardBox from "../../components/dashboard-box/dashboard-box";


const Dashboard = () => {
    const container = document.getElementById('root')
    const root = createRoot(container)

    return (
        <>
            <div className="box-type-default p-5">
                <span className="font-bold">관리자님</span>, 반갑습니다.
            </div>
            <div className="grid grid-cols-12 gap-6 mt-8">
                <div className="col-span-6">
                    <ul className="flex space-between mb-3">
                        <li>최근 가입자 구직자 <span className="text-primary font-bold">10건</span></li>
                        <li className="text-sm text-slate-400 flex items-center">전체보기
                            <img src={Arrow01} alt="" className="pl-2" />
                        </li>
                    </ul>
                    <div className="box-type-default p-3">
                        <div className="intro-y">
                            <DashboardBox name="sky" />
                            <DashboardBox name="sky" />
                            <DashboardBox name="sky" />
                        </div>
                    </div>
                </div>

                <div className="col-span-6">
                    <ul className="flex space-between mb-3">
                        <li>최근 가입한 기업 <span className="text-pending font-bold">10건</span></li>
                        <li className="text-sm text-slate-400 flex items-center">전체보기
                            <img src={Arrow01} alt="" className="pl-2" />
                        </li>
                    </ul>
                    <div className="box-type-default p-3">
                        <div className="intro-y">
                            <DashboardBox name="orange" />
                            <DashboardBox name="orange" />
                            <DashboardBox name="orange" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-8">
                <div className="col-span-6">
                    <ul className="flex space-between mb-3">
                        <li>최근 <span className="text-danger">신고</span>된 구직자 <span className="text-primary font-bold">10건</span></li>
                        <li className="text-sm text-slate-400 flex items-center">전체보기
                            <img src={Arrow01} alt="" className="pl-2" />
                        </li>
                    </ul>
                    <div className="box-type-default p-3">
                        <div className="intro-y">
                            <DashboardBox name="sky" />
                            <DashboardBox name="sky" />
                            <DashboardBox name="sky" />
                        </div>
                    </div>
                </div>

                <div className="col-span-6">
                    <ul className="flex space-between mb-3">
                        <li>최근 <span className="text-danger">신고</span>된 기업 <span className="text-pending font-bold">10건</span></li>
                        <li className="text-sm text-slate-400 flex items-center">전체보기
                            <img src={Arrow01} alt="" className="pl-2" />
                        </li>
                    </ul>
                    <div className="box-type-default p-3">
                        <div className="intro-y">
                            <DashboardBox name="orange" />
                            <DashboardBox name="orange" />
                            <DashboardBox name="orange" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Dashboard;
