import { Route, Routes } from "react-router-dom";
import { Channels } from "../channel/Channels";

export const Content = ({channels}) => {
    return (
        <div>
            <Routes>
                <Route path="channels" element={<Channels channels={channels}/>}/>
            </Routes>
        </div>
    )
}