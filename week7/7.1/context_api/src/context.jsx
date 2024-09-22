import { createContext } from "react";

// Creating a context with a default value for count and setCount
export const CountContext = createContext({
    count: 0,             // default value for count
    setCount: () => {}    // default value for setCount as a no-op function
});
