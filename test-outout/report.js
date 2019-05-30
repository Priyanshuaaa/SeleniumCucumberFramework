$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Priya/Contacts/Desktop/CucumberFramework-master/CucumberFramework-master/src/main/java/Features/AddContacts.feature");
formatter.feature({
  "name": "Add New Contact Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add New Contact after login,select add contact tab and then filling out the mandatory Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "title of login Page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on New Contact from the Contacts Tab",
  "keyword": "And "
});
formatter.step({
  "name": "user is on Add New Contact Screen",
  "keyword": "And "
});
formatter.step({
  "name": "filling out \"\u003cFirst Name\u003e\" and \"\u003cLast Name\u003e\" from the New Contact screen",
  "keyword": "Then "
});
formatter.step({
  "name": "making sure the \"\u003cFull Name\u003e\" gets added or not",
  "keyword": "And "
});
formatter.step({
  "name": "logout from the application",
  "keyword": "Then "
});
formatter.step({
  "name": "then user quits the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "First Name",
        "Last Name",
        "Full Name"
      ]
    },
    {
      "cells": [
        "Priyanshua",
        "Chetu@123",
        "Swati",
        "Gupta",
        "Swati Gupta"
      ]
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Munander",
        "Singh",
        "Munander Singh"
      ]
    },
    {
      "cells": [
        "tom",
        "test456",
        "Kunal",
        "Kumar",
        "Kunal Kumar"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add New Contact after login,select add contact tab and then filling out the mandatory Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginstepDefination.user_is_already_on_login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login Page is FREE CRM",
  "keyword": "When "
});
formatter.match({
  "location": "LoginstepDefination.title_of_login_Page_is_FREE_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Priyanshua\" and \"Chetu@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefination.user_enters_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefination.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginstepDefination.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on New Contact from the Contacts Tab",
  "keyword": "And "
});
formatter.match({
  "location": "AddContactstepDefination.user_clicks_on_New_Contact_from_the_Contacts_Tab()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinations.AddContactstepDefination.user_clicks_on_New_Contact_from_the_Contacts_Tab(AddContactstepDefination.java:22)\r\n\tat ✽.user clicks on New Contact from the Contacts Tab(C:/Users/Priya/Contacts/Desktop/CucumberFramework-master/CucumberFramework-master/src/main/java/Features/AddContacts.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on Add New Contact Screen",
  "keyword": "And "
});
formatter.match({
  "location": "AddContactstepDefination.user_is_on_Add_New_Contact_Screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "filling out \"Swati\" and \"Gupta\" from the New Contact screen",
  "keyword": "Then "
});
formatter.match({
  "location": "AddContactstepDefination.filling_out_firstname_and_lastname_from_the_New_Contact_screen(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "making sure the \"Swati Gupta\" gets added or not",
  "keyword": "And "
});
formatter.match({
  "location": "AddContactstepDefination.making_sure_the_contacts_gets_added_or_not(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "AddContactstepDefination.logout_from_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "then user quits the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginstepDefination.then_user_quits_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add New Contact after login,select add contact tab and then filling out the mandatory Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginstepDefination.user_is_already_on_login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login Page is FREE CRM",
  "keyword": "When "
});
formatter.match({
  "location": "LoginstepDefination.title_of_login_Page_is_FREE_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"naveenk\" and \"test@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefination.user_enters_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login Button",
  "keyword": "Then "
});
