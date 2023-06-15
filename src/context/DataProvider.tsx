import { createContext, useState } from 'react';
import {IUserResponse} from "../interface/response";

const accountData = createContext<any>(null);

const AccountDataProvider = ({ children }:any) => {
    const [account, setAccount] = useState<IUserResponse>({ } as IUserResponse);

    return <accountData.Provider value={{ account, setAccount }}>{children}</accountData.Provider>;
};
export { accountData, AccountDataProvider };