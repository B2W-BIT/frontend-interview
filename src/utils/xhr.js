export default (url, callback) => {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'http://localhost:8000/' + url, true);
	xhr.onload = () => {
		let res;
		try {
			res = JSON.parse(xhr.responseText);
		}
		catch(e) {
			res = e;
		}

		callback(res);
	};
	xhr.onerror = () => {
		console.error(xhr);
		callback('request error');
	}

	xhr.send(null);
};