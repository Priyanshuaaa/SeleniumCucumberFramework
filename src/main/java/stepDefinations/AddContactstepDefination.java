package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;

public class AddContactstepDefination {
	Actions actionobj;
	WebDriver driver;
	
	
	@And("^user clicks on New Contact from the Contacts Tab$")
	public void user_clicks_on_New_Contact_from_the_Contacts_Tab()
	{
		actionobj=new Actions(driver);
		WebElement contacts=driver.findElement(By.xpath("//a[text()='Contacts']"));
		actionobj.moveToElement(contacts).build().perform();
		contacts.click();
	}
	//a[text()='Contacts']
}