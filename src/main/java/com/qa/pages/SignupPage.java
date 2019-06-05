package com.qa.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.qa.base.TestBase;

public class SignupPage extends TestBase {
	

	@FindBy(how = How.NAME, using = "first_name")
	public WebElement firstname;

	@FindBy(how = How.NAME, using = "surname")
	public WebElement lastname;
	
	@FindBy(how = How.NAME, using = "email")
	public WebElement email;
	
	@FindBy(how = How.NAME, using = "email_confirm")
	public WebElement confirmemail;
	
	@FindBy(how = How.NAME, using = "username")
	public WebElement username;
	
	@FindBy(how = How.NAME, using = "password")
	public WebElement password;
	
	@FindBy(how = How.NAME, using = "passwordconfirm")
	public WebElement confirmpassword;
	
	@FindBy(how = How.NAME, using = "agreeTerms")
	public WebElement tandC;
	
	@FindAll(@FindBy(how = How.XPATH, using = "//select[@id='payment_plan_id']//option"))
	public List<WebElement> slctedition;
	
	@FindBy(how = How.NAME, using = "submitButton")
	public WebElement submit;
	
	@FindBy(how = How.XPATH, using = "//small[contains(text(),'Please select one Edition mode')]")
	public WebElement edition_errormsg;
	
	@FindBy(how = How.XPATH, using = "//small[contains(text(),'Username must be at least 6 characters long')]")
	public WebElement username_errormsg;
	
	@FindBy(how = How.XPATH, using = "//small[contains(text(),'Password must be at least 6 characters long')]")
	public WebElement passwrd_errormsg;
	
	@FindBy(how = How.XPATH, using = "//small[contains(text(),'The mail and its confirm must be the same')]")
	public WebElement invalidcombination_errormsg;
	
	@FindBy(how = How.CSS, using = "//small[contains(text(),'Invalid Email Address')]")
	public WebElement invalidemail_errormsg;
	
	@FindBy(how = How.CSS, using = "//small[contains(text(),'The password and its confirm must be the same')]")
	public WebElement invalidpassw_errormsg;
	
	@FindBy(how = How.CSS, using = "//small[contains(text(),'Please enter your first name')]")
	public WebElement firstname_errormsg;
	
	@FindBy(how = How.CSS, using = "//small[contains(text(),'Please enter your surname')]")
	public WebElement lastname_errormsg;
	
	@FindBy(how = How.CSS, using = "//small[contains(text(),'Please enter your email address')]")
	public WebElement email_errormsg;
	
	@FindBy(how = How.CSS, using = "//small[contains(text(),'Please confirm your email address')]")
	public WebElement confirmemail_errormsg;
	
	@FindBy(how = How.CSS, using = "//small[contains(text(),'You must select a username')]")
	public WebElement usernames_errormsg;
	
	@FindBy(how = How.CSS, using = "//small[contains(text(),'You must select a password')]")
	public WebElement password_errormsg;
	
	@FindBy(how = How.CSS, using = "//small[contains(text(),'You must confirm your password')]")
	public WebElement confirmpassword_errormsg;
	
	@FindBy(how = How.CSS, using = "//small[contains(text(),'You must agree to the Terms and Conditions before ')]")
	public WebElement TandC_errormsg;
	
	@FindBy(how = How.ID, using = "//small[contains(text(),'You must agree to the Terms and Conditions before ')]")
	public WebElement editiontxt;
	
			
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
