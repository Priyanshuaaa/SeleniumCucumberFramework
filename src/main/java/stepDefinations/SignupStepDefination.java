package stepDefinations;

import org.openqa.selenium.Alert;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import com.qa.base.TestBase;
import com.qa.pages.HomePage;
import com.qa.pages.Loginpage;
import com.qa.pages.SignUpPage2;
import com.qa.pages.SignupPage;
import com.qa.util.TestUtil;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignupStepDefination extends TestBase {
 
	Loginpage login;
	SignupPage signup;
	HomePage homepage;
	SignUpPage2 signup2;
	
    //Reg Exp:
    //1. \"([^\"]*)\"
    //2. \"(.*)\"

	public SignupStepDefination()
	{
		super();
	}
	
	@Before(order=1)
	public void setup()
	{
		initialization();
     	signup=new SignupPage();
     	homepage=new HomePage();
     	signup2=new SignUpPage2();
     	login=new Loginpage();
	}
	
	@Before(order=2)
	public void signupclick() throws InterruptedException
	{
		Thread.sleep(5000);
		signup=login.clickonsignup();
	}
	
	@Given("^user is already on Sign Up Screen$")
	public void user_is_already_on_Sign_Up_Screen()
	{
		Assert.assertTrue(TestUtil.elementobedisplayed(driver,signup.editiontxt,20));
	}
	
	@When("^user tries to sign up$")
	public void user_tries_to_sign_up()
	{
		signup2=signup.signupsubmit();	
	}

	@And("^sign up user should stay in sign up screen 1 only$")
	public void sign_up_user_should_stay_in_sign_up_screen_1_only()
	{
		String title=signup.validatesignupscreen(); 
		Assert.assertTrue(title.contains("CRMPRO - CRM Pro for customer relationship management, sales, and support"));
	}
	
	@And("^user enters \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" and \"(.*)\" into mandatory fields except Edition$")
	public void user_enters_valid_data_into_mandatory_fields_except_Edition(String firstname,String lastname,String email,String confirmemail,String username,String password,String confirmpassword)
	{
		signup.firstname.clear();
		TestUtil.sendKeys(driver,signup.firstname,20,firstname);
		signup.lastname.clear();
		TestUtil.sendKeys(driver,signup.lastname,20,lastname);
		signup.email.clear();
		TestUtil.sendKeys(driver,signup.email,20,email);
		signup.confirmemail.clear();
		TestUtil.sendKeys(driver,signup.confirmemail,20,confirmemail);
		signup.username.clear();
		TestUtil.sendKeys(driver,signup.username,20,username);
		signup.password.clear();
		TestUtil.sendKeys(driver,signup.password,20,password);
		signup.confirmpassword.clear();
		TestUtil.sendKeys(driver,signup.confirmpassword,20,confirmpassword);
		TestUtil.clickOn(driver,signup.tandC,20);
	}
	
	@Then("^appropriate message in a pop up related to please select the Edition should get displayed$")
	public void appropriate_message_in_a_pop_up_related_to_please_select_the_Edition_should_get_displayed()
	{
		Assert.assertTrue(TestUtil.elementobedisplayed(driver,signup.edition_errormsg,20));
	}
	
	@And("^user enters valid \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" and \"(.*)\" including \"(.*)\"$")
	public void user_enters_valid_data_into_mandatory_fields_including_username_of_less_than_6_characters(String edition,String firstname,String lastname,String email,String confirmemail,String password,String confirmpassword,String username) throws InterruptedException
	{
		TestUtil.getelementsfromlist(driver,signup.slctedition,20,edition);
		signup.firstname.clear();
		TestUtil.sendKeys(driver,signup.firstname,20,firstname);
		signup.lastname.clear();
		TestUtil.sendKeys(driver,signup.lastname,20,lastname);
		signup.email.clear();
		TestUtil.sendKeys(driver,signup.email,20,email);
		signup.confirmemail.clear();
		TestUtil.sendKeys(driver,signup.confirmemail,20,confirmemail);
		signup.password.clear();
		TestUtil.sendKeys(driver,signup.password,20,password);
		signup.confirmpassword.clear();
		TestUtil.sendKeys(driver,signup.confirmpassword,20,confirmpassword);
		signup.username.clear();
		TestUtil.sendKeys(driver,signup.username,20,username);
		TestUtil.clickOn(driver,signup.tandC,20);
	}
	
	@Then("^appropriate validation message related to the invalid username length should get displayed$")
	public void appropriate_validation_message_related_to_the_invalid_username_length_should_get_displayed()
	{
		Assert.assertTrue(TestUtil.elementobedisplayed(driver,signup.username_errormsg,20));
	}
	
	@And("^user enters valid \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" and \"(.*)\",\"(.*)\"$")
	public void  user_enters_valid_data_into_mandatory_fields_with_less_than_6_characters_passwords(String edition,String firstname,String lastname,String email,String confirmemail,String username,String password,String confirmpassword) throws InterruptedException
	{
		TestUtil.getelementsfromlist(driver,signup.slctedition,20,edition);
		signup.firstname.clear();
		TestUtil.sendKeys(driver,signup.firstname,20,firstname);
		signup.lastname.clear();
		TestUtil.sendKeys(driver,signup.lastname,20,lastname);
		signup.email.clear();
		TestUtil.sendKeys(driver,signup.email,20,email);
		signup.confirmemail.clear();
		TestUtil.sendKeys(driver,signup.confirmemail,20,confirmemail);
		signup.username.clear();
		TestUtil.sendKeys(driver,signup.username,20,username);
		signup.password.clear();
		TestUtil.sendKeys(driver,signup.password,20,password);
		signup.confirmpassword.clear();
		TestUtil.sendKeys(driver,signup.confirmpassword,20,confirmpassword);
		TestUtil.clickOn(driver,signup.tandC,20);
	}
	
	@Then("^appropriate validation message related to the invalid length of passwords should get displayed into the sign up screen 1$")
	public void appropriate_validation_message_related_to_the_invalid_length_of_passwords_should_get_displayed_into_the_sign_up_screen_1()
	{
		Assert.assertTrue(TestUtil.elementobedisplayed(driver,signup.passwrd_errormsg,20));
	}
	
	@And("^user enters valid data in \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" and \"(.*)\" and invalid \"(.*)\",\"(.*)\" fields$")
	public void user_enters_valid_data_in_mandatory_fields_and_invalid_emails(String edition,String firstname,String lastname,String username,String password,String confirmpassword,String email,String confirmemail) throws InterruptedException
	{
		TestUtil.getelementsfromlist(driver,signup.slctedition,20,edition);
		signup.firstname.clear();
		TestUtil.sendKeys(driver,signup.firstname,20,firstname);
		signup.lastname.clear();
		TestUtil.sendKeys(driver,signup.lastname,20,lastname);
		signup.username.clear();
		TestUtil.sendKeys(driver,signup.username,20,username);
		signup.password.clear();
		TestUtil.sendKeys(driver,signup.password,20,password);
		signup.confirmpassword.clear();
		TestUtil.sendKeys(driver,signup.confirmpassword,20,confirmpassword);
		signup.email.clear();
		TestUtil.sendKeys(driver,signup.email,20,email);
		signup.confirmemail.clear();
		TestUtil.sendKeys(driver,signup.confirmemail,20,confirmemail);
		TestUtil.clickOn(driver,signup.tandC,20);
	}
	
	@And("^user enters valid data into \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" fields expect passwords$")
	public void user_enters_valid_data_into_mandatory_fields_expect_passwords(String edition,String firstname,String lastname,String email,String confirmemail,String username) throws InterruptedException
	{
		TestUtil.getelementsfromlist(driver,signup.slctedition,20,edition);
		signup.firstname.clear();
		TestUtil.sendKeys(driver,signup.firstname,20,firstname);
		signup.lastname.clear();
		TestUtil.sendKeys(driver,signup.lastname,20,lastname);
		signup.email.clear();
		TestUtil.sendKeys(driver,signup.email,20,email);
		signup.confirmemail.clear();
		TestUtil.sendKeys(driver,signup.confirmemail,20,confirmemail);
		signup.username.clear();
		TestUtil.sendKeys(driver,signup.username,20,username);
		TestUtil.clickOn(driver,signup.tandC,20);
	}
	
	@Then("^submit button should be disabled$")
	public void submit_button_should_be_disabled()
	{
		Assert.assertTrue(!signup.submit.isEnabled());
    }
	
	@Then("^appropriate validation message should get displayed related to the invalid combination of emails into the sign up screen 1$")
	public void appropriate_validation_message_should_get_displayed_related_to_the_invalid_combination_of_emails_into_the_sign_up_screen_1()
	{
		Assert.assertTrue(TestUtil.elementobedisplayed(driver,signup.invalidcombination_errormsg,20));
	}
	
	@Then("^appropriate validation message should get displayed related to the invalid format of emails into the sign up screen 1$")
	public void appropriate_validation_message_should_get_displayed_related_to_the_invalid_format_of_emails_into_the_sign_up_screen_1()
	{
		Assert.assertTrue(TestUtil.elementobedisplayed(driver,signup.invalidemail_errormsg,20));
	}
	
	@Then("^appropriate message in a pop up related to the username already exists should get displayed$")
	public void appropriate_message_in_a_pop_up_related_to_the_username_already_exists_should_get_displayed()
	{
            		
		    Alert alert=driver.switchTo().alert();
		    String errormsg=alert.getText();
		    System.out.println(errormsg);
		    Assert.assertTrue(errormsg.contains("Errors were encountered:"));
		    alert.accept();
	}
	
	@Then("^appropriate validation message related to the invalid combinations of password should get displayed on the sign up page$")
	public void appropriate_validation_message_related_to_the_invalid_combinations_of_password_should_get_displayed_on_the_sign_up_page()
	{
		Assert.assertTrue(TestUtil.elementobedisplayed(driver,signup.invalidpassw_errormsg,20));
	}
	
	@And("^user doesn't enter valid data into mandatory fields except \"(.*)\"$")
	public void user_doesnt_enter_valid_data_into_mandatory_fields_except_Edition(String edition) throws InterruptedException
	{
		TestUtil.getelementsfromlist(driver,signup.slctedition,20,edition);
	}
	
	@Then("^appropriate validation message should get displayed into the sign up screen$")
	public void appropriate_validation_message_should_get_displayed_into_the_sign_up_screen()
	{
		SoftAssert softassert=new SoftAssert();
		softassert.assertTrue(TestUtil.elementobedisplayed(driver,signup.firstname_errormsg,20));
		softassert.assertTrue(TestUtil.elementobedisplayed(driver,signup.lastname_errormsg,20));
		softassert.assertTrue(TestUtil.elementobedisplayed(driver,signup.email_errormsg,20));
		softassert.assertTrue(TestUtil.elementobedisplayed(driver,signup.confirmemail_errormsg,20));
		softassert.assertTrue(TestUtil.elementobedisplayed(driver,signup.usernames_errormsg,20));
		softassert.assertTrue(TestUtil.elementobedisplayed(driver,signup.password_errormsg,20));
		softassert.assertTrue(TestUtil.elementobedisplayed(driver,signup.confirmpassword_errormsg,20));
		softassert.assertTrue(TestUtil.elementobedisplayed(driver,signup.TandC_errormsg,20));
		softassert.assertAll();
	}
	
	@And("^user enters valid \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" and \"(.*)\"$")
	public void user_enters_valid_data_into_all_mandatory_fields(String edition,String firstname,String lastname,String email,String confirmemail,String username,String password,String confirmpassword) throws InterruptedException
	{
		TestUtil.getelementsfromlist(driver,signup.slctedition,20,edition);
		signup.firstname.clear();
		TestUtil.sendKeys(driver,signup.firstname,20,firstname);
		signup.lastname.clear();
		TestUtil.sendKeys(driver,signup.lastname,20,lastname);
		signup.email.clear();
		TestUtil.sendKeys(driver,signup.email,20,email);
		signup.confirmemail.clear();
		TestUtil.sendKeys(driver,signup.confirmemail,20,confirmemail);
		signup.username.clear();
		TestUtil.sendKeys(driver,signup.username,20,username);
		signup.password.clear();
		TestUtil.sendKeys(driver,signup.password,20,password);
		signup.confirmpassword.clear();
		TestUtil.sendKeys(driver,signup.confirmpassword,20,confirmpassword);
		TestUtil.clickOn(driver,signup.tandC,20);
	}
	
	@When("^clearing out any of the entered values$")
	public void clearing_out_any_of_the_entered_values() throws InterruptedException
	{
		signup.password.clear();
	}
		
	
	@Then("^user should move to sign up screen2$")
	public void user_should_move_to_sign_up_screen2()
	{
		Assert.assertTrue(TestUtil.elementobedisplayed(driver,signup2.heading,20));
	}
	
	@After
	public void teardown()
	{
		driver.quit();
	}	
}
