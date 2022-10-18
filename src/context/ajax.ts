import history from "./history";

const defaultHeaders = {
    "content-type": "application/json",
    Accept: "application/json"
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const customFetch = (input: string, init?: RequestInit): Promise<any> => {
    init = init || {};
    init.headers = init.headers || {};
    init.headers = { ...init.headers, ...defaultHeaders };
    const fetchRes = fetch(input, init);
    return fetchRes
        .then((res) => {
            if (res.status >= 400) {
                if (res.status == 401) {
                    history.replace("/login");
                }
                throw new Error("Server responds with error!");
            }
            return res.json();
        })
        .catch((error) => {
            return Promise.reject(error?.message || "Server responds with error!");
        });
};
