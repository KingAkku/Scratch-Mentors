
import { Calendar, Award, Code, Gift } from 'lucide-react';

export const EVENT_DETAILS = {
  prizePool: "30,000",
  currencySymbol: "₹", // Leaving blank as per prompt ambiguity, or can be set to $ or ₹
  companyName: "LogicBox",
  submissionDate: "February 17",
  announcementDate: "February 21",
};

export const FEATURES = [
  {
    title: "Be a Mentor",
    description: "You (the Mentor) guide 5+ disciples (Junior Learners). Teach, lead, and win together.",
    icon: Award,
  },
  {
    title: "Huge Prize Pool",
    description: `Compete for a share of the ${EVENT_DETAILS.prizePool} prize pool for the best Mentor-Disciple teams.`,
    icon: Gift,
  },
  {
    title: "Career Launchpad",
    description: `Top Mentors secure a prestigious 3-Month Internship at ${EVENT_DETAILS.companyName}.`,
    icon: Code,
  },
  {
    title: "Fast Track",
    description: "Submit your team's best work by Feb 17. Results announced on Feb 21.",
    icon: Calendar,
  },
];

export const TIMELINE = [
  {
    date: "Jan 17",
    title: "Mentors Register",
    desc: "Sign up as a Mentor and form your squad."
  },
  {
    date: "Feb 17",
    title: "Project Submission",
    desc: "Mentors submit the final Scratch projects of their disciples."
  },
  {
    date: "Feb 18-20",
    title: "Evaluation",
    desc: "Judges assess mentoring quality and project creativity."
  },
  {
    date: "Feb 21",
    title: "Crown Ceremony",
    desc: "Winners and Internships announced live."
  }
];
