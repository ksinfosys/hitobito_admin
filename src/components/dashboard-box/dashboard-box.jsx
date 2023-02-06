import imgSample from "@/assets/images/img-sample.png";



const DashboardBox = (props) => {

    return (
        <>
        <div className={props.name}>
            <div className="box-type2 px-4 py-4 mb-3 flex items-center">
                <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                    <img src={imgSample} alt="" />
                </div>
                <div className="ml-4 mr-auto">
                    <div className="font-medium box-tit">다나카</div>
                    <div className="text-slate-500 box-subtit text-xs mt-0.5">
                        ckckz@gmail.com
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default DashboardBox;
