import "./css/style.css";
import { welcome } from "./ts/welcome.ts";
import { specialGuests } from "./ts/specialGuests.ts";
import { schedule } from "./ts/schedule.ts";
import { header } from "./ts/header.ts";
import { accomidations } from "./ts/accomidations.ts";
import { venue } from "./ts/venue.ts";
import { register } from "./ts/register.ts";
import { bigThanks } from "./ts/bigThanks.ts";
import { theCouple } from "./ts/theCouple.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div id="header"></div>
    <div id="welcome"></div>
    <div id="theCouple"></div>
    <div id="schedule"></div>
    <div id="specialGuests"></div>
    <div id="accomidations"></div>
    <div id="venue"></div>
    <div id="registerPage"></div>
    <div id="bigThanks"></div>
  </div>
`;

header(document.querySelector<HTMLDivElement>("#header")!);
welcome(document.querySelector<HTMLDivElement>("#welcome")!);
theCouple(document.querySelector<HTMLDivElement>("#theCouple")!);
schedule(document.querySelector<HTMLDivElement>("#schedule")!);
specialGuests(document.querySelector<HTMLDivElement>("#specialGuests")!);
accomidations(document.querySelector<HTMLDivElement>("#accomidations")!);
venue(document.querySelector<HTMLDivElement>("#venue")!);
register(document.querySelector<HTMLDivElement>("#registerPage")!);
bigThanks(document.querySelector<HTMLDivElement>("#bigThanks")!);