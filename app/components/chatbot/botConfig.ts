export type Option = { label: string; nextNode: string; subtext?: string };
export type BotNode = { message: string; options: Option[]; showForm?: boolean };

export const botFlow: Record<string, BotNode> = {
  START: {
    message: "Hi there! 👋\nI'm Aura.\nHow can I help you today?",
    options: [
      { label: "Explore Courses", nextNode: "COURSES" },
      { label: "Upcoming Batches", nextNode: "BATCHES" },
      { label: "Admission Process", nextNode: "ADMISSIONS" },
      { label: "Talk to Support", nextNode: "SUPPORT" }
    ]
  },
  COURSES: {
    message: "We offer a variety of industry-relevant courses. Here are our popular programs:",
    options: [
      { label: "Full Stack Development", nextNode: "SUPPORT", subtext: "Web Development" },
      { label: "Data Science & AI", nextNode: "SUPPORT", subtext: "Data Science, ML, AI" },
      { label: "Python Programming", nextNode: "SUPPORT", subtext: "Core Python, Advanced Python" },
    ]
  },
  BATCHES: {
    message: "New batches start on the 1st and 15th of every month. Would you like to register?",
    options: [
      { label: "Yes, contact me", nextNode: "SUPPORT" },
      { label: "Go Back", nextNode: "START" }
    ]
  },
  ADMISSIONS: {
    message: "The admission process is entirely online. Do you need help with enrollment?",
    options: [
      { label: "Yes, I need help", nextNode: "SUPPORT" },
      { label: "Go Back", nextNode: "START" }
    ]
  },
  SUPPORT: {
    message: "Please fill out the form below and our human support team will contact you shortly.",
    options: [],
    showForm: true
  }
};