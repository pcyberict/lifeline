const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("is-open");
    }
  });
}

const eventDate = new Date(2026, 10, 14);
const countdown = document.querySelector("#countdown");

if (countdown) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysUntil = Math.ceil((eventDate.getTime() - today.getTime()) / 86_400_000);

  if (daysUntil > 1) {
    countdown.textContent = `${daysUntil} days until the expo. See you there.`;
  } else if (daysUntil === 1) {
    countdown.textContent = "The expo is tomorrow. See you in Minna.";
  } else if (daysUntil === 0) {
    countdown.textContent = "The expo is today. Welcome to Minna.";
  } else {
    countdown.textContent = "The event date has passed. Thank you for your interest.";
  }
}

const calendarButton = document.querySelectorAll(".save-date");
const calendarStamp = new Date()
  .toISOString()
  .replace(/[-:]/g, "")
  .replace(/\.\d{3}/, "");
const calendarEvent = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Lifeline TradeHouse//Niger Traders Expo 2026//EN",
  "CALSCALE:GREGORIAN",
  "BEGIN:VEVENT",
  "UID:niger-traders-expo-2026@lifelinetradehouse",
  `DTSTAMP:${calendarStamp}`,
  "DTSTART;VALUE=DATE:20261114",
  "DTEND;VALUE=DATE:20261115",
  "SUMMARY:Niger Traders Expo 2026",
  "DESCRIPTION:Free forex trading expo by Lifeline TradeHouse Ltd.",
  "LOCATION:Posh Event Centre\\, Minna\\, Niger State\\, Nigeria",
  "END:VEVENT",
  "END:VCALENDAR",
].join("\r\n");

calendarButton.forEach((button) => {
  button.addEventListener("click", () => {
    const file = new Blob([calendarEvent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "niger-traders-expo-2026.ics";
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
});

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
