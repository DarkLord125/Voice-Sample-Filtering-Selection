import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_SERVER_DOMAIN;

/** Make API Requests */

/** get voice details */
export async function getallVoice(){
    try {
        const { data } = await axios.get(`/voice/all`);
        return { data };
    } catch (error) {
        return { error : "Couldn't get all voice data"}
    }
}