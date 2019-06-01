//package stepDefinations;
//
//import java.util.List;
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.And;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//@SuppressWarnings("deprecation")
//public class AddNewDealStepDefination {
//	WebDriver driver;
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
//	@Then("^user enters username and password$")
//	public void user_enters_Username_and_password(DataTable crdentials)
//	{
//		List<List<String>> lst=crdentials.raw();
//		WebElement Username=driver.findElement(By.name("username"));
//		WebElement Password=driver.findElement(By.name("password"));
//		Username.clear();
//		Username.sendKeys(lst.get(0).get(0));
//		Password.clear();
//		Password.sendKeys(lst.get(0).get(1));
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
//	@And("^user clicks on New Deals from the Deals Tab$")
//	public void user_clicks_on_New_Deals_from_the_Deals_Tab()
//	{
//        driver.switchTo().frame("mainpanel");
//		Actions actionobj=new Actions(driver);
//		WebElement contacts=driver.findElement(By.xpath("//a[text()='Deals']"));
//		actionobj.moveToElement(contacts).build().perform();
//		WebElement addnewcontacts=driver.findElement(By.linkText("New Deal"));
//		addnewcontacts.click();
//	}
//	
//	
//	@Then("^filling out Title,Company Name,Amount,Probability and Commission from the Add New Deals Screen$")
//	public void filling_out_Title_Company_Name_Amount_Probability_and_Commission_from_the_Add_New_Deals_Screen(DataTable crdentials)
//	{
//		 List<List<String>> lst=crdentials.raw();
//		 driver.findElement(By.id("title")).sendKeys(lst.get(0).get(0));
//		 driver.findElement(By.name("client_lookup")).sendKeys(lst.get(0).get(1));
//		 driver.findElement(By.id("amount")).sendKeys(lst.get(0).get(2));
//		 driver.findElement(By.id("probability")).sendKeys(lst.get(0).get(3));
//		 driver.findElement(By.id("commission")).sendKeys(lst.get(0).get(4));
//		 WebElement savebtn=driver.findElement(By.xpath("(//input[@type='submit'])[1]"));
//		 savebtn.click();
//	}
//	
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
//
//}
