const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AXwt9NVMlVwQKkE0bFbiSXPN2-FRt_AH-tbXspDr80V8JfqIbb3NL6quv4R-8C9Yykf9cAJGk6QHfuJf",
  client_secret: "EHMd347OYFffJJC1qRfg_lhvKlqfVwdHPmySCiiDONzfSSA7quXnN6D1XeaRVAZTdzARRCVccFGmF9W9",
});

module.exports = paypal;
