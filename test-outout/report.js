$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/CucumberFramework/src/main/java/Features/loginCRM.feature");
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "title of login Page is FREE CRM",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_Page_is_FREE_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.user_enters_valid__Username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.homepage_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate logged in username",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.validate_logged_in_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.logout_from_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});