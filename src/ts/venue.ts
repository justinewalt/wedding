export function venue(element: HTMLDivElement) {
  element.innerHTML = `
      <div>
        <h2>Venue</h2>
        <h3>Baan Chok</h3>
		<div class="google-maps">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945.6590349876121!2d99.96954738010062!3d12.757844197910723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2977ae0151a07%3A0x2e00d979ad5c748!2zQmFhbiBDaG9rIC0g4Lia4LmJ4Liy4LiZ4LmC4LiK4LiEIOC4q-C4seC4p-C4q-C4tOC4mQ!5e0!3m2!1sen!2sth!4v1713000605946!5m2!1sen!2sth"
				width="300"
				height="150"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
      </div>
    `;
}
