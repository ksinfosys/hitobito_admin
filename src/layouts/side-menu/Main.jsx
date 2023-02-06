import { Transition } from "react-transition-group";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useMatch, useNavigate } from "react-router-dom";
import { helper as $h } from "@/utils";
import { sideMenu as useSideMenuStore } from "@/stores/side-menu";
import { useRecoilValue } from "recoil";
import { linkTo, nestedMenu, enter, leave } from "./index";
import {
    Lucide, Modal, ModalHeader, ModalBody, ModalFooter, Litepicker, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownContent,
    DropdownItem,
    DropdownHeader,
    DropdownDivider,
} from "@/base-components";
import logoUrl from "@/assets/images/logo.svg";
import UserIcon from "@/assets/images/user.svg";
import classnames from "classnames";
import SideMenuTooltip from "@/components/side-menu-tooltip/Main";
import $ from "jquery"

function Main() {
    const navigate = useNavigate();
    const location = useLocation();
    const [formattedMenu, setFormattedMenu] = useState([]);
    const sideMenuStore = useRecoilValue(useSideMenuStore);
    const ishome = useMatch("/");
    const sideMenu = () => nestedMenu($h.toRaw(sideMenuStore.menu), location);
    const [modifyModal, setModifyModal] = useState(false);
    const [password, setPassword] = useState(false);
    const [notifiModal, setNotifiModal] = useState(false);
    const [notifyrange, setNotifyrange] = useState("");
    const [dashboardModal, setDashboardModal] = useState(false);

    useEffect(() => {
        dom("body").removeClass("error-page").removeClass("login").addClass("main");
        setFormattedMenu(sideMenu());
    }, [sideMenuStore, location.pathname]);

    //사이드메뉴
    const [sidesMenu, setSidesMenu] = useState(false);




    return (
        <div>
            <div>
                <div className="top_header">
                    <div className="flex justify-between items-center top_header-inner">

                        <div className="flex items-center">
                            <Link to="/">
                                <img src={logoUrl} alt="" />
                            </Link>
                        </div>

                        <div className="flex items-center topLink_menu gap-1">
                            <div className="flex items-center topuser-menu">
                                <div className="topuser-item noborder">
                                    관리자명
                                </div>
                            </div>
                            <Dropdown className="orange-noti-user">
                                <DropdownToggle
                                    tag="div"
                                    role="button"
                                    className=""
                                >
                                    <img src={UserIcon} alt="" />
                                    <div className="number-noti blue">100</div>
                                </DropdownToggle>
                                <DropdownMenu className="notification-content pt-2">
                                    <DropdownContent tag="div" className="notification-content__box">
                                        <div className="noti-tit-wrap border-b border-slate-200/60 flex space-between items-center pb-4">
                                            <div className="noti-tit">
                                                알림
                                            </div>
                                            <div className="noti-tit-cont flex gap-2">
                                                <button className="btn btn-sm btn-blue-type1">
                                                    모두읽음
                                                </button>
                                                <button className="btn btn-sm btn-blue-type2">
                                                    전체삭제
                                                </button>
                                            </div>
                                        </div>
                                        <div className="noti-cont-wrap">
                                            <div className="noti-cont-box flex items-center space-between">
                                                <div className="noti-cont-cont">
                                                    <button className="flex flex-col items-start flex-start">

                                                        <div className="noti-cont-tit">
                                                            면접 제의
                                                        </div>
                                                        <div className="noti-cont-subtit">
                                                            SONY (기업명)의 면접제의가 도착했습니다. <br />
                                                            지금 확인해 주세요.
                                                        </div>
                                                        <div className="noti-cont-date">
                                                            YYYY.MM.DD
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="noti-cont-btn">
                                                    <button>
                                                        <Lucide icon="X" />
                                                    </button>

                                                </div>
                                            </div>
                                            <div className="noti-cont-box flex items-center space-between">
                                                <div className="noti-cont-cont">
                                                    <button className="flex flex-col items-start flex-start">

                                                        <div className="noti-cont-tit">
                                                            면접 제의
                                                        </div>
                                                        <div className="noti-cont-subtit">
                                                            SONY (기업명)의 면접제의가 도착했습니다. <br />
                                                            지금 확인해 주세요.
                                                        </div>
                                                        <div className="noti-cont-date">
                                                            YYYY.MM.DD
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="noti-cont-btn">
                                                    <button>
                                                        <Lucide icon="X" />
                                                    </button>

                                                </div>
                                            </div>
                                            <div className="noti-cont-box flex items-center space-between">
                                                <div className="noti-cont-cont">
                                                    <button className="flex flex-col items-start flex-start">

                                                        <div className="noti-cont-tit">
                                                            면접 제의
                                                        </div>
                                                        <div className="noti-cont-subtit">
                                                            SONY (기업명)의 면접제의가 도착했습니다. <br />
                                                            지금 확인해 주세요.
                                                        </div>
                                                        <div className="noti-cont-date">
                                                            YYYY.MM.DD
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="noti-cont-btn">
                                                    <button>
                                                        <Lucide icon="X" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="noti-cont-box flex items-center space-between">
                                                <div className="noti-cont-cont">
                                                    <button className="flex flex-col items-start flex-start">

                                                        <div className="noti-cont-tit">
                                                            면접 제의
                                                        </div>
                                                        <div className="noti-cont-subtit">
                                                            SONY (기업명)의 면접제의가 도착했습니다. <br />
                                                            지금 확인해 주세요.
                                                        </div>
                                                        <div className="noti-cont-date">
                                                            YYYY.MM.DD
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="noti-cont-btn">
                                                    <button>
                                                        <Lucide icon="X" />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="noti-btm">
                                            <div className="flex flex-center mb-2">
                                                최근 30일 이내 알림만 확인할 수 있습니다.
                                            </div>
                                            <button className="btn btn-sm btn-primary w-full btn-seeall">
                                                알림 전체보기
                                            </button>
                                        </div>
                                    </DropdownContent>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>


            <div className="main-content flex mt-0">
                {/* BEGIN: Side Menu */}
                <nav className={sidesMenu ? "side-nav on shrink-0 tr" : "side-nav shrink-0 tr"}>
                    <ul>
                        {/* BEGIN: First Child */}
                        {formattedMenu.map((menu, menuKey) =>
                            menu == "devider" ? (
                                <li className="side-nav__devider my-6" key={menu + menuKey}></li>
                            ) : (
                                <li key={menu + menuKey}>
                                    <SideMenuTooltip
                                        tag="a"
                                        content={menu.title}
                                        href={menu.subMenu ? "#" : menu.pathname}
                                        className={classnames({
                                            "side-menu": true,
                                            "side-menu--active": menu.active,
                                            "side-menu--open": menu.activeDropdown,
                                        })}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            linkTo(menu, navigate);
                                            setFormattedMenu($h.toRaw(formattedMenu));
                                        }}
                                    >
                                        {/* <div className="side-menu__icon">
                                            <Lucide icon={menu.icon} />
                                        </div> */}
                                        <div className="side-menu__title">
                                            {menu.title}
                                            {menu.subMenu && (
                                                <div
                                                    className={classnames({
                                                        "side-menu__sub-icon": true,
                                                        "transform rotate-180": menu.activeDropdown,
                                                    })}
                                                >
                                                    <Lucide icon="ChevronDown" />
                                                </div>
                                            )}
                                        </div>
                                    </SideMenuTooltip>
                                    {/* BEGIN: Second Child */}
                                    {menu.subMenu && (
                                        <Transition in={menu.activeDropdown} onEnter={enter} onExit={leave} timeout={300} >
                                            <ul
                                                className={classnames({
                                                    "side-menu__sub-open": menu.activeDropdown,
                                                })}
                                            >
                                                {menu.subMenu.map((subMenu, subMenuKey) => (
                                                    <li key={subMenuKey}>
                                                        <SideMenuTooltip
                                                            tag="a"
                                                            content={subMenu.title}
                                                            href={subMenu.subMenu ? "#" : subMenu.pathname}
                                                            className={classnames({
                                                                "side-menu": true,
                                                                "side-menu--active": subMenu.active,
                                                            })}
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                linkTo(subMenu, navigate);
                                                                setFormattedMenu($h.toRaw(formattedMenu));
                                                            }}
                                                        >
                                                            {/* <div className={sidesMenu ? "side-menu__icon" : "side-menu__icon ml-3"}>
                                                                <Lucide icon={menu.icon} className="w-5 h-5" />
                                                            </div> */}
                                                            <div className="side-menu__title">
                                                                {subMenu.title}
                                                                {subMenu.subMenu && (
                                                                    <div
                                                                        className={classnames({
                                                                            "side-menu__sub-icon": true,
                                                                            "transform rotate-180": subMenu.activeDropdown,
                                                                        })}
                                                                    >
                                                                        <Lucide icon="ChevronDown" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </SideMenuTooltip>
                                                        {/* BEGIN: Third Child */}
                                                        {subMenu.subMenu && (
                                                            <Transition in={subMenu.activeDropdown} onEnter={enter} onExit={leave} timeout={300}>
                                                                <ul
                                                                    className={classnames({
                                                                        "side-menu__sub-open": subMenu.activeDropdown,
                                                                    })}
                                                                >
                                                                    {subMenu.subMenu.map((lastSubMenu, lastSubMenuKey) => (
                                                                        <li key={lastSubMenuKey}>
                                                                            <SideMenuTooltip
                                                                                tag="a"
                                                                                content={lastSubMenu.title}
                                                                                href={lastSubMenu.subMenu ? "#" : lastSubMenu.pathname}
                                                                                className={classnames({
                                                                                    "side-menu": true,
                                                                                    "side-menu--active": lastSubMenu.active,
                                                                                })}
                                                                                onClick={(event) => {
                                                                                    event.preventDefault();
                                                                                    linkTo(lastSubMenu, navigate);
                                                                                }}
                                                                            >
                                                                                <div className="side-menu__icon">
                                                                                    <Lucide icon="Zap" />
                                                                                </div>
                                                                                <div className="side-menu__title">{lastSubMenu.title}</div>
                                                                            </SideMenuTooltip>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </Transition>
                                                        )}
                                                        {/* END: Third Child */}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Transition>
                                    )}
                                    {/* END: Second Child */}
                                </li>
                            )
                        )}
                        {/* END: First Child */}
                    </ul>

                    <div className="side-ad-box flex flex-col gap-1">
                        <div className="flex items-center flex-center box">광고</div>
                        <div className="flex items-center flex-center box">광고</div>
                        <div className="flex items-center flex-center box">광고</div>
                    </div>
                </nav>
                {/* END: Side Menu */}
                {/* BEGIN: Content */}
                <div className="content">
                    <Outlet />
                </div>
                {/* END: Content */}
            </div>
        </div>
    );
}

export default Main;
