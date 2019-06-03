package stepDefinations;

import org.testng.Assert;

import com.qa.base.TestBase;
import com.qa.pages.HomePage;
import com.qa.pages.Loginpage;
import com.qa.util.TestUtil;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination extends TestBase{

	Loginpage loginpage;
	HomePage homepage;
	
	public LoginStepDefination()
	{
		super();
	}
	
	
	@Before
	public void setup()
	{
		initialization();
		loginpage=new Loginpage();	
		homepage=new HomePage();
	}
	
	@Given("^title of login Page is FREE CRM$")
	public void title_of_login_Page_is_FREE_CRM()
	{
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.",title);
	}

	@When("^user enters valid username and password$")
	public void user_enters_valid__Username_and_password() throws InterruptedException
	{
		loginpage.username.clear();
		loginpage.username.sendKeys(prop.getProperty("Username"));
		loginpage.password.clear();
		loginpage.password.sendKeys(prop.getProperty("Password"));
	}

	@Then("^user clicks on Login Button$")
	public void user_clicks_on_Login_Button() throws InterruptedException
	{
		Thread.sleep(5000);
		loginpage.loginbtn.click(); 
	}

	@And("^homepage is displayed$")
	public void homepage_is_displayed()
	{
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO",title);
	}
	
	@And("^validate logged in username$")
	public void validate_logged_in_username()
	{
		TestUtil.SwitchFrame();
		String username=homepage.usernamelabel.getText();
		Assert.assertTrue(username.contains("Priyanshu"));
	}
	
	@Then("^logout from the application$")
	public void logout_from_the_application() throws InterruptedException
	{
	   homepage.logout.click();	
	}
	
	@After
	public void tearDown()
	{
	   driver.quit();	
	}
}
