/**
 * TODO: Connect the waitlist to a form service before launch.
 * This preview only checks the email in the browser and shows a confirmation.
 * It does not send, store, or subscribe anyone.
 *
 * When you hook up Formspree, Buttondown, Mailchimp, or your own endpoint:
 * 1. Post the email and interests to that service.
 * 2. Replace the preview success copy.
 * 3. Update the note in index.html (#waitlist-note) so it matches what you store.
 */
(function () {
  "use strict";

  var chips = document.querySelectorAll(".chip");
  var groups = document.querySelectorAll(".catalog-group");
  var cards = document.querySelectorAll(".product");
  var status = document.getElementById("filter-status");

  var filterLabels = {
    all: "all placeholders",
    "food-sphynx": "Sphynx food",
    "food-all": "every-animal food",
    trees: "cat trees",
    clothes: "pet clothes"
  };

  function applyFilter(filter) {
    var count = 0;
    cards.forEach(function (card) {
      var show = filter === "all" || card.getAttribute("data-category") === filter;
      card.hidden = !show;
      if (show) count += 1;
    });
    groups.forEach(function (group) {
      group.hidden = !group.querySelector(".product:not([hidden])");
    });
    if (status) {
      var noun = count === 1 ? "product" : "products";
      status.textContent = "Showing " + count + " " + noun + " in " + (filterLabels[filter] || "this view") + ".";
    }
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (item) {
        item.setAttribute("aria-pressed", item === chip ? "true" : "false");
      });
      applyFilter(chip.getAttribute("data-filter"));
    });
  });

  var form = document.getElementById("waitlist-form");
  var email = document.getElementById("email");
  var error = document.getElementById("email-error");
  var fields = document.getElementById("waitlist-fields");
  var success = document.getElementById("waitlist-success");
  var successTitle = document.getElementById("success-title");
  var successDetail = document.getElementById("success-detail");
  var resetBtn = document.getElementById("waitlist-reset");

  function interestSentence(items) {
    if (!items.length) return "";
    if (items.length === 1) return " You marked " + items[0] + ".";
    return " You marked " + items.slice(0, -1).join(", ") + " and " + items[items.length - 1] + ".";
  }

  if (form && email && error && fields && success && successTitle && successDetail) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var value = email.value.trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!valid) {
        error.hidden = false;
        error.textContent = value
          ? "Enter an email address like name@example.com."
          : "Enter an email address to join the preview.";
        email.setAttribute("aria-invalid", "true");
        email.focus();
        return;
      }

      error.hidden = true;
      email.removeAttribute("aria-invalid");

      var picked = Array.prototype.map.call(
        form.querySelectorAll('input[name="interest"]:checked'),
        function (box) { return box.value; }
      );

      successDetail.textContent =
        value + " has not been sent anywhere. This page only confirmed it locally." +
        interestSentence(picked);

      fields.hidden = true;
      success.hidden = false;
      successTitle.focus();
    });
  }

  if (resetBtn && form && email && error && fields && success) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      email.removeAttribute("aria-invalid");
      error.hidden = true;
      success.hidden = true;
      fields.hidden = false;
      email.focus();
    });
  }
})();
