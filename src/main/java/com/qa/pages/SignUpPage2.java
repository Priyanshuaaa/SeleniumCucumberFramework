package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.qa.base.TestBase;

public class SignUpPage2 extends TestBase {
	
	@FindBy(how = How.XPATH, using = "//div[text()='Your company information and profile detail']")
	public WebElement heading;
	
	public SignUpPage2()
	{
		PageFactory.initElements(driver,this);
	}

}
