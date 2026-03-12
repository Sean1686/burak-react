import { MemberStatus, Membertype } from "../enums/member.enum";

export interface Member {
    _id: string;
    memberType: Membertype;
    memberNick: string;
    memberStatus: MemberStatus;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDescription?: string;
    memberImage?: string;
    memberPoints: number;
    createdAt: Date;
    updatedAt: Date;
};

export interface MemberInput {
    memberType?: string;
    memberNick: string;
    memberStatus?: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDescription?: string;
    memberImage?: string;
    memberPoints?: number;
};

export interface LoginInput {
    memberNick: string;
    memberPassword: string;
};

export interface MemberUpdateInput {
    memberStatus?: MemberStatus;
    memberNick?: string;
    memberPhone?: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDescription?: string;
    memberImage?: string;
};