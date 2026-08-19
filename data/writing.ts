export type WritingItem = {
  title: string;
  description: string;
  category: string;
  date: string;
  url: string;
};

export const writing: WritingItem[] = [
  {
    title: "Designing at the Intersection of Technology and People",
    description:
      "A reflection on how working across design, engineering and product has shaped the way I approach complex problems.",
    category: "Product & Design",
    date: "2026",
    url: "https://medium.com/",
  },
  {
    title: "What I Learned from Building Across the Stack",
    description:
      "Thoughts on moving between user needs, product requirements and technical implementation, and what each perspective brings to the table.",
    category: "Engineering",
    date: "2025",
    url: "https://medium.com/",
  },
  {
    title: "Learning AI by Building with It",
    description:
      "Exploring how AI is changing the way we build software, learn new skills and think about the future of technology.",
    category: "AI & Technology",
    date: "2025",
    url: "https://medium.com/",
  },
];

export const mediumUrl = "https://medium.com/";