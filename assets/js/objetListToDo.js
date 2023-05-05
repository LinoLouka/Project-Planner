const states = ["To Do", "Doing", "Done"];
const svg = { 1: "bell", 2: "briefcase", 3: "clock", 4: "warning" };
export const objetListToDo = [
  {
    id: 1,
    title: "titre 1",
    contentTxt:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim inventore, alias amet sint nobis atque voluptate voluptatem!",
    date: `2023-12-26T10:29`,
    active: true,
    states: states[0],
    img: svg[1],
  },
  {
    id: 2,
    title: "titre 2",
    contentTxt:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim inventore, alias amet sint nobis atque voluptate voluptatem!",
    date: "2023-09-30T14:50",
    active: true,
    states: states[0],
    img: svg[2],
  },
  {
    id: 3,
    title: "titre 3",
    contentTxt:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim inventore, alias amet sint nobis atque voluptate voluptatem!",
    date: "2023-06-11T12:24",
    active: true,
    states: states[1],
    img: svg[3],
  },
  {
    id: 4,
    title: "titre 4",
    contentTxt:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim inventore, alias amet sint nobis atque voluptate voluptatem!",
    date: "2024-11-03T09:00",
    active: true,
    states: states[2],
    img: svg[4],
  },
  {
    id: 5,
    title: "titre 5",
    contentTxt:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim inventore, alias amet sint nobis atque voluptate voluptatem!",
    date: "2023-07-18T17:15",
    active: true,
    states: states[0],
    img: svg[1],
  },
];
