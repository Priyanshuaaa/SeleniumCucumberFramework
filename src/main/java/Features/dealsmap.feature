Feature: FREE CRM Deals Related Functionalities

Scenario: Add Deal Functionality through Map Concept

Given user is already on login Page
When title of login Page is FREE CRM
Then user enters username and password
|Username  |Password|
|Priyanshua|Chetu@123|

Then user clicks on Login Button
And user is on home page
And user clicks on New Deals from the Deals Tab
Then filling out Title,Company Name,Amount,Probability and Commission from the Add New Deals Screen
|Title|CompanyName|Amount|Probability|Commission|
| Mr.  |  dsdssd     | 88   |  15       | 51 |
| Mrs. |  sdsdsd     | 89   |  17       | 61 |
| Mrs. |  dsdsds     | 90   |  19       | 71 |


Then logout from the application 
And then user quits the browser
