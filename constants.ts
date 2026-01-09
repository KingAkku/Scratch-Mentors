import { Calendar, Award, Code, Gift } from 'lucide-react';

export const EVENT_DETAILS = {
  prizePool: "30,000",
  currencySymbol: "", // Leaving blank as per prompt ambiguity, or can be set to $ or ₹
  companyName: "LogicBox",
  submissionDate: "February 17",
  announcementDate: "February 21",
};

export const FEATURES = [
  {
    title: "Huge Prize Pool",
    description: `Compete for a share of the ${EVENT_DETAILS.prizePool} prize pool. Show off your creativity!`,
    icon: Gift,
  },
  {
    title: "Career Launchpad",
    description: `Top winners secure a prestigious 3-Month Internship at ${EVENT_DETAILS.companyName}.`,
    icon: Award,
  },
  {
    title: "Free for All",
    description: "No entry fees. Just bring your logic, creativity, and passion for coding.",
    icon: Code,
  },
  {
    title: "Fast Track",
    description: "Short timeline. High intensity. Submit by Feb 17, Results on Feb 21.",
    icon: Calendar,
  },
];

export const TIMELINE = [
  {
    date: "Now",
    title: "Registration Opens",
    desc: "Sign up for free and join the community."
  },
  {
    date: "Feb 17",
    title: "Submission Deadline",
    desc: "Submit your final Scratch project link."
  },
  {
    date: "Feb 18-20",
    title: "Judging Phase",
    desc: "Our experts review code quality and creativity."
  },
  {
    date: "Feb 21",
    title: "Winners Announced",
    desc: "Live reveal of the champions and interns."
  }
];