import { PORT } from "../constant/api";
export const imageLoader = (link) => {
    let fullLink = `${PORT}/image?file=${link}`
    return fullLink
}