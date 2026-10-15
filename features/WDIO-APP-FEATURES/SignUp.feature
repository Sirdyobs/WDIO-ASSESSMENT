Feature: WDIO APP SignUp

  Scenario: As a visitor, I should be able to navigate to the signup screen. 

    Given I am on welcome screen
    When I click on Login button
    And I open the Signup context form
    Then email,password,confirm-password empty fileds should be displayed
    

Scenario Outline: As a visitor, I should be able to register as a user of the app, the app should throw an error message if my registration details are incorrect. 

    Given I'm on the SignUp screen
    When I input correct <username>,<password> and <confirm-password> fields
    And I click on SignUp button
    Then On <test-type>, the user should see <message-type>

    

    Examples:
    |test-type  | username | password      | confirm-password  | message-type |
    | positive | test8@test.com | test8234| test8234 | You successfully signed up! |
    |negative-passwordLength| test2@test.com | test234| test234 | Please enter at least 8 characters |
    |negative-passwordMismatch| test3@test.com | test3451| test1454 | Please enter the same password |
    |negative-invalidEmail| test4@test | test4567| test4567 | Please enter a valid email address |

# Scenario Outline: As a visitor, The should not allow me to enter bad data, specific error messages should be displayed where applicable.

#     Given I'm on the SignUp screen
#     When I enter "<username>","<password>" and "<confirm-password>" fields
#     And click on Signup button
#     Then I should see error message "<message>"
    

#     Examples:
#       | username | password             | message                        |
#       | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#       | foobar   | barfoo               | Your username is invalid!      |

