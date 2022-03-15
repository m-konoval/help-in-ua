/*!
=========================================================
* Rubic Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

const copyIBAN = async () => {
  const IBAN = "UA183052990262096400930364920";

  try {
    /* Copy the text inside the text field */
    await navigator.clipboard.writeText(IBAN);

    /* Alert the copied text */
    alert("Text copied: " + IBAN);
  } catch (e) {
    console.warn(e)
  }
};
