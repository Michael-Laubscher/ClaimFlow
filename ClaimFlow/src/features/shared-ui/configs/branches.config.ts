import type { Branch } from "@/shared/types/branch.types";

export const branches: Branch[] = [
  {
    id: 1,
    name: "Nairobi",
    flagship: true,
    address: "2nd Floor, Business District, P.O. Box 12345-00100",
    city: "Nairobi, Kenya",
    phone: "+254 700 000 000",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm",
  },

  {
    id: 2,
    name: "Mombasa",
    address: "Mombasa Port Area, P.O. Box 54321-80100",
    city: "Mombasa, Kenya",
    phone: "+254 700 000 001",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm",
  },

  {
    id: 3,
    name: "Kampala",
    address: "Kampala Industrial Area, P.O. Box 11111",
    city: "Kampala, Uganda",
    phone: "+256 700 000 000",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm",
  },

  {
    id: 4,
    name: "Dar es Salaam",
    address: "Dar es Salaam Port District",
    city: "Dar es Salaam, Tanzania",
    phone: "+255 700 000 000",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm",
  },

  {
    id: 5,
    name: "Kigali",
    address: "Kigali Business Center",
    city: "Kigali, Rwanda",
    phone: "+250 700 000 000",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm",
  },

  {
    id: 6,
    name: "Addis Ababa",
    address: "Addis Ababa Trade Hub",
    city: "Addis Ababa, Ethiopia",
    phone: "+251 700 000 000",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm",
  },
];
