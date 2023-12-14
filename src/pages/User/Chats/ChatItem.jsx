import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Tooltip } from '@mui/material'
import avatarTest from '../../../assets/images/avatar.png'
import classes from './Chats.module.css';
import { useNavigate } from 'react-router-dom';
const ChatItem = ({ chatItemData }) =>
{
    const navigate = useNavigate();
    const openChat = () =>
    {
        navigate(`${chatItemData.userName}`)
    }
    return (
        <ListItem
            disablePadding
        >
            <ListItemButton
                onClick={openChat}
                margin={0}
                sx={{
                    "& .MuiTouchRipple-root": {
                        margin: "0 !important"
                    }
                }}
            >
                <ListItemAvatar>
                    <Avatar
                        src={avatarTest}
                    />
                </ListItemAvatar>
                <ListItemText
                    sx={{ "& span": { margin: "0 !important" } }}
                    primary={
                        <h6
                            className={classes.username}
                        >
                            {chatItemData.userName}
                        </h6>
                    }
                    secondary={
                        <Tooltip
                            title={`
                                ${chatItemData.lastMessage.from}: 
                                ${chatItemData.lastMessage.message}
                            `}
                        >
                            <p
                                className={classes.lastMessage}
                            >
                                {`
                                    ${chatItemData.lastMessage.from}: 
                                    ${chatItemData.lastMessage.message}
                                `}
                            </p>
                        </Tooltip>

                    }
                />
            </ListItemButton>
        </ListItem>
    )
}

export default ChatItem