const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async (event) => {
  // Prevent form submission
  event.preventDefault();
  const formData = new FormData(contactForm);
  // Convert FormData to a plain object
  const formObject = Object.fromEntries(formData.entries());

  // Stringify the object for JSON
  const jsonString = JSON.stringify(formObject);
  Swal.fire({
    title: 'Submitting your message...',
    html: '<div>We are processing your request. Please wait.</div>',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading(); // Show the loading spinner
    },
  });
  // Send data to the backend
  const response = await fetch("/contactus/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonString,
  });

  if (response.ok) {
    console.log("Form submitted successfully!");
    Swal.fire({
      title: "Success!",
      timer: 2200,
      text: "Thank you! Your message has been successfully submitted. We will get back to you soon.",
      icon: "success"
    });
    contactForm.reset();
    debugger
    const getAQuoteDialogBox = document.getElementById("get-a-quote-dialog");
    const cancelQuoteForm = document.getElementById("cancel-quote-form");
    const overlay = document.getElementById("overlay");
    if (cancelQuoteForm) {
   
        document.body.classList.remove("no-scroll"); // Enable background scroll
        overlay.classList.remove("show");
        getAQuoteDialogBox.classList.remove("show"); // Hide dialog
        getAQuoteDialogBox.setAttribute("aria-hidden", "true"); // Accessibility
     
    }

  } else {
    Swal.fire({
      icon: "error",
      timer: 2200,
      title: "Oops...",
      text: 'Sorry, Something went wrong, Please try again',
    });
  }
})