import {
    Lucide,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownContent,
    DropdownItem
} from "@/base-components";
import { useEffect, useState } from 'react';
import $ from 'jquery'

import PersonIcon from "@/assets/images/person-icon.png";
import MinusGrayBtn from "@/assets/images/minus-gray-btn.svg";
import PlusGrayBtn from "@/assets/images/plus-gray-btn.svg";


const DashboardListBusiness = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
        setIsActive3(current => !current);
    }
    const handleClick2 = () => {
        setIsActive3(current => !current);
        setIsActive2(current => !current);
    }

    const [pointRequestModal, setpointRequestModal] = useState(false);
    const [reportRequestModal1, setreportRequestModal1] = useState(false);
    const [reportRequestModal, setreportRequestModal] = useState(false);
    const names = ['JAVA', 'JAVA', 'JAVA', 'JAVA','Spring','Spring','Spring','Spring','Spring','Spring','Spring'];
    const buttonList = names.map((name, index) => <button className="btn btn-lang orange" key={index}>{name} </button>)

    return (
        <>
            <div className="dashboard-cont-cont flex flex-col">
                <div className="cont-top flex space-between items-center">
                    <div className="dash-cont-cont1 flex items-center">
                        <div className="form-check dash-cont1-tit">
                            <input id="vertical-form-4" className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label flex items-center gap-2" htmlFor="vertical-form-4">
                                <img src={PersonIcon} alt="" />
                                <div>홍길동</div>
                            </label>
                        </div>
                    </div>
                    <div className="dash-cont-cont3 flex">
                        <div className="minus-plus-wrap flex items-center">
                            <button className="minus-gray-btn">
                                <img src={MinusGrayBtn} alt="" />
                            </button>
                            <div className="number-div">
                                1
                            </div>
                            <button className="plus-gray-btn">
                                <img src={PlusGrayBtn} alt="" />
                            </button>
                        </div>
                        <button className="btn btn-sm btn-business">
                            의뢰
                        </button>
                    </div>
                </div>
                <div className="cont-btm">
                    <div className="cont-btm-btn orange">
                        {buttonList}
                    </div>
                    <div className="cont-btm-arrow">
                        <button type="button">
                            <Lucide icon="ChevronDown" />
                        </button>
                    </div>
                </div>
            </div>
            <Modal className="point-request-modal"
                show={pointRequestModal}
                onHidden={() => {
                    setpointRequestModal(false);
                }}
            >
                <ModalBody className="p-10 text-center">
                    <div className="modal-tit">포인트 지급 요청</div>
                    <div className="modal-subtit">
                        면접 종료 후에 포인트 지급 신청을 할 수있습니다.
                        지급이 늦어지는 경우는 기업에 메시지를 보내주세요
                    </div>
                    <div className="flex flex-end gap-3">
                        <a
                            href="#"
                            className="btn btn-primary"
                            onClick={() => {
                                setpointRequestModal(false);
                                handleClick2(true);
                            }}
                        >
                            확인
                        </a>
                        <a
                            href="#"
                            className="btn btn-outline-secondary"
                            onClick={() => {
                                setpointRequestModal(!pointRequestModal);
                            }}
                        >
                            취소
                        </a>
                    </div>
                    {/* END: Toggle Modal Toggle */}
                </ModalBody>
            </Modal>
            <Modal
                show={reportRequestModal1}
                onHidden={() => {
                    setreportRequestModal1(false);
                }}
            >
                <ModalHeader>
                    <div className="flex space-between items-center w-full">
                        <h2 className="modal-tit">
                            신고
                        </h2>
                        <button className="">
                            <Lucide icon="X" className="w-4 h-4" />
                        </button>
                    </div>
                </ModalHeader>
                <ModalBody className="">
                    <div className="flex gap-5">
                        <div className="modal-subtit2">
                            신고대상 : NIKE
                        </div>
                        <div className="modal-subtit2">
                            신고자 : DANAKA
                        </div>
                    </div>
                    <div className="report-radio-wrap mt-4">
                        <div className="form-check mt-2">
                            <input id="radio-switch-1" className="form-check-input" name="report-radio" type="radio" />
                            <label className="form-check-label" htmlFor="radio-switch-1">면담 승낙 후 연락해도 답변이 없음</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-2" className="form-check-input" name="report-radio" type="radio" />
                            <label className="form-check-label" htmlFor="radio-switch-2">약속한 일시에 면접이 이루어 지지 않음</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-3" className="form-check-input" name="report-radio" type="radio" />
                            <label className="form-check-label" htmlFor="radio-switch-3">면접 도중에 부적절한 언사나 차별적인 발언을 들음</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-4" className="form-check-input" name="report-radio" type="radio" />
                            <label className="form-check-label" htmlFor="radio-switch-4">면접을 제의한 기업과 다름</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-5" className="form-check-input" name="report-radio" type="radio" />
                            <label className="form-check-label" htmlFor="radio-switch-5">연봉 등 허위 노동 조건을 제시함</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-6" className="form-check-input" name="report-radio" type="radio" />
                            <label className="form-check-label" htmlFor="radio-switch-6">기업으로부터 금품을 요구받음</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-7" className="form-check-input" name="report-radio" type="radio" />
                            <label className="form-check-label" htmlFor="radio-switch-7">위법행위를 행하는 기업</label>
                        </div>
                        <div className="form-check mt-2">
                            <input id="radio-switch-8" className="form-check-input" name="report-radio" type="radio" value="vertical-radio-daniel-craig" />
                            <label className="form-check-label" htmlFor="radio-switch-8">기타</label>
                        </div>
                    </div>
                    <textarea
                        className="form-control mt-4 h-20 resize-none"
                        rows="1"
                        placeholder="신고 이유를 구체적으로 기입해주세요."
                    ></textarea>
                    <div className="flex flex-end mt-4">
                        <a
                            href="#"
                            className="btn btn-primary btn-report"
                            onClick={() => {
                                setreportRequestModal(true);
                            }}
                        >
                            신고
                        </a>
                    </div>
                </ModalBody>
            </Modal>
            <Modal className="report-request-modal"
                show={reportRequestModal}
                onHidden={() => {
                    setreportRequestModal(false);
                }}
            >
                <ModalBody className="p-10 text-center">
                    <div className="modal-tit">신고를 완료하였습니다.</div>
                    <div className="modal-subtit">
                        정상적으로 신고접수가 완료되었습니다.
                        처리가 될때까지 기다려주세요.
                    </div>
                    <div className="flex flex-end gap-3">
                        <a
                            href="#"
                            className="btn btn-primary"
                            onClick={() => {
                                setreportRequestModal(false);
                                setreportRequestModal1(false);
                            }}
                        >
                            확인
                        </a>
                    </div>
                    {/* END: Toggle Modal Toggle */}
                </ModalBody>
            </Modal>
        </>
    );
};
export default DashboardListBusiness;
