// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "products": [
        {
            "id": 1,
            "quantity": 3
        },
        {
            "id": 4,
            "quantity": 1
        },
        {
            "id": 9,
            "quantity": 3
        }
    ],
	"deliveryTime": 7
}

test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
		//const data = await response.json();
       // console.log(actualStatus);
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
});


const requestBody2 = {
    "products": [
        {
            "id": 1,
            "quantity": 3
        },
        {
            "id": 4,
            "quantity": 1
        },
        {
            "id": 9,
            "quantity": 3
        }
    ],
	"deliveryTime": 7
}

test('the Speedy delivery price is 7 for the second test', async () => {
	let actualStatus;
	let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody2)
		});
		actualStatus = response.status;

        //console.log(actualStatus);

		data = await response.json();
		//console.log(data)
	} catch (error) {
		console.error(error);
	}
        const deliveryPrice = data.Speedy.deliveryPrice;

        expect(deliveryPrice).toBe(7);

});