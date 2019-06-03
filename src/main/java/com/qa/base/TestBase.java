package com.qa.base;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Reporter;

import com.qa.util.TestUtil;


public class TestBase {
	public static WebDriver driver;
	public static Properties prop;

	
	
	public TestBase()
	{
		 prop = new Properties();
			try {
				File file = new File("C:\\CucumberFramework\\src\\main\\java\\com\\qa\\config\\config.properties");
				FileInputStream filein = new FileInputStream(file);
				prop.load(filein);
				filein.close();
			} 
			catch(FileNotFoundException e)
			{
				e.printStackTrace();

			}
			catch (IOException e) {
				Reporter.log(e.getLocalizedMessage());
	}
			
	}
			

	public static void initialization()
	{
		String browser=prop.getProperty("BrowserName");
		if(browser.equalsIgnoreCase("Mozilla"))
		{
			System.setProperty("webdriver.gecko.driver", "Driver/geckodriver.exe");
			driver=new FirefoxDriver();
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
		}
		else if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
		} 
		else if (browser.equalsIgnoreCase("edge")) {
			System.setProperty("webdriver.edge.driver", "Drivers/MicrosoftWebDriver.exe");
			WebDriver driver = new EdgeDriver();
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
		}
		
		else {
			try {
				throw new Exception("Please provide correct browser/browser name");
			} catch (Exception e) {
				Reporter.log(e.getLocalizedMessage());
			}
		}
		

	driver.manage().timeouts().pageLoadTimeout(TestUtil.pageloadtimeout,TimeUnit.SECONDS);
	driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT,TimeUnit.SECONDS);
	driver.get(prop.getProperty("URL"));
	
}
	}
		
	


