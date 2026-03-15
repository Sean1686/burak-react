import { sereverAPI } from "../../lib/config";
import { Member, MemberInput } from "../../lib/types/member";
import axios from "axios"

class MemberService {
    private readonly path: string;

    constructor() {
        this.path = sereverAPI
    }

    public async getTopUsers(): Promise<Member[]> {
        try{
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("getTopUsers:", result);

      return result.data
        } catch (err) {
            console.log("Error, getTopUsers:", err);
            throw err;
        }
    }

}

export default MemberService;