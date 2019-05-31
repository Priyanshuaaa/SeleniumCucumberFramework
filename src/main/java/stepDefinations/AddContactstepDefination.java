//package stepDefinations;
//
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//import cucumber.api.java.en.And;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//@SuppressWarnings("deprecation")
//public class AddContactstepDefination {
//	WebDriver driver;
//	
//////Reg Exp:
//////1. \"([^\"]*)\"
//////2. \"(.*)\"
//	
//	@Given("^user is already on login Page$")
//	public void user_is_already_on_login_Page()
//	{
//		System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.manage().deleteAllCookies();
//		driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
//		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//		driver.get("https://www.crmpro.com/index.html");
//	}
//
//	@When("^title of login Page is FREE CRM$")
//	public void title_of_login_Page_is_FREE_CRM()
//	{
//		String title=driver.getTitle();
//		System.out.println(title);
//		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.",title);
//	}
//
//	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void user_enters_Username_and_password(String username,String password)
//	{
//		WebElement Username=driver.findElement(By.name("username"));
//		WebElement Password=driver.findElement(By.name("password"));
//		Username.clear();
//		Username.sendKeys(username);
//		Password.clear();
//		Password.sendKeys(password);
//	}
//
//	@Then("^user clicks on Login Button$")
//	public void user_clicks_on_Login_Button() throws InterruptedException
//	{
//		Thread.sleep(5000);
//		WebElement loginbtn=driver.findElement(By.xpath("//*[@id=\"loginForm\"]/div/div/input"));
//		loginbtn.click();
//	}
//
//	@And("^user is on home page$")
//	public void user_is_on_home_page()
//	{
//		String title=driver.getTitle();
//		System.out.println(title);
//		Assert.assertEquals("CRMPRO",title);
//
//	}
//	
//	@And("^user clicks on New Contact from the Contacts Tab$")
//	public void user_clicks_on_New_Contact_from_the_Contacts_Tab()
//	{
//        driver.switchTo().frame("mainpanel");
//		Actions actionobj=new Actions(driver);
//		WebElement contacts=driver.findElement(By.xpath("//a[text()='Contacts']"));
//		actionobj.moveToElement(contacts).build().perform();
//		WebElement addnewcontacts=driver.findElement(By.linkText("New Contact"));
//		addnewcontacts.click();
//	}
//	
//	@And("^user is on Add New Contact Screen$")
//	public void user_is_on_Add_New_Contact_Screen()
//	{
//		WebElement firstname=driver.findElement(By.id("first_name"));
//		Assert.assertTrue(firstname.isDisplayed());
//	}
//	
//	@Then("^filling out \"(.*)\" and \"(.*)\" from the New Contact screen$")
//	public void filling_out_firstname_and_lastname_from_the_New_Contact_screen(String first,String last)
//	{
//		WebElement firstname=driver.findElement(By.name("first_name"));
//		firstname.clear();
//		firstname.sendKeys(first);
//		WebElement lastname=driver.findElement(By.name("surname"));
//		lastname.clear();
//		lastname.sendKeys(last);
//		WebElement savebtn=driver.findElement(By.cssSelector("input[value='Save'][type='Submit']"));
//		savebtn.click();
//	}
//	
//	@And("^making sure the \"(.*)\" gets added or not$")
//	public void making_sure_the_contacts_gets_added_or_not(String fullname)
//	{
//		WebElement name=driver.findElement(By.xpath("//tr[2]//td[1]//table[1]//tbody[1]//tr[2]//td[2]"));
//		String fullnames=name.getText();			
//		Assert.assertTrue(fullnames.contains(fullname));
//	}
//	
//	@Then("^logout from the application$")
//	public void logout_from_the_application()
//	{
//		WebElement logoutbtn=driver.findElement(By.partialLinkText("Logo"));
//		logoutbtn.click();
//	}
//	
//	@And("^then user quits the browser$")
//	public void then_user_quits_the_browser()
//	{
//	  driver.quit();	
//	}
//
//}