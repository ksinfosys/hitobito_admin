import {
    Lucide,
    Modal,
    ModalHeader,
    ModalBody,

} from "@/base-components";
import { useState, useEffect } from "react";

import Search from "@/assets/images/search.svg";



const PointCorpMng = () => {
    const [pointSelect, setpointSelect] = useState(false);


    return (
        <>
            <div id="business" className="corp-mng orange">
                <div className="grid grid-cols-12 gap-6 mt-8 box-type-default">
                    <div className="col-span-12 p-5 bg-box-title text-sm">
                        기업 포인트 관리
                    </div>
                    <div className="col-span-12 list-top flex flex-end items-center px-5">
                        <div className="flex gap-2">
                            <select className="form-select w-32">
                                <option>기업명</option>
                                <option>111</option>
                                <option>222</option>
                            </select>
                            <div className="search-box relative text-slate-50,000 P0 w-80">
                                <input type="text" className="form-control" placeholder="검색어를 입력 하세요." />
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
                                    <th className="whitespace-nowrap text-sm">아이디</th>
                                    <th className="whitespace-nowrap text-sm">기업명</th>
                                    <th className="whitespace-nowrap text-sm">이메일/휴대폰번호</th>
                                    <th className="whitespace-nowrap text-sm">최종 포인트 변경일</th>
                                    <th className="whitespace-nowrap text-sm">현재 포인트</th>
                                    <th className="whitespace-nowrap text-sm"></th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="" />
                                    </td>
                                    <td>Sony1</td>
                                    <td>다나카</td>
                                    <td>
                                        <p className="text-xs">010-1234-1234</p>
                                        <p className="text-xs">abcd@email.com</p>
                                    </td>
                                    <td className="text-slate-300">2023/09/07</td>
                                    <td>20,000 P</td>
                                    <td>
                                        <button className="btn btn-sm btn-pending w-20" onClick={() => { setpointSelect(true); }}>포인트변경</button>
                                        <button className="btn btn-sm btn-outline-pending w-20 ml-2">관리</button>
                                        <button className="btn btn-sm btn-orange-type1 w-20 ml-2">이력</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="" />
                                    </td>
                                    <td>mahamaha</td>
                                    <td>NICONICO</td>
                                    <td>
                                        <p className="text-xs">010-1234-1234</p>
                                        <p className="text-xs">abcd@email.com</p>
                                    </td>
                                    <td className="text-slate-300">2023/09/07</td>
                                    <td>30,000 P</td>
                                    <td>
                                        <button className="btn btn-sm btn-pending w-20" onClick={() => { setpointSelect(true); }}>포인트변경</button>
                                        <button className="btn btn-sm btn-outline-pending w-20 ml-2">관리</button>
                                        <button className="btn btn-sm btn-orange-type1 w-20 ml-2">이력</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="" />
                                    </td>
                                    <td>Tayo</td>
                                    <td>NARUTO</td>
                                    <td>
                                        <p className="text-xs">010-1234-1234</p>
                                        <p className="text-xs">abcd@email.com</p>
                                    </td>
                                    <td className="text-slate-300">2023/09/07</td>
                                    <td>50,000 P</td>
                                    <td>
                                        <button className="btn btn-sm btn-pending w-20" onClick={() => { setpointSelect(true); }}>포인트변경</button>
                                        <button className="btn btn-sm btn-outline-pending w-20 ml-2">관리</button>
                                        <button className="btn btn-sm btn-orange-type1 w-20 ml-2">이력</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="" />
                                    </td>
                                    <td>mahamaha</td>
                                    <td>NICONICO</td>
                                    <td>
                                        <p className="text-xs">010-1234-1234</p>
                                        <p className="text-xs">abcd@email.com</p>
                                    </td>
                                    <td className="text-slate-300">2023/09/07</td>
                                    <td>30,000 P</td>
                                    <td>
                                        <button className="btn btn-sm btn-pending w-20" onClick={() => { setpointSelect(true); }}>포인트변경</button>
                                        <button className="btn btn-sm btn-outline-pending w-20 ml-2">관리</button>
                                        <button className="btn btn-sm btn-orange-type1 w-20 ml-2">이력</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="" />
                                    </td>
                                    <td>mahamaha</td>
                                    <td>NICONICO</td>
                                    <td>
                                        <p className="text-xs">010-1234-1234</p>
                                        <p className="text-xs">abcd@email.com</p>
                                    </td>
                                    <td className="text-slate-300">2023/09/07</td>
                                    <td>30,000 P</td>
                                    <td>
                                        <button className="btn btn-sm btn-pending w-20" onClick={() => { setpointSelect(true); }}>포인트변경</button>
                                        <button className="btn btn-sm btn-outline-pending w-20 ml-2">관리</button>
                                        <button className="btn btn-sm btn-orange-type1 w-20 ml-2">이력</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="" />
                                    </td>
                                    <td>Tayo</td>
                                    <td>NARUTO</td>
                                    <td>
                                        <p className="text-xs">010-1234-1234</p>
                                        <p className="text-xs">abcd@email.com</p>
                                    </td>
                                    <td className="text-slate-300">2023/09/07</td>
                                    <td>50,000 P</td>
                                    <td>
                                        <button className="btn btn-sm btn-pending w-20" onClick={() => { setpointSelect(true); }}>포인트변경</button>
                                        <button className="btn btn-sm btn-outline-pending w-20 ml-2">관리</button>
                                        <button className="btn btn-sm btn-orange-type1 w-20 ml-2">이력</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="" />
                                    </td>
                                    <td>Sony1</td>
                                    <td>다나카</td>
                                    <td>
                                        <p className="text-xs">010-1234-1234</p>
                                        <p className="text-xs">abcd@email.com</p>
                                    </td>
                                    <td className="text-slate-300">2023/09/07</td>
                                    <td>20,000 P</td>
                                    <td>
                                        <button className="btn btn-sm btn-pending w-20" onClick={() => { setpointSelect(true); }}>포인트변경</button>
                                        <button className="btn btn-sm btn-outline-pending w-20 ml-2">관리</button>
                                        <button className="btn btn-sm btn-orange-type1 w-20 ml-2">이력</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="" />
                                    </td>
                                    <td>Sony1</td>
                                    <td>다나카</td>
                                    <td>
                                        <p className="text-xs">010-1234-1234</p>
                                        <p className="text-xs">abcd@email.com</p>
                                    </td>
                                    <td className="text-slate-300">2023/09/07</td>
                                    <td>10,000 P</td>
                                    <td>
                                        <button className="btn btn-sm btn-pending w-20" onClick={() => { setpointSelect(true); }}>포인트변경</button>
                                        <button className="btn btn-sm btn-outline-pending w-20 ml-2">관리</button>
                                        <button className="btn btn-sm btn-orange-type1 w-20 ml-2">이력</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="" />
                                    </td>
                                    <td>Sony1</td>
                                    <td>다나카</td>
                                    <td>
                                        <p className="text-xs">010-1234-1234</p>
                                        <p className="text-xs">abcd@email.com</p>
                                    </td>
                                    <td className="text-slate-300">2023/09/07</td>
                                    <td>20,000 P</td>
                                    <td>
                                        <button className="btn btn-sm btn-pending w-20" onClick={() => { setpointSelect(true); }}>포인트변경</button>
                                        <button className="btn btn-sm btn-outline-pending w-20 ml-2">관리</button>
                                        <button className="btn btn-sm btn-orange-type1 w-20 ml-2">이력</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="" />
                                    </td>
                                    <td>mahamaha</td>
                                    <td>NICONICO</td>
                                    <td>
                                        <p className="text-xs">010-1234-1234</p>
                                        <p className="text-xs">abcd@email.com</p>
                                    </td>
                                    <td className="text-slate-300">2023/09/07</td>
                                    <td>30,000 P</td>
                                    <td>
                                        <button className="btn btn-sm btn-pending w-20" onClick={() => { setpointSelect(true); }}>포인트변경</button>
                                        <button className="btn btn-sm btn-outline-pending w-20 ml-2">관리</button>
                                        <button className="btn btn-sm btn-orange-type1 w-20 ml-2">이력</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pagination-wrap orange flex space-between">
                    <div className="left-btn">
                        <button className="btn btn-sm btn-outline-pending">
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
                        <button className="btn btn-sm btn-outline-pending active">
                            Next
                            <Lucide icon="ArrowRight" />
                        </button>
                    </div>
                </div>
            </div>
            {/* 메시지 내용 */}
            <Modal
                size="modal-medium-sm point-change-modal"
                backdrop="static"
                show={pointSelect}
                onHidden={() => { setpointSelect(false); }}>
                <a onClick={() => { setpointSelect(false); }} className="absolute right-0 top-0 mt-3 mr-3" href="#">
                    <Lucide icon="X" className="w-5 h-5 text-slate-400" />
                </a>
                <ModalHeader className="flex-col p-5">
                    <h2 className="font-bold text-base mr-auto pb-3 border-b w-full">
                        <span className="text-slate-400 font-normal mr-2 inline-block w-24">대상자</span>
                        다나카
                    </h2>
                </ModalHeader>
                <ModalBody className="p-5">
                    <div className="flex gap-4">
                        <input type="text" className="form-control h-48" placeholder="기업명을 입력해 주세요 " />
                        <button className="btn btn-outline-secondary w-40 h-48 btn-search">검색</button>
                    </div>
                    <div className="input-change-point">
                        <input type="text" className="form-control" placeholder="변경할 포인트 입력 (예 : -1000 2000)" />
                    </div>
                    <textarea
                        className="form-control mt-4 h-20 resize-none"
                        rows="1"
                        placeholder="포인트 변경 사유를 입력하여 주시기 바랍니다. "
                    ></textarea>
                    <div className="flex flex-end">
                        <button className="btn btn-change">변경하기</button>
                    </div>

                </ModalBody>
            </Modal>
        </>
    );
};
export default PointCorpMng;
