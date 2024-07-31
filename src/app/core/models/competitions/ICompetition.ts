interface ICompetition {
  _id: string; // Unique identifier for the competition
  category_id: string; // Unique identifier for the category the competition belongs to
  name: string; // Name of the competition
  description: string; // Description of the competition
  maxSubscriber: number; // Maximum number of subscribers allowed
  withdrawLimit: number; // Maximum amount that can be withdrawn
  status: boolean; // Status indicating if the competition is active (true) or inactive (false)
  start_date: string; // Start date of the competition in ISO 8601 format
  end_date: string; // End date of the competition in ISO 8601 format
  pricePerRequest: number; // Price per request
  currentSubscribers: number; // Current number of subscribers
  createdAt: string; // Date when the competition was created in ISO 8601 format
  updatedAt: string; // Date when the competition was last updated in ISO 8601 format
}
