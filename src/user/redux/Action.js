function logout() {
	return { type: 'logout' };
}

function login(payload) {
	return { type: 'login', payload };
}

export { logout, login };
