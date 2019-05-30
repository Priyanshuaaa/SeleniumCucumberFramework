Feature: Add New Contact Functionality

Scenario Outline: Add New Contact after login,select add contact tab and then filling out the mandatory Details

Given user is already on login Page
When title of login Page is FREE CRM
Then user enters "<username>" and "<password>"
Then user clicks on Login Button
And user is on home page
And user clicks on New Contact from the Contacts Tab
And user is on Add New Contact Screen
Then filling out "<First Name>" and "<Last Name>" from the New Contact screen
And making sure the "<Full Name>" gets added or not 
Then logout from the application 
And then user quits the browser


Examples:
 |username   | password |First Name|Last Name|Full Name|
 | Priyanshua|Chetu@123|Swati|Gupta|Swati Gupta|
 | naveenk|test@123|Munander|Singh|Munander Singh|
 | tom|test456|Kunal|Kumar|Kunal Kumar|
 