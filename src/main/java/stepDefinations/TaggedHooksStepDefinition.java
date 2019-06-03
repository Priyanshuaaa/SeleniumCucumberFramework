//package stepDefinations;
//
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class TaggedHooksStepDefinition {
//	//Global Hooks and should also give the ordering
//	//Too much of hooks are not a desirable mode
//	@Before(order=0)
//	public void setUP(){
//		System.out.println("launch FF");
//		System.out.println("Enter URL for Free CRM APP");
//	}
//
//	//Global Hooks
//	@After(order=0)
//	public void tearDown(){
//		System.out.println("close the browser");
//	}
//	
//	//Global Hooks
//	@Before(order=1)
//	public void setUP1(){
//		System.out.println("launch FF");
//		System.out.println("Enter URL for Free CRM APP");
//	}
//
//	//Global Hooks
//	@After(order=1)
//	public void tearDown1(){
//		System.out.println("close the browser");
//	}
//	
//	//Local Hooks
//	@Before("@First")
//	public void beforeFirst(){
//		System.out.println("before only first scenario");
//	}
//	
//	//Local Hooks
//	@After("@First")
//	public void afterFirst(){
//		System.out.println("after only first sceanrio");
//	}
//	
//	@Before("@Second")
//	public void beforeSecond(){
//		System.out.println("before only second scenario");
//	}
//	
//	@After("@Second")
//	public void afterSecond(){
//		System.out.println("after only second sceanrio");
//	}
//	
//	@Before("@Third")
//	public void beforeThird(){
//		System.out.println("before only third scenario");
//	}
//	
//	@After("@Third")
//	public void afterThird(){
//		System.out.println("after only third sceanrio");
//	}
//	
//	
//	@Given("^this is the first step$")
//	public void this_is_the_first_step() throws Throwable {
//		System.out.println("1st step");
//	}
//
//	@When("^this is the second step$")
//	public void this_is_the_second_step() throws Throwable {
//		System.out.println("2nd step");
//	}
//
//	@Then("^this is the third step$")
//	public void this_is_the_third_step() throws Throwable {
//		System.out.println("3rd step");
//	}
//	
//	
//	
//
//}