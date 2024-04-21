export function header(element: HTMLDivElement) {
	element.innerHTML = `
		<header>
			<nav class="topnav" id="myNavHeader">
				<a href="#" class="nav-link">Welcome</a>
				<a href="#schedule" class="nav-link">Schedule</a>
				<a href="#specialGuests" class="nav-link">Special Guests</a>
				<a href="#accomidations" class="nav-link">Accomidations</a>
				<a href="#venue" class="nav-link">Venue</a>
				<a href="#register" class="nav-link">RSVP</a>
				<a href="javascript:void(0);" class="icon" id="menuIcon">
					<i class="fa fa-bars"></i>
				</a>
			</nav>
		</header>
	`;

	// This function toggles the "responsive" class for the menu
	const toggleMenu = () => {
		const myMenu = document.getElementById("myNavHeader");
		if (myMenu) {
			myMenu.classList.toggle("responsive");
		}
	};

	// Attach event listener to menu icon for toggling menu visibility
	const menuIcon = document.getElementById("menuIcon");
	if (menuIcon) {
		menuIcon.addEventListener('click', toggleMenu);
	}

	// Attach event listeners to each nav link to close the menu upon clicking
	const navLinks = document.querySelectorAll('.nav-link');
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			const myMenu = document.getElementById("myNavHeader");
			if (myMenu && myMenu.classList.contains('responsive')) {
				myMenu.classList.remove('responsive');
			}
		});
	});
}
