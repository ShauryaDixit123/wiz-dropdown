const jsonData = [
  {
    id: 1,
    name: "my workspace",
  },
  {
    id: 2,
    name: "my workspace2",
  },
];

export default function index(req, res) {
  res.status(200).json(jsonData);
}
