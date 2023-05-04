import { getTimeFormat } from "./dateTimeFormat.js";
// getTimeFormat("1995-03-06 03:24")
const states = ["To Do", "Doing", "Done"];
const svg = { 1: "bell", 2: "briefcase", 3: "clock", 4: "warning" };
export const objetListToDo = [
  {
    id: 1,
    title: "titre 1",
    contentTxt:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim inventore, alias amet sint nobis atque voluptate voluptatem!",
    date: getTimeFormat(`2023-26-12 10:29`.replace(" ", "T")), // SOUCIS GRAVE DE DEBILITE DU CODE QUI NE SE COMPORTE PAS CORRECTEMENT!!!!!!!!!
    active: true,
    states: states[0],
    img: svg[1],
  },
  // {
  //   id: 2,
  //   title: "titre 2",
  //   contentTxt:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim inventore, alias amet sint nobis atque voluptate voluptatem!",
  //   date: getTimeFormat("2023-30-09 14:50"),
  //   active: true,
  //   states: states[0],
  //   img: svg[2],
  // },
  // {
  //   id: 3,
  //   title: "titre 3",
  //   contentTxt:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim inventore, alias amet sint nobis atque voluptate voluptatem!",
  //   date: getTimeFormat("2023-11-06 12:24"),
  //   active: true,
  //   states: states[1],
  //   img: svg[3],
  // },
  // {
  //   id: 4,
  //   title: "titre 4",
  //   contentTxt:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim inventore, alias amet sint nobis atque voluptate voluptatem!",
  //   date: getTimeFormat("2024-03-11 09:00"),
  //   active: true,
  //   states: states[2],
  //   img: svg[4],
  // },
  // {
  //   id: 5,
  //   title: "titre 5",
  //   contentTxt:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim inventore, alias amet sint nobis atque voluptate voluptatem!",
  //   date: getTimeFormat("2023-18-07 17:15"),
  //   active: true,
  //   states: states[0],
  //   img: svg[1],
  // },
];
