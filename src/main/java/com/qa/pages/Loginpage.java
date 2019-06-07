package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.qa.base.TestBase;
import com.qa.util.TestUtil;

public class Loginpage extends TestBase {
	
	@FindBy(how = How.NAME, using = "username")
    public WebElement username;

	@FindBy(how = How.NAME, using = "password")
	public WebElement password;

	@FindBy(how = How.XPATH, using = "//input[@class='btn btn-small']")
	public WebElement loginbtn;

	@FindBy(how = How.CSS, using = ".navbar-brand > img:nth-child(1)")
	public WebElement crmlogo;
	
	@FindBy(how = How.LINK_TEXT, using = "Sign Up")
	public WebElement signup;
	
		
	public Loginpage()
	{
		PageFactory.initElements(driver,this);
	}
	
	public String validateloginpagetitle()
	{
		return driver.getTitle();	
	}
	
	public boolean validatecrmimage()
	{
		return crmlogo.isDisplayed();
	}
	         
	public HomePage login(String user,String pass) throws InterruptedException
	{
		username.clear();
		username.sendKeys(user);
		password.clear();
		password.sendKeys(pass);
		Thread.sleep(5000);
		loginbtn.click();
		return new HomePage();
	}

	public SignupPage clickonsignup()
	{
		TestUtil.clickOn(driver,signup,30);
		return new SignupPage();
	}
}
