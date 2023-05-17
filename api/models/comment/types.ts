import {TBase, TData} from "~/api/types";
import {TUser} from "../user/types";

export type TCommentsData = TData & {
    data: TComment[]
};
export type TCommentData = TData & {
    data: TComment
};

export type TComment = TBase & {
    text: string;
    post_id?: number;
    user: TUser;
    children: TComment[];
};

export type CommentDto = {
    text: string;
    post_id?: number;
};

export type CommentParams = {
    post_id?: number;
};
