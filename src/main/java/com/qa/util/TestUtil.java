package com.qa.util;
import com.qa.base.TestBase;

public class TestUtil extends TestBase{
	public static long pageloadtimeout=20;
	public static long IMPLICIT_WAIT=10;

	public static void SwitchFrame()
	{
	  driver.switchTo().frame("mainpanel");	
	}
	
	
}
