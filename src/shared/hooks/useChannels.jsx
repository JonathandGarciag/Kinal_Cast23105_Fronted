import { useState } from "react";
import toast from "react-hot-toast";
import { getChannels as getChannelsRequest, getFollowedChannels } from "../../services";

export const useChannels = () => {

    const [ channels, setChannels ] = useState(null)

    const getChannels = async (isLogged = false) => {
        
        const ChannelsData = await getChannelsRequest()

        if(ChannelsData.error){
            return toast.error(
                ChannelsData.e?.response?.data || 'Ocurrio un error al leer los canales'
            )

            if (!isLogged) {
                return setChannels({
                    channels: ChannelsData.data.channels
                })
            }

            const followedChannels = await getFollowedChannels();

            if(followedChannelsData.error){
                return toast.error(
                    channels.e?.response?.data || 'Ocurrio un error al leer los canals que sigues'
                )
            }

            setChannels({
                channels: ChannelsData.data.channels,
                followedChannels: ChannelsData.data.channels.filter( channel =>
                    followedChannelsIsDat.data.followedChannels.includes(channel.id)
                )
            });

            return {
                getChannels,
                isFetching: !Boolean(channels),
                allChannels: channels?.channels,
                followedChannels: channels?.followedChannels
            }
        }
    }
}