package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.qa.base.TestBase;

public class SignupPage extends TestBase {
	

	@FindBy(how = How.NAME, using = "first_name")
	public WebElement firstname;

	@FindBy(how = How.NAME, using = "surname")
	WebElement lastname;
	
	@FindBy(how = How.NAME, using = "email")
	WebElement email;
	
	@FindBy(how = How.NAME, using = "email_confirm")
	WebElement confirmemail;
	
	@FindBy(how = How.NAME, using = "username")
	WebElement username;
	
	@FindBy(how = How.NAME, using = "password")
	WebElement password;
	
	@FindBy(how = How.NAME, using = "passwordconfirm")
	WebElement confirmpassword;
	
	@FindBy(how = How.NAME, using = "agreeTerms")
	WebElement tandC;
	
	@FindBy(how = How.XPATH, using = "//select[@id='payment_plan_id']//option")
	WebElement slctedition;
	
	@FindBy(how = How.NAME, using = "submitButton")
	WebElement submit;
	
	
	public SignupPage()
	{
		PageFactory.initElements(driver,this);
	}
	
	public String validatesignupscreen()
	{
		String title=driver.getTitle();
		return title;
	}
	
	public SignUpPage2 signupsubmit()
	{
		submit.click();
		return new SignUpPage2();
	}
	
	
}
