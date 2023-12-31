import React, { useContext, useEffect } from 'react'
import VideoSessionUi from './VideoSessionUi'
import { useDispatch, useSelector } from 'react-redux';
import VideoContext from '../../../videoSessionStore/video-session-context';
import { chatActions } from '../../../store/chat-slice';

const VideoSession = () =>
{
    const id = "testVideoCHat"

    const dispatch = useDispatch();
    const messages = useSelector(state => state.chat.messages[id]) || [];

    const submitTextMessage = (values, { resetForm }) =>
    {
        if (values.message.trim() === "") return
        const date = new Date();
        const time = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        const newMessage = {
            _id: Date.now().toLocaleString(),
            type: "text",
            isReply: false,
            date: time,
            from: "you",
            isSeen: false,
            message: values.message.trim(),
        }
        dispatch(chatActions.updateMessages({ id: id, message: newMessage }))
        resetForm();
    }
    const { call, callAccepted } = useContext(VideoContext);
    useEffect(() =>
    {
        console.log("useEffect")
        if(call.isReceivingCall){
            console.log("someone call u")
        }
    }, [call])
    return (
        <VideoSessionUi
            messages={messages}
            submitTextMessage={submitTextMessage}
        />
    )
}

export default VideoSession