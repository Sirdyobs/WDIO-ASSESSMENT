
Feature: Booking API Tests

  @api @auth
  Scenario: Generate an authentication token
    When I send a POST request to "/auth" with valid credentials
    Then the response status should be 200
    And the response should contain a non-empty token

  @api @booking
  Scenario: Create a booking
    When I send a POST request to "/booking" with a valid booking payload
    Then the response status should be 200
    And the response should contain a booking ID
    And the returned booking should match the request payload
