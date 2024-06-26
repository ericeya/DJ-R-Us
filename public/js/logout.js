const logout = async () => {
	const response = await fetch('/api/user/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) {
		document.location.replace('/');
	} else {
		alert('Failed to log out.');
	}
	// console.log('will logout');
};

document.querySelector('#logout-btn').addEventListener('click', logout);
