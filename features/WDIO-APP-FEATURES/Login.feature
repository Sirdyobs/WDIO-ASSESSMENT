Feature: WDIO APP Login

  Scenario: As a registered user, I should be able to login to the app, The system should not allow me to login with invalid credentials, specific error messages should be displayed where applicable. 

    Given I am on the Login screen
    When I enter correct <username> and <password> fields
    And I click on login button
    Then On <test-type>, the user should see <message-type>

    Examples:
    |test-type  | username | password      | confirm-password  | message-type |
    |positive | test1@test.com | test1234| test1234 | You are logged in! |
    |negative-passwordLength| test2@test.com | test234| test234 | Please enter at least 8 characters |
    |negative-invalidEmail| test4@test | test4567| test4567 | Please enter a valid email address |

    

