import { userRoutes } from "react-router-dom";
import { ToastBar } from "react-hot-toast";
import routes from "./routes";

export const App = () =>{

  let element = userRoutes(routes);

  return (
    <>
      {element}
      <Toaster
        position="bottom-right"
        reverseOrden={false}
      />
    </>
  )
} 