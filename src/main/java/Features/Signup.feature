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
Scenario Outline: To verify the validation message after passing username of less than 6 characters from sign up screen1.

Given user is already on Sign Up Screen
And user enters valid "<Edition>","<FirstName>","<LastName>","<Email>","<ConfirmEmail>","<Password>" and "<ConfirmPassword>" including "<Username>"
When user tries to sign up
Then appropriate validation message related to the invalid username length should get displayed
And  sign up user should stay in sign up screen 1 only

Examples:
 |Edition|FirstName|LastName|Email|ConfirmEmail|Password|ConfirmPassword|Username|
 |Free Edition|C.P|Gulati|Cp@yopmail.com|Cp@yopmail.com|Chetu@123|Chetu@123|pampa|


@SmokeTest @RegressionTest
Scenario Outline: To verify the appearence of validation message when less than 6 characters has been passed in password and confirm password textfields while user is trying to sign up from Signup Screen 1. 

Given user is already on Sign Up Screen
And  user enters valid "<Edition>","<FirstName>","<LastName>","<Email>","<ConfirmEmail>","<Username>" and "<Password>","<ConfirmPassword>"
When user tries to sign up
Then appropriate validation message related to the invalid length of passwords should get displayed into the sign up screen 1
And  sign up user should stay in sign up screen 1 only

Examples:
|Edition|FirstName|LastName|Email|ConfirmEmail|Username|Password|ConfirmPassword|
|Free Edition|Megha|Jain|megha@yopmail.com|megha@yopmail.com|Megha_1132|1234|1234|


@SmokeTest
Scenario Outline: To verify the appearence of validation message after passing the invalid combination of email address into both valid email and confirm email textfields from Signup Screen 1. 

Given user is already on Sign Up Screen
And user enters valid data in "<Edition>","<FirstName>","<LastName>","<Username>","<Password>" and "<ConfirmPassword>" and invalid "<Email>","<ConfirmEmail>" fields
When user tries to sign up 
Then appropriate validation message should get displayed related to the invalid combination of emails into the sign up screen 1
And  sign up user should stay in sign up screen 1 only

Examples:
|Edition|FirstName|LastName|Username|Password|ConfirmPassword|Email|ConfirmEmail|
|Free Edition|Megha|Jain|pampas_1132|Chetu@123|Chetu@123|megha@yopmail.com|meghas@yopmail.com|


@SmokeTest
Scenario Outline: To verify the appearence of validation message after passing the invalid format of email address into both valid email and confirm email textfields from Signup Screen 1. 

Given user is already on Sign Up Screen
And user enters valid data in "<Edition>","<FirstName>","<LastName>","<Username>","<Password>" and "<ConfirmPassword>" and invalid "<Email>","<ConfirmEmail>" fields
When user tries to sign up 
Then appropriate validation message should get displayed related to the invalid format of emails into the sign up screen 1
And  sign up user should stay in sign up screen 1 only

Examples:
|Edition|FirstName|LastName|Username|Password|ConfirmPassword|Email|ConfirmEmail|
|Free Edition|Megha|Jain|pampas_1132|Chetu@123|Chetu@123|megha|megha|

@SmokeTest
Scenario Outline: To verify submit button should be disabled if any sort of validation message appears on the screen.

Given user is already on Sign Up Screen
And user enters valid data into "<Edition>","<FirstName>","<LastName>","<Email>","<ConfirmEmail>","<Username>" fields expect passwords
When user tries to sign up
Then submit button should be disabled
And  sign up user should stay in sign up screen 1 only

Examples:
|Edition|FirstName|LastName|Email|ConfirmEmail|Username|
|Free Edition|Megha|Jain|megha@yopmail.com|megha@yopmail.com|Megha_1132|


@SmokeTest
Scenario: To verify submit button should be disabled right away after user redirects to the sign up screen 1.

Given user is already on Sign Up Screen
Then submit button should be disabled

@SmokeTest @RegressionTest
Scenario Outline: To validate the sign up after passing the username which is already used to register account from sign up screen1.

Given user is already on Sign Up Screen
And user enters valid "<Edition>","<FirstName>","<LastName>","<Email>","<ConfirmEmail>","<Password>" and "<ConfirmPassword>" including "<Username>"
When user tries to sign up
Then appropriate message in a pop up related to the username already exists should get displayed
And  sign up user should stay in sign up screen 1 only

Examples:
 |Edition|FirstName|LastName|Email|ConfirmEmail|Password|ConfirmPassword|Username|
 |Free Edition|C.P|Gulati|Cp@yopmail.com|Cp@yopmail.com|Chetu@123|Chetu@123|Priyanshua|



@SmokeTest @RegressionTest
Scenario Outline: To validate the sign up after passing the invalid combination of passwords from sign up screen1.

Given user is already on Sign Up Screen
And user enters valid "<Edition>","<FirstName>","<LastName>","<Email>","<ConfirmEmail>","<Username>" and "<Password>","<ConfirmPassword>"
When user tries to sign up
Then appropriate validation message related to the invalid combinations of password should get displayed on the sign up page
And  sign up user should stay in sign up screen 1 only

Examples:
|Edition|FirstName|LastName|Email|ConfirmEmail|Username|Password|ConfirmPassword|
|Free Edition|Megha|Jain|megha@yopmail.com|megha@yopmail.com|Megha_1132|Chetu@123|Chetu@1234|


@SmokeTest @RegressionTest
Scenario Outline: To verify the appearence of validation message if no data has been passed into the required textfields and clicking on submit button from sign up screen1.

Given user is already on Sign Up Screen
And user doesn't enter valid data into mandatory fields except "<Edition>"
When user tries to sign up
Then appropriate validation message should get displayed into the sign up screen 
And  sign up user should stay in sign up screen 1 only

Examples:
|Edition|
|Free Edition|


@SmokeTest @RegressionTest
Scenario Outline: To verify whether user moves to the sign up screen 2 or not after passing the valid data into all the mandatory fields and from sign up screen1 and hitting the submit button.

Given user is already on Sign Up Screen
And user enters valid "<Edition>","<FirstName>","<LastName>","<Email>","<ConfirmEmail>","<Username>","<Password>" and "<ConfirmPassword>"  
When user tries to sign up
Then user should move to sign up screen2

Examples:
 |Edition|FirstName|LastName|Email|ConfirmEmail|Username|Password|ConfirmPassword|
 |Free Edition|Megha|Jain|megha@yopmail.com|megha@yopmail.com|Megha_1132|Chetu@123|Chetu@123|









