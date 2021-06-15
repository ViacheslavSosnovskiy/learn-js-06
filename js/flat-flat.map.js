const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 33, tags: ["html", "css", "js"] },
  { id: "004", likes: 3, tags: ["html", "c++"] },
];

const tags = tweets.map((t) => t.tags);
