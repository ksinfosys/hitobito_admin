import {
    Lucide,

} from "@/base-components";

import Search from "@/assets/images/search.svg";
import LineIco from "@/assets/images/line-ico.svg";
import GoogleIco from "@/assets/images/google-ico.svg";
import KakaoIco from "@/assets/images/kakao-ico.svg";



const JobSeekerMng = () => {


  return (
    <>
        <div className="jobseeker-mng">
            <div className="grid grid-cols-12 gap-6 mt-8 box-type-default">
                <div className="col-span-12 p-5 text-sm bg-box-title">
                    구직자 회원관리
                </div>
                <div className="col-span-12 list-top flex flex-end items-center px-5">
                    <div className="flex gap-2">
                        <select className="form-select w-32">
                            <option>가입일</option>
                            <option>111</option>
                            <option>222</option>
                        </select>
                        <div className="search-box relative text-slate-500 w-80">
                            <input type="text" className="form-control" placeholder="검색어를 입력 하세요."/>
                            <button className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0">
                                <img src={Search} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 dashboard-cont px-5 pb-10">
                    {/* 테이블 10줄 */}
                    <table className="table">
                        <thead className="table-light text-center">
                            <tr>
                                <th className="whitespace-nowrap text-sm">
                                    <input className="form-check-input" type="checkbox" value="" />
                                </th>
                                <th className="whitespace-nowrap text-sm"></th>
                                <th className="whitespace-nowrap text-sm">아이디</th>
                                <th className="whitespace-nowrap text-sm">닉네임</th>
                                <th className="whitespace-nowrap text-sm">이메일/휴대폰번호</th>
                                <th className="whitespace-nowrap text-sm">가입일</th>
                                <th className="whitespace-nowrap text-sm">신고접수</th>
                                <th className="whitespace-nowrap text-sm"></th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>
                                    <input className="form-check-input" type="checkbox" value="" />
                                </td>
                                <td className="text-slate-300 flex"><img src={LineIco} alt="라인아이콘" className="mr-2" />Line</td>
                                <td>Sony1</td>
                                <td>다나카</td>
                                <td>
                                    <p className="text-xs">010-1234-1234</p>
                                    <p className="text-xs">abcd@email.com</p>
                                </td>
                                <td className="text-slate-300">2023/09/07</td>
                                <td>10</td>
                                <td>
                                    <button className="btn btn-sm btn-primary w-20">작성</button>
                                    <button className="btn btn-sm btn-outline-primary w-20 ml-2">관리</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="form-check-input" type="checkbox" value="" />
                                </td>
                                <td className="text-slate-300 flex"><img src={GoogleIco} alt="구글아이콘" className="mr-2" />Google</td>
                                <td>mahamaha</td>
                                <td>NICONICO</td>
                                <td>
                                    <p className="text-xs">010-1234-1234</p>
                                    <p className="text-xs">abcd@email.com</p>
                                </td>
                                <td className="text-slate-300">2023/09/07</td>
                                <td>01</td>
                                <td>
                                    <button className="btn btn-sm btn-primary w-20">작성</button>
                                    <button className="btn btn-sm btn-outline-primary w-20 ml-2">관리</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="form-check-input" type="checkbox" value="" />
                                </td>
                                <td className="text-slate-300 flex"><img src={KakaoIco} alt="카카오아이콘" className="mr-2" />Kakao</td>
                                <td>Tayo</td>
                                <td>NARUTO</td>
                                <td>
                                    <p className="text-xs">010-1234-1234</p>
                                    <p className="text-xs">abcd@email.com</p>
                                </td>
                                <td className="text-slate-300">2023/09/07</td>
                                <td>50</td>
                                <td>
                                    <button className="btn btn-sm btn-primary w-20">작성</button>
                                    <button className="btn btn-sm btn-outline-primary w-20 ml-2">관리</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="form-check-input" type="checkbox" value="" />
                                </td>
                                <td className="text-slate-300 flex"><img src={GoogleIco} alt="구글아이콘" className="mr-2" />Google</td>
                                <td>mahamaha</td>
                                <td>NICONICO</td>
                                <td>
                                    <p className="text-xs">010-1234-1234</p>
                                    <p className="text-xs">abcd@email.com</p>
                                </td>
                                <td className="text-slate-300">2023/09/07</td>
                                <td>01</td>
                                <td>
                                    <button className="btn btn-sm btn-primary w-20">작성</button>
                                    <button className="btn btn-sm btn-outline-primary w-20 ml-2">관리</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="form-check-input" type="checkbox" value="" />
                                </td>
                                <td className="text-slate-300 flex"><img src={GoogleIco} alt="구글아이콘" className="mr-2" />Google</td>
                                <td>mahamaha</td>
                                <td>NICONICO</td>
                                <td>
                                    <p className="text-xs">010-1234-1234</p>
                                    <p className="text-xs">abcd@email.com</p>
                                </td>
                                <td className="text-slate-300">2023/09/07</td>
                                <td>01</td>
                                <td>
                                    <button className="btn btn-sm btn-primary w-20">작성</button>
                                    <button className="btn btn-sm btn-outline-primary w-20 ml-2">관리</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="form-check-input" type="checkbox" value="" />
                                </td>
                                <td className="text-slate-300 flex"><img src={KakaoIco} alt="카카오아이콘" className="mr-2" />Kakao</td>
                                <td>Tayo</td>
                                <td>NARUTO</td>
                                <td>
                                    <p className="text-xs">010-1234-1234</p>
                                    <p className="text-xs">abcd@email.com</p>
                                </td>
                                <td className="text-slate-300">2023/09/07</td>
                                <td>50</td>
                                <td>
                                    <button className="btn btn-sm btn-primary w-20">작성</button>
                                    <button className="btn btn-sm btn-outline-primary w-20 ml-2">관리</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="form-check-input" type="checkbox" value="" />
                                </td>
                                <td className="text-slate-300 flex"><img src={LineIco} alt="라인아이콘" className="mr-2" />Line</td>
                                <td>Sony1</td>
                                <td>다나카</td>
                                <td>
                                    <p className="text-xs">010-1234-1234</p>
                                    <p className="text-xs">abcd@email.com</p>
                                </td>
                                <td className="text-slate-300">2023/09/07</td>
                                <td>10</td>
                                <td>
                                    <button className="btn btn-sm btn-primary w-20">작성</button>
                                    <button className="btn btn-sm btn-outline-primary w-20 ml-2">관리</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="form-check-input" type="checkbox" value="" />
                                </td>
                                <td className="text-slate-300 flex"><img src={LineIco} alt="라인아이콘" className="mr-2" />Line</td>
                                <td>Sony1</td>
                                <td>다나카</td>
                                <td>
                                    <p className="text-xs">010-1234-1234</p>
                                    <p className="text-xs">abcd@email.com</p>
                                </td>
                                <td className="text-slate-300">2023/09/07</td>
                                <td>10</td>
                                <td>
                                    <button className="btn btn-sm btn-primary w-20">작성</button>
                                    <button className="btn btn-sm btn-outline-primary w-20 ml-2">관리</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="form-check-input" type="checkbox" value="" />
                                </td>
                                <td className="text-slate-300 flex"><img src={LineIco} alt="라인아이콘" className="mr-2" />Line</td>
                                <td>Sony1</td>
                                <td>다나카</td>
                                <td>
                                    <p className="text-xs">010-1234-1234</p>
                                    <p className="text-xs">abcd@email.com</p>
                                </td>
                                <td className="text-slate-300">2023/09/07</td>
                                <td>10</td>
                                <td>
                                    <button className="btn btn-sm btn-primary w-20">작성</button>
                                    <button className="btn btn-sm btn-outline-primary w-20 ml-2">관리</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="form-check-input" type="checkbox" value="" />
                                </td>
                                <td className="text-slate-300 flex"><img src={GoogleIco} alt="구글아이콘" className="mr-2" />Google</td>
                                <td>mahamaha</td>
                                <td>NICONICO</td>
                                <td>
                                    <p className="text-xs">010-1234-1234</p>
                                    <p className="text-xs">abcd@email.com</p>
                                </td>
                                <td className="text-slate-300">2023/09/07</td>
                                <td>01</td>
                                <td>
                                    <button className="btn btn-sm btn-primary w-20">작성</button>
                                    <button className="btn btn-sm btn-outline-primary w-20 ml-2">관리</button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pagination-wrap flex space-between">
                <div className="left-btn">
                    <button className="btn btn-sm btn-outline-primary">
                        <Lucide icon="ArrowLeft" />
                        Previous
                    </button>
                </div>
                <div className="">
                    <nav className="w-full sm:w-auto sm:mr-auto">
                        <ul className="pagination">
                            <li className="page-item active">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    ...
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    9
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="right-btn">
                    <button className="btn btn-sm btn-outline-primary active">
                        Next
                        <Lucide icon="ArrowRight" />
                    </button>
                </div>
            </div>
        </div>

    </>
);
};
export default JobSeekerMng ;
