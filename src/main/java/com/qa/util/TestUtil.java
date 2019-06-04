package com.qa.util;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.qa.base.TestBase;

public class TestUtil extends TestBase{
	public static long pageloadtimeout=20;
	public static long IMPLICIT_WAIT=10;

	public static void SwitchFrame()
	{
	  driver.switchTo().frame("mainpanel");	
	}
	
	public static void clickOn(WebDriver driver, WebElement element, int timeout) {
		new WebDriverWait(driver, timeout).
		until(ExpectedConditions.elementToBeClickable(element));
		element.click();
	}
	
	public static void sendKeys(WebDriver driver, WebElement element, int timeout, String value) {
		new WebDriverWait(driver, timeout).
		until(ExpectedConditions.visibilityOf(element));
		element.sendKeys(value);
	}
	
	public static String getElementText(WebDriver driver, WebElement element, int timeout) {
		new WebDriverWait(driver, timeout).
		until(ExpectedConditions.visibilityOf(element));
		return element.getText();
	}
	
	public static void elementoselect(WebDriver driver, WebElement element, int timeout) {
		new WebDriverWait(driver, timeout).
		until(ExpectedConditions.elementToBeSelected(element));
		element.click();
      }
	
	public static boolean elementobedisplayed(WebDriver driver, WebElement element, int timeout) {
		new WebDriverWait(driver,timeout).
		until(ExpectedConditions.visibilityOf(element));
		return element.isDisplayed();
      }
	
	public static boolean elementselect(WebDriver driver, WebElement element, int timeout) {
		new WebDriverWait(driver,timeout).
		until(ExpectedConditions.elementToBeSelected(element));
		return element.isSelected();
      }
	
	
	
	public static void getelementsfromlist(WebDriver driver,List<WebElement> element,int timeout,String value) throws InterruptedException
	{
		new WebDriverWait(driver,timeout).
		until(ExpectedConditions.visibilityOfAllElements(element));
		List<WebElement> lst=element;
		int lstsize=lst.size();
	    for(int i=0;i<=lstsize;i++)
	    {
	    	if(lst.get(i).getText().contains(value))
	    	{
	    		lst.get(i).click();
	    		break;
	    	}
	    	
	    	
	    }       
	    Thread.sleep(5000);
		}	
	
	public static void pagination(WebDriver driver,List<WebElement> element,int timeout,String value) throws InterruptedException
	{
		new WebDriverWait(driver,timeout).
		until(ExpectedConditions.visibilityOfAllElements(element));
		List<WebElement> lst=element;
		WebElement totalrecords=driver.findElement(By.xpath("(//span[@class='t-font-weight-bold'])[2]"));
		String totalcount=totalrecords.getText();
		int totalpages=Integer.parseInt(totalcount)/40;
		int lstsize=lst.size();
		for(int j=1;j<=totalpages;j++)
		{
	    for(int i=0;i<=lstsize;i++)
	    {
	    	if(lst.get(i).getText().equalsIgnoreCase(value))
	    	{
	    		lst.get(i).click();
	    		break;
	    	}
	    }    
		driver.findElement(By.xpath("(//span[@class='t-font-weight-bold'])["+j+"]")).click();
		}
	    Thread.sleep(5000);
	    
		}

	public static String searchtextofelement(WebDriver driver,List<WebElement> element,int timeout,String value) throws InterruptedException
	{
		new WebDriverWait(driver,timeout).
		until(ExpectedConditions.visibilityOfAllElements(element));
		List<WebElement> lst=element;
		int lstsize=lst.size();
		System.out.println(lstsize);
	    for(int i=0;i<lstsize;i++)
	    {
	    	if(lst.get(i).getText().contains(value))
	    	{
	    	  System.out.println(value);
              break;
	    	}
	    	
	    }
	    Thread.sleep(2000);
		return value; 		
	}	
	
	
}
