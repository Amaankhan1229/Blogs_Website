import { ReactNode, useContext } from "react"
import { UserContext } from "../library/Providers/UserProvider"
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


interface IProps{
  children: ReactNode;
}


const ProtectedRoute: React.FC<IProps>= ({children}) => {

  const user= useContext(UserContext);

  const navigate =useNavigate();
  console.log(user);
  

  if(user?.user!==null)
    {

      
      return(
      <>{children}</>
      )
    }
    else
    {
      return (<>
      Please Login <Button onClick={()=>navigate("login")}>Go to Login</Button>
      </>
      )
    }

}

export default ProtectedRoute