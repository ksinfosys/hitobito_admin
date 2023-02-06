


const SkillMng2 = () => {


    return (
        <>
            <div id="business" className="skill-mng">
                <div className="grid grid-cols-12 gap-6 mt-8 box-type-default">
                    <div className="col-span-12 p-5 bg-box-title text-sm">
                        스킬코드 관리
                    </div>
                    <div className="col-span-12 w-full items-center px-5 mb-10">
                        <div className="search-box-bg relative text-slate-500 flex items-center gap-4">
                            <input type="text" className="form-control h-48" value="SKILL_CODE_MST.xls" />
                            <button className="btn btn-primary w-40 h-48">검증</button>
                        </div>
                        <div className="col-span-12 px-5 error-tit navy mb-10">
                            검증결과 파일에 문제가 있습니다.
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};
export default SkillMng2;
