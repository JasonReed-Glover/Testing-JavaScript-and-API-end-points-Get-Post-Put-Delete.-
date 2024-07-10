// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    // Check code status
    expect(actualStatus).toBe(200);
});


test('let the name of the 3rd courier be Fast Delivery', async () => {
	let response;
	try {
		 response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    // Convert response to javascript object
	const data = await response.json();
    const nameCourier = data[2].name;
    expect(nameCourier).toBe("Fast Delivery");
});