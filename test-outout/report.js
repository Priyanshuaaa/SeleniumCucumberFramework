$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/CucumberFramework/src/main/java/Features/Signup.feature");
formatter.feature({
  "name": "FREE CRM SignUp Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To verify the appearence of validation message after not passing the Edition from sign up screen1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmail\u003e\",\"\u003cConfirmEmail\u003e\",\"\u003cUsername\u003e\",\"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\" into mandatory fields except Edition",
  "keyword": "And "
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.step({
  "name": "appropriate message in a pop up related to please select the Edition should get displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "ConfirmEmail",
        "Username",
        "Password",
        "ConfirmPassword"
      ]
    },
    {
      "cells": [
        "Megha",
        "Jain",
        "megha@yopmail.com",
        "megha@yopmail.com",
        "Megha_1132",
        "Chetu@123",
        "Chetu@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the appearence of validation message after not passing the Edition from sign up screen1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Megha\",\"Jain\",\"megha@yopmail.com\",\"megha@yopmail.com\",\"Megha_1132\",\"Chetu@123\" and \"Chetu@123\" into mandatory fields except Edition",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_except_Edition(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "SignupStepDefination.user_tries_to_sign_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "appropriate message in a pop up related to please select the Edition should get displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_message_in_a_pop_up_related_to_please_select_the_Edition_should_get_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.sign_up_user_should_stay_in_sign_up_screen_1_only()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify the validation message after passing username of less than 6 characters from sign up screen1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cEdition\u003e\",\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmail\u003e\",\"\u003cConfirmEmail\u003e\",\"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\" including \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.step({
  "name": "appropriate validation message related to the invalid username length should get displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Email",
        "ConfirmEmail",
        "Password",
        "ConfirmPassword",
        "Username"
      ]
    },
    {
      "cells": [
        "Free Edition",
        "C.P",
        "Gulati",
        "Cp@yopmail.com",
        "Cp@yopmail.com",
        "Chetu@123",
        "Chetu@123",
        "pampa"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the validation message after passing username of less than 6 characters from sign up screen1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"Free Edition\",\"C.P\",\"Gulati\",\"Cp@yopmail.com\",\"Cp@yopmail.com\",\"Chetu@123\" and \"Chetu@123\" including \"pampa\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_including_username_of_less_than_6_characters(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "SignupStepDefination.user_tries_to_sign_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "appropriate validation message related to the invalid username length should get displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_validation_message_related_to_the_invalid_username_length_should_get_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.sign_up_user_should_stay_in_sign_up_screen_1_only()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify the appearence of validation message when less than 6 characters has been passed in password and confirm password textfields while user is trying to sign up from Signup Screen 1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cEdition\u003e\",\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmail\u003e\",\"\u003cConfirmEmail\u003e\",\"\u003cUsername\u003e\" and \"\u003cPassword\u003e\",\"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.step({
  "name": "appropriate validation message related to the invalid length of passwords should get displayed into the sign up screen 1",
  "keyword": "Then "
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Email",
        "ConfirmEmail",
        "Username",
        "Password",
        "ConfirmPassword"
      ]
    },
    {
      "cells": [
        "Free Edition",
        "Megha",
        "Jain",
        "megha@yopmail.com",
        "megha@yopmail.com",
        "Megha_1132",
        "1234",
        "1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the appearence of validation message when less than 6 characters has been passed in password and confirm password textfields while user is trying to sign up from Signup Screen 1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"Free Edition\",\"Megha\",\"Jain\",\"megha@yopmail.com\",\"megha@yopmail.com\",\"Megha_1132\" and \"1234\",\"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_with_less_than_6_characters_passwords(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "SignupStepDefination.user_tries_to_sign_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "appropriate validation message related to the invalid length of passwords should get displayed into the sign up screen 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_validation_message_related_to_the_invalid_length_of_passwords_should_get_displayed_into_the_sign_up_screen_1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.sign_up_user_should_stay_in_sign_up_screen_1_only()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify the appearence of validation message after passing the invalid combination of email address into both valid email and confirm email textfields from Signup Screen 1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid data in \"\u003cEdition\u003e\",\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cUsername\u003e\",\"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\" and invalid \"\u003cEmail\u003e\",\"\u003cConfirmEmail\u003e\" fields",
  "keyword": "And "
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.step({
  "name": "appropriate validation message should get displayed related to the invalid combination of emails into the sign up screen 1",
  "keyword": "Then "
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Username",
        "Password",
        "ConfirmPassword",
        "Email",
        "ConfirmEmail"
      ]
    },
    {
      "cells": [
        "Free Edition",
        "Megha",
        "Jain",
        "pampas_1132",
        "Chetu@123",
        "Chetu@123",
        "megha@yopmail.com",
        "meghas@yopmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the appearence of validation message after passing the invalid combination of email address into both valid email and confirm email textfields from Signup Screen 1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid data in \"Free Edition\",\"Megha\",\"Jain\",\"pampas_1132\",\"Chetu@123\" and \"Chetu@123\" and invalid \"megha@yopmail.com\",\"meghas@yopmail.com\" fields",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_in_mandatory_fields_and_invalid_emails(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "SignupStepDefination.user_tries_to_sign_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "appropriate validation message should get displayed related to the invalid combination of emails into the sign up screen 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_validation_message_should_get_displayed_related_to_the_invalid_combination_of_emails_into_the_sign_up_screen_1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.sign_up_user_should_stay_in_sign_up_screen_1_only()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify the appearence of validation message after passing the invalid format of email address into both valid email and confirm email textfields from Signup Screen 1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@Failed"
    }
  ]
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid data in \"\u003cEdition\u003e\",\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cUsername\u003e\",\"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\" and invalid \"\u003cEmail\u003e\",\"\u003cConfirmEmail\u003e\" fields",
  "keyword": "And "
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.step({
  "name": "appropriate validation message should get displayed related to the invalid format of emails into the sign up screen 1",
  "keyword": "Then "
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Username",
        "Password",
        "ConfirmPassword",
        "Email",
        "ConfirmEmail"
      ]
    },
    {
      "cells": [
        "Free Edition",
        "Megha",
        "Jain",
        "pampas_1132",
        "Chetu@123",
        "Chetu@123",
        "megha",
        "megha"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the appearence of validation message after passing the invalid format of email address into both valid email and confirm email textfields from Signup Screen 1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@Failed"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.TimeoutException: Timeout loading page after 20000ms\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHETUIWK255\u0027, ip: \u0027172.16.4.66\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0, capabilities: {desiredCapabilities: {acceptInsecureCerts: true, browserName: firefox}}, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190529145824, moz:headless: false, moz:processID: 15512, moz:profile: C:\\Users\\priyanshua\\AppData..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b5f7b3d6-4d10-45e7-b003-9cdacecd49fe\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.qa.base.TestBase.initialization(TestBase.java:79)\r\n\tat stepDefinations.SignupStepDefination.setup(SignupStepDefination.java:40)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.before({
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinations.SignupStepDefination.signupclick(SignupStepDefination.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid data in \"Free Edition\",\"Megha\",\"Jain\",\"pampas_1132\",\"Chetu@123\" and \"Chetu@123\" and invalid \"megha\",\"megha\" fields",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_in_mandatory_fields_and_invalid_emails(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "SignupStepDefination.user_tries_to_sign_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "appropriate validation message should get displayed related to the invalid format of emails into the sign up screen 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_validation_message_should_get_displayed_related_to_the_invalid_format_of_emails_into_the_sign_up_screen_1()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.sign_up_user_should_stay_in_sign_up_screen_1_only()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "To verify submit button should be disabled if any sort of validation message appears on the screen.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid data into \"\u003cEdition\u003e\",\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmail\u003e\",\"\u003cConfirmEmail\u003e\",\"\u003cUsername\u003e\" fields expect passwords",
  "keyword": "And "
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.step({
  "name": "submit button should be disabled",
  "keyword": "Then "
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Email",
        "ConfirmEmail",
        "Username"
      ]
    },
    {
      "cells": [
        "Free Edition",
        "Megha",
        "Jain",
        "megha@yopmail.com",
        "megha@yopmail.com",
        "Megha_1132"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify submit button should be disabled if any sort of validation message appears on the screen.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid data into \"Free Edition\",\"Megha\",\"Jain\",\"megha@yopmail.com\",\"megha@yopmail.com\",\"Megha_1132\" fields expect passwords",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_expect_passwords(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "SignupStepDefination.user_tries_to_sign_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit button should be disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.submit_button_should_be_disabled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.sign_up_user_should_stay_in_sign_up_screen_1_only()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify submit button should be disabled after entering valid data into all mandatory fields and then clearing out any field.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@New"
    }
  ]
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cEdition\u003e\",\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmail\u003e\",\"\u003cConfirmEmail\u003e\",\"\u003cUsername\u003e\",\"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clearing out any of the entered values",
  "keyword": "When "
});
formatter.step({
  "name": "submit button should be disabled",
  "keyword": "Then "
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Email",
        "ConfirmEmail",
        "Username",
        "Password",
        "ConfirmPassword"
      ]
    },
    {
      "cells": [
        "Free Edition",
        "Megha",
        "Jain",
        "megha@yopmail.com",
        "megha@yopmail.com",
        "Megha_1132",
        "Chetu@123",
        "Chetu@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify submit button should be disabled after entering valid data into all mandatory fields and then clearing out any field.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@New"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"Free Edition\",\"Megha\",\"Jain\",\"megha@yopmail.com\",\"megha@yopmail.com\",\"Megha_1132\",\"Chetu@123\" and \"Chetu@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_all_mandatory_fields(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clearing out any of the entered values",
  "keyword": "When "
});
formatter.match({
  "location": "SignupStepDefination.clearing_out_any_of_the_entered_values()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit button should be disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.submit_button_should_be_disabled()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat stepDefinations.SignupStepDefination.submit_button_should_be_disabled(SignupStepDefination.java:194)\r\n\tat ✽.submit button should be disabled(C:/CucumberFramework/src/main/java/Features/Signup.feature:92)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.sign_up_user_should_stay_in_sign_up_screen_1_only()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To verify submit button should be disabled right away after user redirects to the sign up screen 1.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit button should be disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.submit_button_should_be_disabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the sign up after passing the username which is already used to register account from sign up screen1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Faileds"
    }
  ]
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cEdition\u003e\",\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmail\u003e\",\"\u003cConfirmEmail\u003e\",\"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\" including \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.step({
  "name": "appropriate message in a pop up related to the username already exists should get displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Email",
        "ConfirmEmail",
        "Password",
        "ConfirmPassword",
        "Username"
      ]
    },
    {
      "cells": [
        "Free Edition",
        "C.P",
        "Gulati",
        "Cp@yopmail.com",
        "Cp@yopmail.com",
        "Chetu@123",
        "Chetu@123",
        "Priyanshua"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the sign up after passing the username which is already used to register account from sign up screen1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Faileds"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"Free Edition\",\"C.P\",\"Gulati\",\"Cp@yopmail.com\",\"Cp@yopmail.com\",\"Chetu@123\" and \"Chetu@123\" including \"Priyanshua\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_including_username_of_less_than_6_characters(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "SignupStepDefination.user_tries_to_sign_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "appropriate message in a pop up related to the username already exists should get displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_message_in_a_pop_up_related_to_the_username_already_exists_should_get_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.sign_up_user_should_stay_in_sign_up_screen_1_only()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the sign up after passing the invalid combination of passwords from sign up screen1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Failed"
    }
  ]
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cEdition\u003e\",\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmail\u003e\",\"\u003cConfirmEmail\u003e\",\"\u003cUsername\u003e\" and \"\u003cPassword\u003e\",\"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.step({
  "name": "appropriate validation message related to the invalid combinations of password should get displayed on the sign up page",
  "keyword": "Then "
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Email",
        "ConfirmEmail",
        "Username",
        "Password",
        "ConfirmPassword"
      ]
    },
    {
      "cells": [
        "Free Edition",
        "Megha",
        "Jain",
        "megha@yopmail.com",
        "megha@yopmail.com",
        "Megha_1132",
        "Chetu@123",
        "Chetu@1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the sign up after passing the invalid combination of passwords from sign up screen1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Failed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"Free Edition\",\"Megha\",\"Jain\",\"megha@yopmail.com\",\"megha@yopmail.com\",\"Megha_1132\" and \"Chetu@123\",\"Chetu@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_with_less_than_6_characters_passwords(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "SignupStepDefination.user_tries_to_sign_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "appropriate validation message related to the invalid combinations of password should get displayed on the sign up page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_validation_message_related_to_the_invalid_combinations_of_password_should_get_displayed_on_the_sign_up_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.sign_up_user_should_stay_in_sign_up_screen_1_only()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify the appearence of validation message if no data has been passed into the required textfields and clicking on submit button from sign up screen1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Failed"
    }
  ]
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user doesn\u0027t enter valid data into mandatory fields except \"\u003cEdition\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.step({
  "name": "appropriate validation message should get displayed into the sign up screen",
  "keyword": "Then "
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Edition"
      ]
    },
    {
      "cells": [
        "Free Edition"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the appearence of validation message if no data has been passed into the required textfields and clicking on submit button from sign up screen1.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Failed"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.TimeoutException: Timeout loading page after 20000ms\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHETUIWK255\u0027, ip: \u0027172.16.4.66\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0, capabilities: {desiredCapabilities: {acceptInsecureCerts: true, browserName: firefox}}, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190529145824, moz:headless: false, moz:processID: 16820, moz:profile: C:\\Users\\priyanshua\\AppData..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5c0097a7-0d40-4dd3-befe-38a94cd802c4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.qa.base.TestBase.initialization(TestBase.java:79)\r\n\tat stepDefinations.SignupStepDefination.setup(SignupStepDefination.java:40)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.before({
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinations.SignupStepDefination.signupclick(SignupStepDefination.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user doesn\u0027t enter valid data into mandatory fields except \"Free Edition\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_doesnt_enter_valid_data_into_mandatory_fields_except_Edition(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "SignupStepDefination.user_tries_to_sign_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "appropriate validation message should get displayed into the sign up screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_validation_message_should_get_displayed_into_the_sign_up_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "sign up user should stay in sign up screen 1 only",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.sign_up_user_should_stay_in_sign_up_screen_1_only()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "To verify whether user moves to the sign up screen 2 or not after passing the valid data into all the mandatory fields and from sign up screen1 and hitting the submit button.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cEdition\u003e\",\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmail\u003e\",\"\u003cConfirmEmail\u003e\",\"\u003cUsername\u003e\",\"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.step({
  "name": "user should move to sign up screen2",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Email",
        "ConfirmEmail",
        "Username",
        "Password",
        "ConfirmPassword"
      ]
    },
    {
      "cells": [
        "Free Edition",
        "Megha",
        "Jain",
        "megha@yopmail.com",
        "megha@yopmail.com",
        "Megha_1132",
        "Chetu@123",
        "Chetu@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify whether user moves to the sign up screen 2 or not after passing the valid data into all the mandatory fields and from sign up screen1 and hitting the submit button.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on Sign Up Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_Sign_Up_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"Free Edition\",\"Megha\",\"Jain\",\"megha@yopmail.com\",\"megha@yopmail.com\",\"Megha_1132\",\"Chetu@123\" and \"Chetu@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_all_mandatory_fields(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "SignupStepDefination.user_tries_to_sign_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should move to sign up screen2",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_should_move_to_sign_up_screen2()"
});
formatter.result({
  "status": "passed"
});
});