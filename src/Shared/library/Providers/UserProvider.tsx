import { auth } from "../../../Config/FireBaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { createContext, ReactNode, useState } from "react"

import { toast } from "react-toastify";
interface IUser {
    id: string,
    name: string,
    email: string
}

interface IUserContextType {
    user: IUser | null;
    getMe: () => void;
    registerUser: (email: string, password: string) => Promise<void>;
    loginUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => void;

}

export const UserContext = createContext<IUserContextType | undefined>(undefined);


interface Iprops {
    children: ReactNode;
}

const UserProvider: React.FC<Iprops> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);


    const registerUser = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
          toast.error("errorOccured")
        }
    }
    const loginUser = async (email: string, password: string) => {
        try {

            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response);
            setUser({
                email: response.user.email ? response.user.email : "",
                id: response.user.uid,
                name: response.user.displayName ? response.user.displayName : "",
            })
            console.log(user);

            localStorage.setItem("user", JSON.stringify({
                email: response.user.email ? response.user.email : "",
                id: response.user.uid,
                name: response.user.displayName ? response.user.displayName : "",
            }));

            // const accessToken = response.user.accessToken as string;

            // Cookies.set("accessToken", accessToken, { domain: "http://localhost:5173/", sameSite: "Lax", secure: false, path: "/" })
            // // Cookies.set("accessToken", accessToken, { domain: "http://localhost:5173/", path: "/", expires: 60, sameSite: "Lax", secure: false });
            // console.log(accessToken);


        } catch (error) {
         toast.error("errorOccured")
        }
    }

    const logoutUser = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    const getMe = () => {
        try {
            
            const resp = localStorage.getItem("user");
            console.log(resp);
            if (resp !== null) {
                const data = JSON.parse(resp);
                console.log(data);
                setUser({
                    email: data.email,
                    id: data.id,
                    name: data.name
                })
            }
            else {
                setUser(null)
            }
    

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <UserContext.Provider value={{ loginUser: loginUser, registerUser: registerUser,user: user, logoutUser: logoutUser, getMe: getMe }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider