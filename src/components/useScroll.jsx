import { useEffect } from "react";
import axios from "axios";
export default function useScroll(query, pageNumber) {
    useEffect(() => {
        axios()
    }, [query, pageNumber])
    return <div></div>;
}
