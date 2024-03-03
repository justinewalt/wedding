import "./css/style.css";
import { welcome } from "./ts/welcome.ts";
import { specialGuests } from "./ts/specialGuests.ts";
import { schedule } from "./ts/schedule.ts";
import { header } from "./ts/header.ts";
import { accomidations } from "./ts/accomidations.ts";
import { westernWedding } from "./ts/westernWedding.ts";
import { thaiWedding } from "./ts/thaiWedding.ts";
import { register } from "./ts/register.ts";
import { bigThanks } from "./ts/bigThanks.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div id="header"></div>
    <div id="welcome"></div>
    <div id="schedule"></div>
    <div id="specialGuests"></div>
    <div id="accomidations"></div>
    <div id="weddings"></div>
    <div id="thaiWedding"></div>
    <div id="westernWedding"></div>
    <div id="register"></div>
    <div id="bigThanks"></div>
  </div>
`;

header(document.querySelector<HTMLDivElement>("#header")!);
welcome(document.querySelector<HTMLDivElement>("#welcome")!);
schedule(document.querySelector<HTMLDivElement>("#schedule")!);
specialGuests(document.querySelector<HTMLDivElement>("#specialGuests")!);
accomidations(document.querySelector<HTMLDivElement>("#accomidations")!);
thaiWedding(document.querySelector<HTMLDivElement>("#thaiWedding")!);
westernWedding(document.querySelector<HTMLDivElement>("#westernWedding")!);
register(document.querySelector<HTMLDivElement>("#register")!);
bigThanks(document.querySelector<HTMLDivElement>("#bigThanks")!);