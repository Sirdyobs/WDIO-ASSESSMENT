
const { When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');
const { post } = require('../../../api-service/service.ts');
const { credentials, bookingPayload } =
  require('../../../testData/booking.data.ts');
interface BookingPayload {
    firstname: string;
    lastname: string;
    totalprice: number;
    depositpaid: boolean;
    bookingdates: {
        checkin: string;
        checkout: string;
    };
    additionalneeds: string;
}

interface Credentials {
    username: string;
    password: string;
}

interface ApiResponse {
    status: number;
    body: unknown;
}

let response: ApiResponse | undefined;
let requestPayload: BookingPayload | Credentials | undefined;

When(
    'I send a POST request to {string} with valid credentials',
    async (endpoint: string) => {
        requestPayload = credentials as Credentials;
        response = await post(endpoint, requestPayload);
    }
);

When(
  'I send a POST request to {string} with a valid booking payload',
  async (endpoint: string) => {
    requestPayload = bookingPayload;

    console.log(
      'Booking request payload:',
      JSON.stringify(requestPayload, null, 2)
    );

    response = await post(endpoint, requestPayload);
  }
);


Then('the response status should be {int}', (status: number) => {
    assert.ok(response, 'No API response was received');
    assert.equal(response.status, status);
});

Then('the response should contain a non-empty token', () => {
  assert.ok(response, 'No API response was received');

  const body = response.body as {
    token?: string;
    reason?: string;
  };

  assert.ok(
    typeof body.token === 'string' && body.token.length > 0,
    `Authentication failed: ${body.reason ?? JSON.stringify(body)}`
  );
});
Then('the response should contain a booking ID', () => {
    assert.ok(response, 'No API response was received');

    const body = response.body as { bookingid?: number };

    assert.equal(typeof body.bookingid, 'number');
    assert.ok(body.bookingid! > 0, 'Booking ID should be positive');
});

Then('the returned booking should match the request payload', () => {
    assert.ok(response, 'No API response was received');

    const body = response.body as {
        bookingid?: number;
        booking?: BookingPayload;
    };

    assert.ok(body.booking, 'Response should contain a booking object');
    assert.ok(requestPayload, 'Request payload was not saved');

    assert.deepStrictEqual(
        body.booking,
        requestPayload,
        'Returned booking does not match the submitted payload'
    );
});
