interface IWheel {
  items: any[]; // Array of references to WheelItem documents
  name: string; // Name of the wheel item, required and unique
  pricePerPoint: number; // Price per point, default value is 0.001
  isActive: boolean; // Indicates whether the item is active, default value is true
  limit: any; // Reference to a WheelLimit document
}
