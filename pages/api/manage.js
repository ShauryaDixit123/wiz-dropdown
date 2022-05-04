const jsonData = [
  {
    id: 1,
    name: "manage 1",
  },
  {
    id: 2,
    name: "manage 2",
  },
  {
    id: 3,
    name: "manage 3",
  },
  {
    id: 4,
    name: "manage 4",

    otherdata: [
      {
        id: 1,
        name: "manage 4",
      },
      {
        id: 2,
        name: "manage 5",
      },
    ],
  },
];

export default function manageHere(req, res) {
  res.status(200).json(jsonData);
}
