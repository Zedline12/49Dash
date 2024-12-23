export interface PaginatedData<T> {
  docs: T[]; // The list of documents (items).
  totalDocs: number; // The total number of documents.
  limit: number; // The number of documents per page.
  hasPrevPage: boolean; // Whether there is a previous page.
  hasNextPage: boolean; // Whether there is a next page.
  page: number; // The current page number.
  totalPages: number; // The total number of pages.
  prevPage: number | null; // The previous page number (or null if not available).
  nextPage: number | null; // The next page number (or null if not available).
}
