export interface ICompetitionWallet {
    subscriber_id: string;   // Reference to a Subscriber document
    competition_id: ICompetition; // Reference to a Competition document
    user_id: string;              // Reference to a User document
    amount: number;              // Amount, default value is 0
}