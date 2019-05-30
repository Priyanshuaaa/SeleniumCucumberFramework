$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/CucumberFramework/src/main/java/Features/login.feature");
formatter.feature({
  "name": "FREE CRM Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "FREE CRM Login Test Scenario",
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
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Priyanshua",
        "Chetu@123"
      ]
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ]
    },
    {
      "cells": [
        "tom",
        "test456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FREE CRM Login Test Scenario",
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
formatter.scenario({
  "name": "FREE CRM Login Test Scenario",
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
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cCRMPRO[]\u003e but was:\u003cCRMPRO[ - CRM software for customer relationship management, sales, and support.]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinations.LoginstepDefination.user_is_on_home_page(LoginstepDefination.java:71)\r\n\tat ✽.user is on home page(C:/CucumberFramework/src/main/java/Features/login.feature:19)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "FREE CRM Login Test Scenario",
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
  "name": "user enters \"tom\" and \"test456\"",
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
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cCRMPRO[]\u003e but was:\u003cCRMPRO[ - CRM software for customer relationship management, sales, and support.]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinations.LoginstepDefination.user_is_on_home_page(LoginstepDefination.java:71)\r\n\tat ✽.user is on home page(C:/CucumberFramework/src/main/java/Features/login.feature:19)\r\n",
  "status": "failed"
});
});