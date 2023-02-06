


const SkillMng3 = () => {


    return (
        <>
            <div id="business" className="skill-mng">
                <div className="grid grid-cols-12 gap-6 mt-8 box-type-default">
                    <div className="col-span-12 p-5 bg-box-title text-sm">
                        스킬코드 관리
                    </div>
                    <div className="col-span-12 w-full items-center px-5 mb-10">
                        <div className="search-box-bg relative text-slate-500 flex items-center gap-4 space-between">
                            <div>SKILL_CODE_MST.xls</div>
                            <button className="btn btn-secondary w-40 h-48">검증</button>
                        </div>
                        <div className="col-span-12 px-5 error-tit navy mb-6 pb-4 border-b">
                            검증결과 파일에 문제가 있습니다.
                        </div>
                        <div className="code-type-sel">
                            <div className="code-type-tit">
                                코드유형을 선택해 주세요.
                            </div>
                            <div className="code-type-cont flex space-between">
                                <select className="form-select h-48 w-80">
                                    <option>코드유형</option>
                                    <option>111</option>
                                    <option>222</option>
                                </select>
                                <div className="flex items-center gap-2">
                                    <button className="btn btn-primary w-40 h-48">등록</button>
                                    <button className="btn btn-blue-type1 w-40 h-48">다운로드</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};
export default SkillMng3;
