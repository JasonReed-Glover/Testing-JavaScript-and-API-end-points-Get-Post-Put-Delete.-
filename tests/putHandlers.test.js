// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"price": 17
}

test('status should be 200', async () => {
   let actualStatus
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
		
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('verify ok true', async () => {
   let body
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		body = data.ok
	} catch (error) {
		console.error(error);
	}
	expect(body).toBe(true);
});