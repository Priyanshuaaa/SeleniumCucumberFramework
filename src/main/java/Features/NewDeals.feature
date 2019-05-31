Feature: FREE CRM Deals Related Functionalities

Scenario: Add Deal Functionality

Given user is already on login Page
When title of login Page is FREE CRM
Then user enters username and password
|Priyanshua|Chetu@123|

Then user clicks on Login Button
And user is on home page
And user clicks on New Deals from the Deals Tab
Then filling out Title,Company Name,Amount,Probability and Commission from the Add New Deals Screen
|Mr.|Thermax|250|10|30|

Then logout from the application 
And then user quits the browser
