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
  "name": "user enters \"Megha\",\"Jain\",\"megha@yopmail.com\",\"megha@yopmail.com\",\"Megha_1132\",\"Chetu@123\" and \"Chetu@123\" into mandatory fields except Edition",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_except_Edition(String,String,String,String,String,String,String)"
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
  "name": "appropriate message in a pop up related to please select the Edition should get displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_message_in_a_pop_up_related_to_please_select_the_Edition_should_get_displayed()"
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
  "name": "user enters valid \"Free Edition\",\"C.P\",\"Gulati\",\"Cp@yopmail.com\",\"Cp@yopmail.com\",\"Chetu@123\" and \"Chetu@123\" including \"pampa\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_including_username_of_less_than_6_characters(String,String,String,String,String,String,String,String)"
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
  "name": "appropriate validation message related to the invalid username length should get displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_validation_message_related_to_the_invalid_username_length_should_get_displayed()"
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
  "name": "user enters valid \"Free Edition\",\"Megha\",\"Jain\",\"megha@yopmail.com\",\"megha@yopmail.com\",\"Megha_1132\" and \"1234\",\"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_with_less_than_6_characters_passwords(String,String,String,String,String,String,String,String)"
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
  "name": "appropriate validation message related to the invalid length of passwords should get displayed into the sign up screen 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_validation_message_related_to_the_invalid_length_of_passwords_should_get_displayed_into_the_sign_up_screen_1()"
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
  "name": "user enters valid data in \"Free Edition\",\"Megha\",\"Jain\",\"pampas_1132\",\"Chetu@123\" and \"Chetu@123\" and invalid \"megha@yopmail.com\",\"meghas@yopmail.com\" fields",
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
  "name": "appropriate validation message should get displayed related to the invalid combination of emails into the sign up screen 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_validation_message_should_get_displayed_related_to_the_invalid_combination_of_emails_into_the_sign_up_screen_1()"
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
  "name": "To verify the appearence of validation message after passing the invalid format of email address into both valid email and confirm email textfields from Signup Screen 1.",
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
    }
  ]
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
  "name": "user enters valid data into \"Free Edition\",\"Megha\",\"Jain\",\"megha@yopmail.com\",\"megha@yopmail.com\",\"Megha_1132\" fields expect passwords",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_expect_passwords(String,String,String,String,String,String)"
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
  "name": "submit button should be disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.submit_button_should_be_disabled()"
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
  "name": "submit button should be disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.submit_button_should_be_disabled()"
});
formatter.result({
  "status": "skipped"
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
    }
  ]
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
  "name": "user enters valid \"Free Edition\",\"C.P\",\"Gulati\",\"Cp@yopmail.com\",\"Cp@yopmail.com\",\"Chetu@123\" and \"Chetu@123\" including \"Priyanshua\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_including_username_of_less_than_6_characters(String,String,String,String,String,String,String,String)"
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
  "name": "appropriate message in a pop up related to the username already exists should get displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_message_in_a_pop_up_related_to_the_username_already_exists_should_get_displayed()"
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
  "name": "To validate the sign up after passing the invalid combination of passwords from sign up screen1.",
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
    }
  ]
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
  "name": "user enters valid \"Free Edition\",\"Megha\",\"Jain\",\"megha@yopmail.com\",\"megha@yopmail.com\",\"Megha_1132\" and \"Chetu@123\",\"Chetu@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_mandatory_fields_with_less_than_6_characters_passwords(String,String,String,String,String,String,String,String)"
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
  "name": "appropriate validation message related to the invalid combinations of password should get displayed on the sign up page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.appropriate_validation_message_related_to_the_invalid_combinations_of_password_should_get_displayed_on_the_sign_up_page()"
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
  "name": "To verify the appearence of validation message if no data has been passed into the required textfields and clicking on submit button from sign up screen1.",
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
    }
  ]
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
  "name": "user enters valid \"Free Edition\",\"Megha\",\"Jain\",\"megha@yopmail.com\",\"megha@yopmail.com\",\"Megha_1132\",\"Chetu@123\" and \"Chetu@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefination.user_enters_valid_data_into_all_mandatory_fields(String,String,String,String,String,String,String,String)"
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
  "name": "user should move to sign up screen2",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_should_move_to_sign_up_screen2()"
});
formatter.result({
  "status": "skipped"
});
});