import axios from "axios";
import { sereverAPI } from "../../lib/config";
import { Member } from "../../lib/types/member";

class MemberService {
    private readonly path: string;

    constructor() {
        this.path = sereverAPI;
    }

    public async getTopUsers(): Promise<Member[]> {
        try {
            const url = this.path + "/member/top-users";
            const result = await axios.post(url);

            return result.data;
        } catch (error) {
            console.log("Error, getTopUsers:", error);
            throw error
        }
    }
}

export default MemberService;