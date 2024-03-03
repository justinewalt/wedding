export function header(element: HTMLDivElement) {
  element.innerHTML = `
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Welcome</a>
        <a href="#schedule" class="text-sm font-semibold leading-6 text-gray-900">Schedule</a>
        <a href="#specialGuests" class="text-sm font-semibold leading-6 text-gray-900">Special Guests</a>
        <a href="#accomidations" class="text-sm font-semibold leading-6 text-gray-900">Accomidations</a>
        <a href="#weddings" class="text-sm font-semibold leading-6 text-gray-900">Weddings</a>
        <a href="#register" class="text-sm font-semibold leading-6 text-gray-900">Register</a>
      </nav>
    </header>
`;
}
