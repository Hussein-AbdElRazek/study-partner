import { IconBtn } from './IconBtn'
import classes from './styles/Navbar.module.css'
import { SearchBar } from './SearchBar'
import notificationIcon from '../../assets/icons/notification.svg'
import addFriendIcon from '../../assets/icons/addFriend.svg'
import { ProfileIcon } from './ProfileIcon'
import { Logo } from '../ui'
import { NavLink } from 'react-router-dom'
export const NavBar = ({ title }) =>
{

    return (
        <div
            className={classes.container}
        >
            <div
                className="center-y"
            >
                <Logo />
                <SearchBar />
            </div>
            <div
                className={classes.iconsGroup}
            >
                <IconBtn
                    img={notificationIcon}
                    component={NavLink}
                    to={title === "Notifications" ? "/" : "notifications"}
                />
                <IconBtn
                    img={addFriendIcon}
                    component={NavLink}
                    to={title === "Requests" ? "/" : "requests"}
                />
                <ProfileIcon />
            </div>
        </div>
    )
}
