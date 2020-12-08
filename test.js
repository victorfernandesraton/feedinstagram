const fs = require("fs");
const path = require("path");
const post = require("./src/mocks/post.json");
const users = require("./src/mocks/user.json");
const newJson = post.map((el) => {
	const { name, avatar } = users.find((i) => (i.id == el.author));
	return {
		...el,
		author: { name, avatar },
	};
});

const json = JSON.stringify(newJson);

fs.writeFileSync(path.resolve(__dirname, "test.json"), json);
