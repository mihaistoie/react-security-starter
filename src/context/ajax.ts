import history from "./history";

const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json"
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const customFetch = async (input: string, init?: RequestInit): Promise<any> => {
    init = init || {};
    init.headers = init.headers || {};
    init.headers = { ...init.headers, ...defaultHeaders };
    const fetchRes = await fetch(input, init);
    if (fetchRes.status >= 400) {
        if (fetchRes.status === 401) {
            history.replace("/login");
            return null;
        }
        throw new Error("Server responds with error!");
    }
    const responseText = await fetchRes.text();
    try {
        const jsonData = JSON.parse(responseText);
        return jsonData;
    } catch {
        return { $text: responseText };
    }
};
