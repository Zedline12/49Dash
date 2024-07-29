import { IPost } from '../social/post/IPost';
import { ITwitter } from '../social/twitter/ITwitter';
import { IUser } from './IUser';
import { IUserRole } from './IUserRole';

export interface IUserProfile {
  isOnline: boolean;
  country: string;
  city: string;
  bio: string;
  profilePictureKey: string;
  coverPictureKey: string;
  user: IUser;
  userRole: IUserRole;
  followers: Partial<IUser & { profilePicture: string }>[];
  following: Partial<IUser & { profilePicture: string }>[];
  friends: Partial<IUser & { profilePicture: string }>[];
  tw_posts: ITwitter[];
  fc_posts: IPost[];
}
