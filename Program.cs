using System;
using System.Text;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace SeleniumTesting
{
    [TestFixture]
    public class Program
    {

        private IWebDriver driver;
        private StringBuilder verificationErrors;
        private string baseURL;

        [SetUp]
        public void SetupTest()
        {
            driver = new ChromeDriver();
            baseURL = "localhost/test/index.html";
            verificationErrors = new StringBuilder();
        }

        [Test]
        public void NoDaySelected_GivesError()
        {
            driver.Navigate().GoToUrl("http://localhost/final/index.html");
            IWebElement button = driver.FindElement(By.Id("submit"));
            button.Click();
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => d.FindElement(By.Id("days-error")).Displayed);
            driver.Close();
        }

        [Test]
        public void NoFirstName_GivesError()
        {
            driver.Navigate().GoToUrl("http://localhost/final/index.html");
            IWebElement button = driver.FindElement(By.Id("submit"));
            button.Click();
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => d.FindElement(By.Id("fName-error")).Displayed);
        }

        [Test]
        public void Input_DayOneOnePerson_Gives350()
        {
            driver.Navigate().GoToUrl("http://localhost/final/index.html");
            IWebElement button = driver.FindElement(By.Id("submit"));
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            button = driver.FindElement(By.Id("dayOne"));
            button.Click();
            button = driver.FindElement(By.Id("fName"));
            button.SendKeys("Josh");
            button = driver.FindElement(By.Id("lName"));
            button.SendKeys("Arnott");
            button = driver.FindElement(By.Id("city"));
            button.SendKeys("Guelph");
            button = driver.FindElement(By.Id("province"));
            button.SendKeys("ON");
            button = driver.FindElement(By.Id("code"));
            button.SendKeys("A1A 1A1");
            button = driver.FindElement(By.Id("phone"));
            button.SendKeys("555-555-5555");
            button = driver.FindElement(By.Id("email"));
            button.SendKeys("test@gmail.com");
            button = driver.FindElement(By.Id("people"));
            button.SendKeys("1");
            button = driver.FindElement(By.Id("submit"));
            button.Click();
            wait.Until(d => d.FindElement(By.Id("total")).Text == "Total: $350");

        }

        [Test]
        public void Input_DayOneSixPeople_Gives1890()
        {
            driver.Navigate().GoToUrl("http://localhost/final/index.html");
            IWebElement button = driver.FindElement(By.Id("submit"));
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            button = driver.FindElement(By.Id("dayOne"));
            button.Click();
            button = driver.FindElement(By.Id("fName"));
            button.SendKeys("Josh");
            button = driver.FindElement(By.Id("lName"));
            button.SendKeys("Arnott");
            button = driver.FindElement(By.Id("city"));
            button.SendKeys("Guelph");
            button = driver.FindElement(By.Id("province"));
            button.SendKeys("ON");
            button = driver.FindElement(By.Id("code"));
            button.SendKeys("A1A 1A1");
            button = driver.FindElement(By.Id("phone"));
            button.SendKeys("555-555-5555");
            button = driver.FindElement(By.Id("email"));
            button.SendKeys("test@gmail.com");
            button = driver.FindElement(By.Id("people"));
            button.SendKeys("6");
            button = driver.FindElement(By.Id("submit"));
            button.Click();
            wait.Until(d => d.FindElement(By.Id("total")).Text == "Total: $1890");

        }

        [Test]
        public void Input_BothDaysOnePerson_GivesTwoDays()
        {
            driver.Navigate().GoToUrl("http://localhost/final/index.html");
            IWebElement button = driver.FindElement(By.Id("submit"));
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            button = driver.FindElement(By.Id("dayOne"));
            button.Click();
            button = driver.FindElement(By.Id("dayTwo"));
            button.Click();
            button = driver.FindElement(By.Id("fName"));
            button.SendKeys("Josh");
            button = driver.FindElement(By.Id("lName"));
            button.SendKeys("Arnott");
            button = driver.FindElement(By.Id("city"));
            button.SendKeys("Guelph");
            button = driver.FindElement(By.Id("province"));
            button.SendKeys("ON");
            button = driver.FindElement(By.Id("code"));
            button.SendKeys("A1A 1A1");
            button = driver.FindElement(By.Id("phone"));
            button.SendKeys("555-555-5555");
            button = driver.FindElement(By.Id("email"));
            button.SendKeys("test@gmail.com");
            button = driver.FindElement(By.Id("people"));
            button.SendKeys("1");
            button = driver.FindElement(By.Id("submit"));
            button.Click();
            wait.Until(d => d.FindElement(By.Id("numDays")).Text == "Number of days: 2");

        }

        [Test]
        public void InvalidPostalCode_111111_GivesErorr()
        {
            driver.Navigate().GoToUrl("http://localhost/final/index.html");
            IWebElement button = driver.FindElement(By.Id("submit"));
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            button = driver.FindElement(By.Id("dayOne"));
            button.Click();
            button = driver.FindElement(By.Id("dayTwo"));
            button.Click();
            button = driver.FindElement(By.Id("fName"));
            button.SendKeys("Josh");
            button = driver.FindElement(By.Id("lName"));
            button.SendKeys("Arnott");
            button = driver.FindElement(By.Id("city"));
            button.SendKeys("Guelph");
            button = driver.FindElement(By.Id("province"));
            button.SendKeys("ON");
            button = driver.FindElement(By.Id("code"));
            button.SendKeys("111111");
            button = driver.FindElement(By.Id("phone"));
            button.SendKeys("555-555-5555");
            button = driver.FindElement(By.Id("email"));
            button.SendKeys("test@gmail.com");
            button = driver.FindElement(By.Id("people"));
            button.SendKeys("1");
            button = driver.FindElement(By.Id("submit"));
            button.Click();
            wait.Until(d => d.FindElement(By.Id("code-error")).Displayed);

        }

        [Test]
        public void InvalidEmail_notanemail_GivesErorr()
        {
            driver.Navigate().GoToUrl("http://localhost/final/index.html");
            IWebElement button = driver.FindElement(By.Id("submit"));
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            button = driver.FindElement(By.Id("dayOne"));
            button.Click();
            button = driver.FindElement(By.Id("dayTwo"));
            button.Click();
            button = driver.FindElement(By.Id("fName"));
            button.SendKeys("Josh");
            button = driver.FindElement(By.Id("lName"));
            button.SendKeys("Arnott");
            button = driver.FindElement(By.Id("city"));
            button.SendKeys("Guelph");
            button = driver.FindElement(By.Id("province"));
            button.SendKeys("ON");
            button = driver.FindElement(By.Id("code"));
            button.SendKeys("111111");
            button = driver.FindElement(By.Id("phone"));
            button.SendKeys("555-555-5555");
            button = driver.FindElement(By.Id("email"));
            button.SendKeys("notanemail");
            button = driver.FindElement(By.Id("people"));
            button.SendKeys("1");
            button = driver.FindElement(By.Id("submit"));
            button.Click();
            wait.Until(d => d.FindElement(By.Id("email-error")).Displayed);

        }

        [Test]
        public void InvalidPhoneNumber_555555555_GivesErorr()
        {
            driver.Navigate().GoToUrl("http://localhost/final/index.html");
            IWebElement button = driver.FindElement(By.Id("submit"));
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            button = driver.FindElement(By.Id("dayOne"));
            button.Click();
            button = driver.FindElement(By.Id("dayTwo"));
            button.Click();
            button = driver.FindElement(By.Id("fName"));
            button.SendKeys("Josh");
            button = driver.FindElement(By.Id("lName"));
            button.SendKeys("Arnott");
            button = driver.FindElement(By.Id("city"));
            button.SendKeys("Guelph");
            button = driver.FindElement(By.Id("province"));
            button.SendKeys("ON");
            button = driver.FindElement(By.Id("code"));
            button.SendKeys("111111");
            button = driver.FindElement(By.Id("phone"));
            button.SendKeys("555555555");
            button = driver.FindElement(By.Id("email"));
            button.SendKeys("test@gmail.com");
            button = driver.FindElement(By.Id("people"));
            button.SendKeys("1");
            button = driver.FindElement(By.Id("submit"));
            button.Click();
            wait.Until(d => d.FindElement(By.Id("phone-error")).Displayed);

        }

        [Test]
        public void Input_DayTwo_GivesOneDay()
        {
            driver.Navigate().GoToUrl("http://localhost/final/index.html");
            IWebElement button = driver.FindElement(By.Id("submit"));
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            button = driver.FindElement(By.Id("dayTwo"));
            button.Click();
            button = driver.FindElement(By.Id("fName"));
            button.SendKeys("Josh");
            button = driver.FindElement(By.Id("lName"));
            button.SendKeys("Arnott");
            button = driver.FindElement(By.Id("city"));
            button.SendKeys("Guelph");
            button = driver.FindElement(By.Id("province"));
            button.SendKeys("ON");
            button = driver.FindElement(By.Id("code"));
            button.SendKeys("A1A 1A1");
            button = driver.FindElement(By.Id("phone"));
            button.SendKeys("555-555-5555");
            button = driver.FindElement(By.Id("email"));
            button.SendKeys("test@gmail.com");
            button = driver.FindElement(By.Id("people"));
            button.SendKeys("1");
            button = driver.FindElement(By.Id("submit"));
            button.Click();
            wait.Until(d => d.FindElement(By.Id("numDays")).Text == "Number of days: 1");

        }

        [Test]
        public void Input_BothDaysOnePerson_750()
        {
            driver.Navigate().GoToUrl("http://localhost/final/index.html");
            IWebElement button = driver.FindElement(By.Id("submit"));
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            button = driver.FindElement(By.Id("dayOne"));
            button.Click();
            button = driver.FindElement(By.Id("dayTwo"));
            button.Click();
            button = driver.FindElement(By.Id("fName"));
            button.SendKeys("Josh");
            button = driver.FindElement(By.Id("lName"));
            button.SendKeys("Arnott");
            button = driver.FindElement(By.Id("city"));
            button.SendKeys("Guelph");
            button = driver.FindElement(By.Id("province"));
            button.SendKeys("ON");
            button = driver.FindElement(By.Id("code"));
            button.SendKeys("A1A 1A1");
            button = driver.FindElement(By.Id("phone"));
            button.SendKeys("555-555-5555");
            button = driver.FindElement(By.Id("email"));
            button.SendKeys("test@gmail.com");
            button = driver.FindElement(By.Id("people"));
            button.SendKeys("1");
            button = driver.FindElement(By.Id("submit"));
            button.Click();
            wait.Until(d => d.FindElement(By.Id("total")).Text == "Total: $750");

        }

        [TearDown]
        public void TeardownTest()
        {
            try
            {
                driver.Quit();
            }
            catch (Exception ex)
            {

            }
        }
    }
}
