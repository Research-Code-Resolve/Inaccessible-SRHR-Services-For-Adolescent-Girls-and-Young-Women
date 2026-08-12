import "./Header.css";
import { Menu, Bell, UserCircle } from "lucide-react";

function Header({
    onMenuClick,
    onNotificationClick,
    onProfileClick
}) {

    return (

        <header className="header">

            <button
                className="icon-button"
                onClick={onMenuClick}
            >
                <Menu size={22} />
            </button>

            <h2 className="header-title">

                ValeCare

            </h2>

            <div className="header-icons">

                <button
                    className="icon-button"
                    onClick={onNotificationClick}
                >
                    <Bell size={20} />
                </button>

                <button
                    className="icon-button"
                    onClick={onProfileClick}
                >
                    <UserCircle size={22} />
                </button>

            </div>

        </header>

    );

}

export default Header;