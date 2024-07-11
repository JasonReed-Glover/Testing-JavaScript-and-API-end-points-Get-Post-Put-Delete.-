// eslint-disable-next-line no-undef
const config = require('../config');

test('Should have response code 200 when getting a list of couriers', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});


test('Should have the name of the 3rd courier be Fast Delivery', async () => {
	let nameCourier;
	try {
		 const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		 const data = await response.json();
		 nameCourier = data[2].name;
    } catch (error) {
        console.error(error);
    }
	
    
    expect(nameCourier).toBe("Fast Delivery");
});