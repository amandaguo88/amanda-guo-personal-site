export type Experience = {
  slug: string;
  company: string;
  role: string;
  framing: string;
  problem: string;
  work: string;
  perspectives: string;
  capability: string;
  featured: boolean;
};

export const experiences: Experience[] = [
  {
    slug: "manulife",
    company: "Manulife",
    role: "Developer Relations Engineer",
    framing: "Connecting organizational goals with technology teams",
    problem:
      "Insurance and investment advisors relied on call centres to track and manage client claims, creating a time-consuming process for both advisors and support teams. At the same time, technology teams across the organization needed to build capability in emerging technologies to modernize their technology stacks and improve how they worked.",
    work:
      "I worked across two different problems: developing the frontend and backend for a two-way communication workflow that enabled advisors to self-serve \"not in good order\" claims, and developing learning content, hands-on labs and coaching sessions to help technology teams build skills in cloud, data and AI.",
    perspectives:
      "I worked at the intersection of design and engineering, translating user needs into robust technical implementations while accounting for technical constraints, edge cases and non-functional requirements. In my technology enablement work, I balanced organizational priorities and subject-matter expertise with the needs of learners, turning ambiguous stakeholder direction into practical learning experiences and delivery plans.",
    capability:
      "These experiences strengthened my ability to see both the horizontal and deep view of an organization: understanding how individual teams deliver products while connecting their work to broader organizational goals. I also learned to navigate ambiguity, adapt to shifting priorities and turn high-level direction into tangible outcomes.",
    featured: true,
  },

  {
    slug: "deloitte-digital",
    company: "Deloitte Digital",
    role: "Product & Engineering Consultant",
    framing: "Connecting business strategy to product execution",
    problem:
      "A leading Canadian classifieds platform needed to modernize its mobile application by migrating from a legacy technology stack to a cross-platform Flutter application within six months.",
    work:
      "I helped align product, engineering and design teams around a shared roadmap and facilitated communication between delivery teams and senior leadership to communicate progress, priorities and outcomes.",
    perspectives:
      "I had to translate between different levels of the organization: understanding the strategic objectives and business outcomes senior leadership cared about while helping product, design and engineering teams translate those goals into an executable roadmap.",
    capability:
      "I developed a stronger understanding of how strategy becomes execution within an organization, including how to communicate business value, align stakeholders around outcomes and use KPIs to keep teams focused on what matters.",
    featured: true,
  },

  {
    slug: "wealthsimple",
    company: "Wealthsimple",
    role: "Software Engineer",
    framing: "Connecting product and design with technical execution",
    problem:
      "Clients needed a more robust options trading experience across both mobile and web.",
    work:
      "I worked with product and design to ship real-time streaming options quotes in the mobile app and build a unified web-based brokerage experience.",
    perspectives:
      "I worked closely with product and design to clarify requirements and translate product intent into robust technical implementations, while working within the realities of a fast-moving startup environment.",
    capability:
      "I strengthened my ability to ship quickly while maintaining technical quality, and expanded my frontend engineering experience across both mobile and web environments.",
    featured: true,
  },

  {
    slug: "arctic-wolf",
    company: "Arctic Wolf",
    role: "Design Engineer",
    framing: "Simplifying complex technical workflows",
    problem:
      "Security engineers were using a highly technical workflow to edit configuration files: entering a terminal environment, modifying JSON, committing changes to Git and navigating a development and approval process. The process was slow, cumbersome and difficult for new engineers to learn.",
    work:
      "I designed a web-based configuration editing experience that allowed security engineers to make changes through a user interface, reducing the time and complexity involved in publishing updates.",
    perspectives:
      "I had to balance user needs and product aspirations with the technical constraints of the existing system. Working closely with product and engineering, I simplified a technically complex workflow while identifying which improvements were appropriate for the initial release versus future iterations.",
    capability:
      "I learned to balance user empathy with technical reality and to make pragmatic product decisions around MVP scope, trade-offs and iteration.",
    featured: true,
  },

  {
    slug: "wsib",
    company: "WSIB",
    role: "Design Engineer",
    framing: "Designing experiences around real-world constraints",
    problem:
      "Employees were returning to the workplace and needed a mechanism to complete COVID-19 self-assessments while meeting evolving social-distancing and personal-protection requirements.",
    work:
      "I conducted user research and designed, tested and iterated on a self-assessment experience that enabled employees to complete the process safely and effectively.",
    perspectives:
      "I brought together user research, interaction design and engineering considerations, while balancing the ideal experience with the practical constraints created by the situation.",
    capability:
      "I strengthened my ability to align teams around user needs, communicate information clearly and iterate pragmatically when faced with real-world constraints.",
    featured: false,
  },

  {
    slug: "tecsys",
    company: "Tecsys",
    role: "Design Engineer",
    framing: "Translating customer needs into product experiences",
    problem:
      "There was a mismatch between an existing order-management system and the way customers actually worked. The team needed a mobile experience and redesigned workflows that better reflected real-world usage.",
    work:
      "I conducted user research with sales teams to understand gaps between customer workflows and the existing system, then designed a mobile experience and redesigned key order-management workflows around real-world usage.",
    perspectives:
      "I advocated for the customer perspective while working closely with engineering and implementation stakeholders. I also helped introduce a more user-centered design approach within a team that did not have user experience design deeply embedded in its process.",
    capability:
      "I learned how to translate user needs into practical product experiences and communicate design decisions effectively with engineers and implementation stakeholders.",
    featured: false,
  },
];

export const featuredExperiences = experiences.filter(
  (experience) => experience.featured
);

export const otherExperiences = experiences.filter(
  (experience) => !experience.featured
);

export function findExperienceBySlug(slug: string): Experience | null {
  return experiences.find((exp) => exp.slug === slug) || null;
}

export function getExperienceIndex(slug: string): number {
  return featuredExperiences.findIndex((exp) => exp.slug === slug);
}
