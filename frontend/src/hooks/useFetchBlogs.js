import axios from "axios";
import { useQuery } from "@tanstack/react-query"

export const useFetchBlog = () => {
    return useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/api/v1/blogs")
            return res.data
        }
    })
}