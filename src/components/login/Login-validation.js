export const validate = (text, setError) => {
	console.log(text);
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (reg.test(text) === false) {
		setError({ email: text });
	} else {
		setError({ email: text });
	}
};
