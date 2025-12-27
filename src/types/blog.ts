export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: Author;
  publishedAt: Date;
  updatedAt?: Date;
  readTime: number;
  tags: string[];
  category: string;
}

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}
