package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.qa.base.TestBase;

public class HomePage extends TestBase{
	
	Actions actionobj;

	@FindBy(how = How.XPATH, using = "//a[text()='Contactsgdggd']")
	@CacheLookup
	//The problem with cache look up is if the DOM gets chnaged,element will not be found and "No such element exception would come up"
	//or if the page gets refreshed somehow,then also stale element execption would come up.
	//Cache look uo is used if you ant to retrieve couple of times and is used in couple of tests,then you can use cache lookup,your script performance would be fast.
	
	public WebElement contactslink;

	@FindBy(how = How.XPATH, using = "//a[text()='Deals']")
	public WebElement dealslink;

	@FindBy(how = How.XPATH, using = "//a[text()='Tasks']")
	WebElement taskslink;

	@FindBy(how = How.XPATH, using = "//td[contains(text(),'User: Priyanshu Arora')]")
	public WebElement usernamelabel;
	
	@FindBy(how = How.LINK_TEXT, using = "New Contact")
	public WebElement newcontactslink;
	
	@FindBy(how = How.PARTIAL_LINK_TEXT, using = "Logo")
	public WebElement logout;
	
	@FindBy(how = How.LINK_TEXT, using = "Sign Up")
	public WebElement signup;
	
	public HomePage()
	{
		PageFactory.initElements(driver,this);
	}
	
	public Contactspage clickOncontactslink()
	{
		contactslink.click();
		return new Contactspage();
	}
	
	public TasksPage clickOntaskslink()
	{
		taskslink.click();
		return new TasksPage();
	}
	
	public DealsPage clickOndealslink()
	{
		dealslink.click();
		return new DealsPage();
	}
	
	public String verifytitle()
	{
		
		return driver.getTitle();
	}
	
	public boolean validateusername()
	{
		return usernamelabel.isDisplayed();	
	}
	
	public void clickonnewcontactlink()
	{
		actionobj=new Actions(driver);
		actionobj.moveToElement(contactslink).build().perform();
		newcontactslink.click();
		
	}
	
	public SignupPage clickonsignup()
	{
		signup.click();
		return new SignupPage();
	}
	
	
	

}
