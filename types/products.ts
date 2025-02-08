interface SanityProduct {
    _id: string;
    _createdAt: string;
    name: string;
    price: number;
    slug: string;
    
    images: any[]; // Sanity image array
    // ... other fields
  }