$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Priya/Contacts/Desktop/CucumberFramework-master/CucumberFramework-master/src/main/java/Features/login.feature");
formatter.feature({
  "name": "FREE CRM Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "FREE CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario"
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
  "name": "user enters Username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefination.user_enters_Username_and_password()"
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
});