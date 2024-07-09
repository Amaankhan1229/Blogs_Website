import React, { ReactNode, useContext, useEffect } from 'react'
import NavBar from './NavBar'
import { UserContext } from '../../Shared/library/Providers/UserProvider'


interface Props {
    children: ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
    const user = useContext(UserContext);

    useEffect(() => {
        user?.getMe()
    }, []);
    return (
        <>
            <NavBar/>
            <div className='container'>{children}</div>

        </>
    )
}

export default RootLayout