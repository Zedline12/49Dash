export interface IWallet {
  _id: string; // The unique identifier for the document
  user_id: string; // The user associated with this balance record
  today_likes: number; // Number of likes today
  balance: number; // Current balance
  today_shares: number; // Number of shares today
  today_views: number; // Number of views today
  gross_money: number; // Total gross money
  monthly_balance: number; // Balance for the month
  total: number; // Total value (purpose unclear)
  months: number; // Number of months (purpose unclear)
  ten_years: number; // Value related to ten years (purpose unclear)
  five_years: number; // Value related to five years (purpose unclear)
  provider_cash_back: number; // Cash back provided
  refund_storage: number; // Storage related to refunds
  free_click_storage: number; // Storage related to free clicks
  referral_storage: number; // Storage related to referrals
  referral_cash_back: number; // Cash back from referrals
  total_payment: number; // Total payment amount
  total_cash_back: number; // Total cash back amount
  today_gift: number; // Number of gifts given today
  last_gift: string; // Date of the last gift
  isActive: boolean; // Indicates if the record is active
  realAmount: number; // Real amount (purpose unclear)
  createdAt: Date; // Timestamp of when the document was created
  updatedAt: Date; // Timestamp of the last update to the document
}
