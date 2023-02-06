import {Modal, ModalBody,} from "@/base-components";
import {useState} from "react";

function PasswordChange() {
    const handleClick2 = () => {
        setIsActive3(current => !current);
        setIsActive2(current => !current);
    }
    const [passwordChangeModal, passwordChange] = useState(false);

return (
<>
<div className="sign">
        <div className="box-type-default">
            <div className="p-5 border-b border-slate-200/60 text-sm">
                비밀번호 변경
            </div>
            <div className="cont-wrap p-10">
                <div className="form p-5 bg-lb">
                    <div>
                        <label htmlFor="vertical-form-1" className="form-label mb-2">기존 비밀번호<span className="import ml-1">*</span></label>
                        <input id="vertical-form-1" type="text" className="form-control" placeholder="비민번호 입력"/>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="vertical-form-1" className="form-label mb-2">신규 비밀번호<span className="import ml-1">*</span></label>
                        <input id="vertical-form-1" type="text" className="form-control" placeholder="비민번호 입력"/>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="vertical-form-2" className="form-label mb-2">비밀번호 확인<span className="import ml-1">*</span></label>
                        <input id="vertical-form-2" type="text" className="form-control" placeholder="비밀번호 재입력"/>
                    </div>
                    <button type="button" className="btn btn-primary w-full mt-10" onClick={() => {passwordChange(true);}}>변경</button>
                </div>
            </div>
        </div>
    </div>
    
    {/* 비밀번호 변경 확인 */}
    <Modal
        show={passwordChangeModal}
        onHidden={() => {
            passwordChange(false);
        }}
    >
        <ModalBody className="p-10 text-center">
            <div className="modal-tit">비밀번호 형식이 맞지 않습니다.</div>
            <div className="modal-subtit">
                8~16자 영문, 숫자, 특수문자 3가지를 조합하여 비밀번호를<br/>
                설정하여 주세요.
            </div>
            <div className="flex flex-end gap-3">
                <a
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                        passwordChange(false);
                        handleClick2(true);
                    }}
                >
                    확인
                </a>
            </div>
        </ModalBody>
    </Modal>
</>
);
}

export default PasswordChange;