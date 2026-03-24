import axios from "axios";
import { sereverAPI } from "../../lib/config";
import { Member, MemberInput } from "../../lib/types/member";

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

    public async getRestaurant(): Promise<Member> {
        try{
            const url = this.path + "/member/restaurant";
            const result = axios.get(url);
            
            return (await result).data
        }catch(err) {
            console.log("getRestaurant:", err)
            throw err
        }
    }

    public async signup(input: MemberInput): Promise<Member> {
        try{
            const url = this.path + "/member/signup";
            const result = await axios.post(url, input, {withCredentials: true});
            console.log("signup:", result);

            const member: Member = result.data.member;
            console.log("member:", member);
            localStorage.setItem("memberData", JSON.stringify(member));

            return member;
        } catch(err) {
            console.log("signup", err);
            throw err;
        }
    }
}

export default MemberService;