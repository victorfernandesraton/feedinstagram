export const validateEmail = (text, setError) => {
	if (!text || text == "" || text?.length == 0) {
		setError({ email: "Campo obrigatório" });
		return false;
	} else {
		const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!reg.test(text)) {
			setError({ email: "Endereço de email inválido" });
			return false;
		}
	}
	setError({ email: null });
	return true;
};


export const validatePass = (text, setError) => {
	if (!text == "" || text?.length == 0) {
		setError({ pass: "Campo obrigatório" });
		return false;
	} else if(text.length<6){
		setError({ pass: "Senha Inválida" })
		return false;
	}
	setError({ pass: null });
	return true;
}
