import { createContext, useState } from "react";



export let UserToken = createContext(null)

export function UserTokenProvider({ children }) {

    let [isLogin, setIsLogin] = useState(localStorage.getItem("UserToken"));



    return <UserToken.Provider value={{ isLogin, setIsLogin}}>
        {children}
    </UserToken.Provider>
}