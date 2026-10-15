Feature: Form Interactions

  Scenario Outline: As a user I should be able to interact with the form components on the form screen. 

    Given I am on the form components page
    When Input field should have a placeholder
    And I enter <input-text> in the input field
    Then the result field should display <input-text>
    When I click on the switch button
    Then Switch display should be <switch-state-off>
    When I click on the switch button
    Then Switch display should be <switch-state-on>
    When I click on the dropdown button
    Then I should see the dropdown list view displayed
    When I select <dropdown-value> from the dropdown
    Then The Dropdown should have "<dropdown-value>" as a value

    Examples:
        |input-text  | switch-state-on              | switch-state-off             | dropdown-value         |
        |test2       | Click to turn the switch ON  | Click to turn the switch OFF | webdriver.io is awesome|
        |test3       | Click to turn the switch ON  | Click to turn the switch OFF | Appium is awesome      |
        |test1       | Click to turn the switch ON  | Click to turn the switch OFF | This app is awesome    |




