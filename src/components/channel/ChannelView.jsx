import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactFlvPlayer } from "react-flv-player";  
import	{ChannelDescription} from "./ChannelDescription";
import { useChannelDetails } from "../../shared/hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import ChannelChat from '../settings/ChannelChat';

export const Stream = ({streamUrl}) => {
    retun(
        <div className="channel-video-container">
            <ReactFlvPlayer
                url={streamUrl}
                witdh ="100%"
                heigth ="100%"
            />
        </div>
    )
} 

export const ChannelView = ({getChannels}) =>{

    const {isFetching, getChannelDetails, channelDetails} = useChannelDetails();

    const {id} = useParams();

    useEffect(()=> {
        getChannelDetails(id)
    },[])

    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div className="channel-container">
            <div className="channel-video-description-section">
                {channelDetails.data.isOnline ? (
                    <Stream streamUrl={channelDetails.data.streamUrl}/>
                ) : (
                    <div className="channel-offline-placeholder">
                        <span>Channel is Offline</span>
                    </div>
                )}

                <ChannelDescription
                    channelId={channelDetails.data.id}
                    title={channelDetails.data.title}
                    description={channelDetails.data.description}
                    username={channelDetails.data.username}
                    getChannels={getChannels}
                />
            </div>

            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                {/* Tu contenido actual del canal */}
                </div>
                <ChannelChat channelId={channelDetails.data.id} />
            </div>
        </div>


    )
}