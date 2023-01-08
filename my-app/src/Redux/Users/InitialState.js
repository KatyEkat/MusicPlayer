import { ACCESS_TOKEN } from "../../Consts/Backups";
import { parseJwt } from "../../Utils/Jwt";

const accessToken = localStorage.getItem(ACCESS_TOKEN)

export const USERS_INITIAL_STATES = {
    user: accessToken ? parseJwt(accessToken) : {}
}