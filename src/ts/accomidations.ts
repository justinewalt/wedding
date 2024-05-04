export function accomidations(element: HTMLDivElement) {
	element.innerHTML = `
    <div>
      	<h2>Accomodations</h2>
     	<h3>Baba Beach Club</h3>
      	<p>Click <a target="_blank" rel="noopener noreferrer" href="https://www.bababeachclub.com/lifestyle-travel/pink-and-justin-love-fest/">HERE</a> for a discount for staying at Baba Beach. is hosting our wedding at the Baan Chak building, if you stay here, tell them you're coming for our wedding and you'll get to pay 30% more!</p>
		<div id="rightJustify">
			<div class="google-maps">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1593.3241955214262!2d99.96996817352387!3d12.758377486128792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30fd0374f0153e71%3A0x5632d68149e24ac9!2sBaba%20Beach%20Club%20Hua%20Hin%20Luxury%20Pool%20Villa%20Hotel%20by%20Sri%20panwa!5e0!3m2!1sen!2sth!4v1713000451805!5m2!1sen!2sth"
					width="300"
					height="150"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
    </div>
`;
}


// add google maps iframe for baba beach
// add baba beach for venue and 
// should have separate venue section and 
// venue is technically Baan Chok so make that the venue section
// then for accommodations section do baba beach
