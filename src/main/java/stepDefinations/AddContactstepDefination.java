package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class AddContactstepDefination {
	WebDriver driver;
	
////Reg Exp:
////1. \"([^\"]*)\"
////2. \"(.*)\"
	
	@And("^user clicks on New Contact from the Contacts Tab$")
	public void user_clicks_on_New_Contact_from_the_Contacts_Tab()
	{
        driver.switchTo().frame("mainpanel");
		Actions actionobj=new Actions(driver);
		WebElement contacts=driver.findElement(By.xpath("//a[text()='Contacts']"));
		actionobj.moveToElement(contacts).build().perform();
		WebElement addnewcontacts=driver.findElement(By.linkText("New Contact"));
		addnewcontacts.click();
	}
	
	@SuppressWarnings("deprecation")
	@And("^user is on Add New Contact Screen$")
	public void user_is_on_Add_New_Contact_Screen()
	{
		WebElement firstname=driver.findElement(By.id("first_name"));
		Assert.assertTrue(firstname.isDisplayed());
	}
	
	@Then("^filling out \"(.*)\" and \"(.*)\" from the New Contact screen$")
	public void filling_out_firstname_and_lastname_from_the_New_Contact_screen(String first,String last)
	{
		WebElement firstname=driver.findElement(By.name("first_name"));
		firstname.clear();
		firstname.sendKeys(first);
		WebElement lastname=driver.findElement(By.name("surname"));
		lastname.clear();
		lastname.sendKeys(last);
		WebElement savebtn=driver.findElement(By.cssSelector("input[value='Save'][type='Submit']"));
		savebtn.click();
	}
	
	@SuppressWarnings("deprecation")
	@And("^making sure the \"(.*)\" gets added or not$")
	public void making_sure_the_contacts_gets_added_or_not(String fullname)
	{
		WebElement name=driver.findElement(By.xpath("//tr[2]//td[1]//table[1]//tbody[1]//tr[2]//td[2]"));
		String fullnames=name.getText();
		Assert.assertEquals(fullname,fullnames);

		
	}
	
	@Then("^logout from the application$")
	public void logout_from_the_application()
	{
		WebElement logoutbtn=driver.findElement(By.partialLinkText("Logo"));
		logoutbtn.click();
	}

	
	
	
	
}