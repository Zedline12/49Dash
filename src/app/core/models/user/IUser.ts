import { IPost } from '../social/post/IPost';
import { IUserGiftWallet } from './IUserGiftWallet';
import { IUserWallet } from './IUserWallet';

export interface IUser {
  username?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  gender: string;
 
  //wallets
  wallet?: Partial<IUserWallet>;
  gift_wallet?: IUserGiftWallet
  //

  //addional data
  blockedUsers?: IUser;
  hiddenPosts?: IPost;
  isLocked?: boolean;
  lockedDate?: Date;
  language?: string;
  location?: {
    type: {
      type: String;
      enum: ['Point'];
      required: false;
    };
    coordinates: {
      type: [Number];
      default: [30.033333, 31.233334];
    };
  };
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  isDeleted?: boolean;
  countryCode?: string;
}
