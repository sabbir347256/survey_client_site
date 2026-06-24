import { ClipboardList, Columns2, CreditCard, LayoutGrid, LogOut, Settings, TrendingUp,  X, Zap } from "lucide-react";
import { NavLink } from "react-router";

const SideBar = ({ isOpen, closeSidebar, isCollapsed, setIsCollapsed }) => {
    const menuItems = [
        { path: '/', label: 'Dashboard', icon: LayoutGrid },
        { path: '/my-surveys', label: 'My Surveys', icon: ClipboardList },
        { path: '/rewards', label: 'Rewards', icon: CreditCard },
        { path: '/insights', label: 'Insights', icon: TrendingUp },
    ];

    const bottomItems = [
        { path: '/settings', label: 'Settings', icon: Settings },
        { path: '/logout', label: 'Logout', icon: LogOut },
    ];

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 mx-2 mt-1 text-[14px] font-medium duration-200 group relative border-r-4 border-transparent ${isActive
            ? 'bg-[#E2F0FD] globalTextColor font-semibold globalBorderColor'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        } ${isCollapsed ? 'md:justify-center md:px-2 md:mx-1 md:border-l-0' : ''}`;
    return (
        <div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-950/20 z-40 md:hidden block"
                    onClick={closeSidebar}
                />
            )}

            <aside className={`fixed top-0 bottom-0 left-0 bg-white border-r border-gray-200 flex flex-col justify-between py-4 z-50 transition-all duration-300 ${isCollapsed ? 'md:w-20' : 'md:w-64'
                } ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0'}`}>

                <div className="flex flex-col gap-6 overflow-x-hidden relative">
                    <div className={`flex items-center justify-between px-6 ${isCollapsed ? 'md:px-4 mb-5 w-full md:justify-center' : ''}`}>
                        <div className={`transition-all duration-200 ${isCollapsed ? 'md:hidden' : 'block'}`}>
                            <h1 className="text-xl font-bold globalTextColor tracking-tight">SurveyPanel</h1>
                            <p className="text-[11px] text-gray-400 font-medium tracking-wide">Respondent Portal</p>
                        </div>

                        <button onClick={closeSidebar} className="md:hidden p-2 text-gray-400 hover:bg-gray-100 globalButtonRadius">
                            <X className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="hidden md:flex absolute right-4 top-1 p-1.5 globalMediumRadius bg-gray-50 w-12 text-gray-400 border border-gray-200 hover:bg-gray-100"
                        >
                            <Columns2 className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-0.5 px-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={linkClass}
                                    onClick={() => window.innerWidth < 768 && closeSidebar()}
                                    title={isCollapsed ? item.label : ""}
                                >
                                    {isActive => (
                                        <>
                                            {isCollapsed && isActive && (
                                                <div className="absolute left-0 top-0 bottom-0 w-1  rounded-r" />
                                            )}
                                            {Icon && <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'globalTextColor' : 'text-gray-400 group-hover:text-gray-600'}`} />}
                                            <span className={`${isCollapsed ? 'md:hidden' : 'block'} transition-all`}>
                                                {item.label}
                                            </span>
                                        </>
                                    )}
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex flex-col gap-1 px-2 overflow-x-hidden">
                    <div className={`px-4 my-2 ${isCollapsed ? 'md:px-2' : ''}`}>
                        <button className={`w-full globalBgColor text-white font-medium text-[14px] py-3 globalButtonRadius flex items-center justify-center gap-2 hover:bg-[#0096d1] transition-all duration-200 shadow-sm ${isCollapsed ? 'md:p-2' : ''}`}>
                            <Zap className="w-4 h-4 fill-current flex-shrink-0" />
                            <span className={`${isCollapsed ? 'md:hidden' : 'block'} whitespace-nowrap`}>Start Quick Survey</span>
                        </button>
                    </div>

                    <div className="mx-4 my-2 border-t border-gray-100"></div>

                    {bottomItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={linkClass}
                                title={isCollapsed ? item.label : ""}
                            >
                                {isActive => (
                                    <>
                                        {isCollapsed && isActive && (
                                            <div className="absolute left-0 top-0 bottom-0 w-1  rounded-r" />
                                        )}
                                        {Icon && <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />}
                                        <span className={`${isCollapsed ? 'md:hidden' : 'block'}`}>
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </div>
            </aside>
        </div>
    );
};

export default SideBar;