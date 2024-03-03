export function register(element: HTMLDivElement) {
  element.innerHTML = `
    <div class="container mx-auto p-4">
            <form
                id="register"
                  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        I, your name here
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="Name" type="text" autocomplete="name" placeholder="Your Name">
                    and
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        your email so we can send a quick update before our wedding date
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="Email"  type="email" autocomplete="email" placeholder="Email">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="attendance">
                        am attending
                    </label>
                    <select class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="AttendingYesNo" id="attendanceOptions">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="attendance">
                        and will be brining "x" guests with me (babies count too)
                    </label>
                    <select class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="NumberOfGuests" id="attendance">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="song">
                      I'll go to the dance floor if I hear this song
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="song" name="Song" type="text" placeholder="Bohemian Rhapsody">
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
        <div id="spinner" style="display:none;">Loading...</div>
    `;
}

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register") as HTMLFormElement;
  const spinner = document.getElementById("spinner") as HTMLElement;

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    spinner.style.display = "block"; // Show spinner
    form.style.display = "none"; // hide form

    console.log(`what is form`, form);
    const formData = new FormData(form);

    // Replace '/your-endpoint' with the actual endpoint you're submitting the form to
    try {
      console.log(`what is form data? `, formData);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw-v1Us68ijcAijONyJLxXrHAOxuC2SgbHQ1BUf4xexS3K1KT3hRRijGQvUXPsmGGgCgA/exec",
        {
          method: "POST",
          body: formData,
        },
      );
      if (response.ok) {
        // Handle success, hide spinner
        console.log("Form submitted successfully");
        spinner.style.display = "none";
        // You might want to clear the form or redirect the user
      } else {
        // Handle server errors or invalid responses
        console.error("Server responded with an error");
        spinner.style.display = "none";
      }
    } catch (error) {
      // Handle network errors
      console.error("Submission failed", error);
      spinner.style.display = "none";
    }
  });
});
