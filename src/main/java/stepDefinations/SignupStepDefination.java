package stepDefinations;

import org.testng.Assert;

import com.qa.base.TestBase;
import com.qa.pages.HomePage;
import com.qa.pages.SignupPage;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class SignupStepDefination extends TestBase {

	SignupPage signup;
	HomePage homepage;
	
    //Reg Exp:
    //1. \"([^\"]*)\"
    //2. \"(.*)\"

	public SignupStepDefination()
	{
		super();
	}
	
	@Before
	public void setup()
	{
		initialization();
     	signup=new SignupPage();
     	homepage=new HomePage();
	}
	
	@Given("^user is already on Sign Up Screen$")
	public void user_is_already_on_Sign_Up_Screen()
	{
		String title=signup.validatesignupscreen(); 
		Assert.assertEquals("CRMPRO - CRM Pro for customer relationship management, sales, and support", title);
	}
	
	@When("^user tries to sign up$")
	public void user_tries_to_sign_up()
	{
		signup.signupsubmit();	
	}

	@And("^sign up user should stay in sign up screen 1 only$")
	public void sign_up_user_should_stay_in_sign_up_screen_1_only()
	{
		String title=signup.validatesignupscreen(); 
		Assert.assertTrue(title.contains("CRMPRO - CRM Pro for customer relationship management, sales, and support"));
	}
	
	@And("^user enters \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" and \"(.*)\" into mandatory fields except Edition$")
	public void user_enters_valid_data_into_mandatory_fields_except_Edition()
	{
		signup.firstname.clear();
		//signup.firstname.sendKeys(keysToSend);
	}
	
}
