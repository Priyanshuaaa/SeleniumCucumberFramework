package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.qa.base.TestBase;

public class Contactspage  extends TestBase {
	
	@FindBy(how = How.NAME, using = "first_name")
	public WebElement firstname;
	
	@FindBy(how = How.NAME, using = "surname")
	public WebElement lastname;
	
	@FindBy(how = How.CSS, using = "input[value='Save'][type='Submit']")
	public WebElement savebutton;
	
	

	public Contactspage()
	{
		PageFactory.initElements(driver,this);
	}
	
	public void addnewcontact(String titles,String first,String last)
	{
		WebElement title=driver.findElement(By.name("title"));
		Select slcttitle=new Select(title);
		slcttitle.selectByVisibleText(titles);
		firstname.clear();
		firstname.sendKeys(first);
		lastname.clear();
		lastname.sendKeys(last);
		savebutton.click();	
	}
	
	
	

}
