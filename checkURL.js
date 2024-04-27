const url = document.getElementsByClassName(".urlInput").value;
const checkUrlButton = document.getElementById("checkbutton_url");
const resultField = document.querySelector("#result_url");

checkUrlButton.addEventListener("click", (url) => {
  const result = isMaliciousURL(url);
  console.log(url)
  console.log(result)
  if(result){
    resultField.innerText = 'This url is safe!';
}
else{
    resultField.innerText = 'This can be a dangerous URL!';
}
});

function isMaliciousURL(url) {
  console.log("clk");
  // Check if URL starts with "http://" or "https://"
  if (!/^https?:\/\//i.test(url)) {
    return true; // Not a valid URL format
  }

  // Check if the domain is in a blacklist of known malicious domains
  const maliciousDomains = [
    "malicious.com",
    "phishing.net",
    "evil.org",
    // Add more malicious domains to this list as needed
  ];

  const domain = new URL(url).hostname;
  if (maliciousDomains.includes(domain)) {
    return true; // Domain is blacklisted
  }

  // Check if URL contains suspicious keywords or patterns
  const suspiciousKeywords = [
    "admin",
    "login",
    "paypal",
    "password",
    // Add more suspicious keywords or patterns here
  ];

  const lowerCaseURL = url.toLowerCase();
  if (suspiciousKeywords.some((keyword) => lowerCaseURL.includes(keyword))) {
    return true; // URL contains suspicious keyword
  }

  // No issues found, URL is considered safe
  return false;
}
