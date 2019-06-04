@FunctionalTest
Feature: FREE CRM SignUp Feature

@SmokeTest @RegressionTest
Scenario Outline: To verify the appearence of validation message after not passing the Edition from sign up screen1.

Given user is already on Sign Up Screen
And user enters "<FirstName>","<LastName>","<Email>","<ConfirmEmail>","<Username>","<Password>" and "<ConfirmPassword>" into mandatory fields except Edition
When user tries to sign up
Then appropriate message in a pop up related to please select the Edition should get displayed
And  sign up user should stay in sign up screen 1 only

Examples:
 |FirstName|LastName|Email|ConfirmEmail|Username|Password|ConfirmPassword|
 |Megha|Jain|megha@yopmail.com|megha@yopmail.com|Megha_1132|Chetu@123|Chetu@123|

 

@SmokeTest @RegressionTest
Scenario: To verify the validation message after passing username of less than 6 characters from sign up screen1.

Given user is already on the Sign Up screen
And user enters valid data into the mandatory fields except username
And user enters the username of less than 6 characters 
When user tries to sign up
Then appropriate validation message related to the invalid username length should get displayed
And  sign up user should stay in sign up screen 1 only

@SmokeTest @RegressionTest
Scenario: To verify the appearence of validation message when less than 6 characters has been passed in password and confirm password textfields while user is trying to sign up from Signup Screen 1. 

Given user is already on the Sign Up Page
When user enters the valid data into the mandatory fields expect passwords
Then user enters passwords of less than 6 characters 
And if user tries to sign up to the application 
Then appropriate validation message should get displayed into the sign up screen 1
And  sign up user should stay in sign up screen 1 only

@SmokeTest
Scenario: To verify the appearence of validation message after passing the invalid combination of email address into both valid email and confirm email textfields from Signup Screen 1. 

Given user is already on the Sign Up screen
And user enters the valid data into the mandatory fields expect valid email and confirm email fields
And user enters invalid combination of valid email and confirm email fields
When user tries to sign up 
Then appropriate validation message should get displayed related to the invalid combination of emails into the sign up screen 1
And  sign up user should stay in sign up screen 1 only

@SmokeTest
Scenario: To verify the appearence of validation message after passing the invalid format of email address into both valid email and confirm email textfields from Signup Screen 1. 

Given user is already on the Sign Up screen
And user enters the valid data into the mandatory fields expect valid email and confirm email fields
And user enters invalid format of valid email and confirm email fields
When user tries to sign up 
Then appropriate validation message should get displayed related to the invalid format of emails into the sign up screen 1
And  sign up user should stay in sign up screen 1 only

@SmokeTest
Scenario: To verify submit button should be disabled if any sort of validation message appears on the screen.

Given user is already on the Sign Up screen
And user enters the valid data into the mandatory fields expect passwords
When user tries to sign up
Then submit button should be disabled
And  sign up user should stay in sign up screen 1 only

@SmokeTest
Scenario: To verify submit button should be disabled right away after user redirects to the sign up screen 1.

Given user is already on the Sign Up screen
Then submit button should be disabled

@SmokeTest @RegressionTest
Scenario: To validate the sign up after passing the username which is already used to register account from sign up screen1.

Given user is already on the Sign Up screen
And user enters valid data into the mandatory fields except username
And user enters the username which has already been used to register an account before
When user tries to sign up
Then appropriate message in a pop up related to the username already exists should get displayed
And  sign up user should stay in sign up screen 1 only


@SmokeTest @RegressionTest
Scenario: To validate the sign up after passing the invalid combination of passwords from sign up screen1.

Given user is already on the Sign Up screen
And  user enters the valid data into the mandatory fields
And  user enters the invalid combination of passwords
When user tries to sign up
Then appropriate validation message related to the invalid combinations of password should get displayed on the sign up page
And  sign up user should stay in sign up screen 1 only

@SmokeTest @RegressionTest
Scenario: To verify the appearence of validation message if no data has been passed into the required textfields and clicking on submit button from sign up screen1.

Given user is already on the Sign Up screen
And user doesn't enter the valid data into the mandatory fields 
When user tries to sign up
Then appropriate validation message should get displayed into the sign up screen 
And  sign up user should stay in sign up screen 1 only

@SmokeTest @RegressionTest
Scenario: To verify whether user moves to the sign up screen 2 or not after passing the valid data into all the mandatory fields and from sign up screen1 and hitting the submit button.

Given user is already on the Sign Up screen
And user enters the valid data into the mandatory fields 
When user tries to sign up
Then user should move to the sign up screen 2.













