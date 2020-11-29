export const handleValidation = ({ email, pass }, { error, setError }) => {
	let resEmail = false;
	let resPass = false;
	let newError = {};
	if (!email || email == "" || email?.length == 0) {
		newError = { ...error, ...newError, email: "Campo obrigatório" };
		resEmail = false;
	} else {
		const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!reg.test(email)) {
			newError = { ...error, ...newError, email: "Endereço de email inválido" };
			resEmail = false;
		} else {
			resEmail = true;
			newError = { ...error, ...newError, email: null };
		}
	}

	if (!pass || pass == "" || pass?.length == 0) {
		newError = { ...error, ...newError, pass: "Campo obrigatório" };
		resPass = false;
	} else if (pass.length < 6) {
		newError = { ...error, ...newError, pass: "Senha Inválida" };
		resPass = false;
	} else {
		resPass = true;
		newError = { ...error, ...newError, ...error, pass: null };
	}
	setError({ ...error, ...newError });
	return [resPass, resEmail];
};
