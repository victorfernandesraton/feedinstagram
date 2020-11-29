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
