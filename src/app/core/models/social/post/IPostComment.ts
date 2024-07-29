import { IUser } from "../../user/IUser";
import { ICommentCounts } from "./ICommentCounts";
import { IPost } from "./IPost";
import { IReacts } from "./IReacts";

export interface IPostComment extends IReacts,ICommentCounts{
    content: string,
    replys: IPostComment,
    user:IUser,
    post: IPost,
    image: string,
}