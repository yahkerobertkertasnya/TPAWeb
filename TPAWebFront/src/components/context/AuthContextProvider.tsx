import { createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { User } from "../../../gql/graphql.ts";
import { GET_AUTH } from "../../../lib/query/user/getAuth.graphql.ts";
import { debouncedError } from "../../../controller/errorHandler.ts";

interface AuthContext {
    auth: User | null;
    loading: boolean;
    getUser: (() => Promise<void>) | null;
}

export const AuthContext = createContext<AuthContext>({
    auth: null,
    loading: false,
    getUser: null,
});
export default function AuthContextProvider({ children }: { children: JSX.Element }) {
    const { refetch, loading } = useQuery(GET_AUTH, {
        onCompleted: (data) => {
            setAuth(data.getAuth);
        },
        onError: debouncedError,
        skip: location.pathname == "",
    });
    const [auth, setAuth] = useState<User | null>(null);

    const getUser = async () => {
        await refetch()
            .then((data) => {
                setAuth(data.data.getAuth);
            })
            .catch(debouncedError);
    };

    useEffect(() => {
        getUser();
    }, []);

    if (loading) return <></>;

    return (
        <AuthContext.Provider value={{ auth, loading, getUser }}>
            <>{children}</>
        </AuthContext.Provider>
    );
}
