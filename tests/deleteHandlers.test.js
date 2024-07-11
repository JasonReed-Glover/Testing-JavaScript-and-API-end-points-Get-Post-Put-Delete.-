// eslint-disable-next-line no-undef
const config = require('../config');

test('Should have response code 200 when deleting a kit', async () => {
   let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'DELETE',
		});
		 actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


test('should return ok: true when deleting a kit', async () => {
	let body_response;
	 try {
		 const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			 method: 'DELETE',
		 });
		 const data = await response.json();
		 body_response = data.ok
	 } catch (error) {
		 console.error(error);
	 }
	 expect(body_response).toBe(true);
 });
 