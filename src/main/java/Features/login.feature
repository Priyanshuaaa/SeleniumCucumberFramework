Feature: FREE CRM Login Feature

#Without Examples Keyword
#Scenario: FREE CRM Login Test Scenario
#
#Given user is already on login Page
#When title of login Page is FREE CRM
#Then user enters "Priyanshua" and "Chetu@123"
#Then user clicks on Login Button
#And user is on home page

#With Examples Keyword
Scenario Outline: FREE CRM Login Test Scenario

Given user is already on login Page
When title of login Page is FREE CRM
Then user enters "<username>" and "<password>"
Then user clicks on Login Button
And user is on home page
And then user quits the browser

Examples:
 |username   | password |
 | Priyanshua|Chetu@123|
 | naveenk|test@123|
 | tom|test456|
 
 