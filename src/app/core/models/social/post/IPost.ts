import { IReacts } from './IReacts';
import { IPostActivityOrFeeling } from './IPostActivityOrFeeling';
import { IPostCounts } from './IPostCounts';
import { IUser } from '../../user/IUser';
import { IPostComment } from './IPostComment';

export interface IPost extends IReacts, IPostCounts {
  feeling: IPostActivityOrFeeling;
  activity: IPostActivityOrFeeling;

  background?: string;
  travel_from?: string;
  travel_to?: string;
    location?: string;
    shares:IUser[]
      comments:IPostComment[]
      user:IUser
    content: string,
    images?: string[],
      tags:IUser[],
}
