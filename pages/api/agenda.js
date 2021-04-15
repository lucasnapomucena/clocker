export default async (req, res) => {
  console.log(req.params);

  res.status(200).json({ name: "john doe" });
};
