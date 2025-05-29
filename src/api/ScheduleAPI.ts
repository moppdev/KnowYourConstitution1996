import axios from "axios";

// Declare a new base Axios instance
const apiBase = axios.create({
    baseURL: "https://constitution1996.runasp.net/api/v1",
    timeout: 1000
});

// export default function getAmendments()
// {
//     apiBase.get("/amendments").then(
//         (response) => {
//             return response;
//         }
//     );
// }