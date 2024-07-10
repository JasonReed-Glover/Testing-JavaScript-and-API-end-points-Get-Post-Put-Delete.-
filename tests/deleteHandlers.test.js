// eslint-disable-next-line no-undef
const config = require('../config');

test('check response code 200', async () => {
   let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'DELETE',
		});
		 actualStatus = response.status;
        //console.log(actualStatus);
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


test('check if deleted kit returns ok:true', async () => {
	let body_response;
	 try {
		 const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			 method: 'DELETE',
		 });
		 const data = await response.json();
		 body_response = data.ok
		 //console.log(body_response);
	 } catch (error) {
		 console.error(error);
	 }
	 expect(body_response).toBe(true);
 });
 