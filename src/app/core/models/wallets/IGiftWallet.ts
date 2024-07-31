export interface IGiftWallet {
  user_id: string; // Reference to a User document
  amount: number; // Amount, default value is 0
  isActive: boolean; // Indicates if the transaction is active, default value is true
}
