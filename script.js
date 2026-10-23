const eventStartsAt = new Date("2026-11-14T09:00:00+01:00").getTime();
const countdown = document.querySelector("#countdown");

function updateCountdown() {
  if (!countdown) return;
  const remaining = Math.max(0, eventStartsAt - Date.now());
  const values = {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining % 86_400_000) / 3_600_000),
    minutes: Math.floor((remaining % 3_600_000) / 60_000),
    seconds: Math.floor((remaining % 60_000) / 1_000),
  };
  for (const [unit, value] of Object.entries(values)) {
    const output = countdown.querySelector(`[data-unit="${unit}"]`);
    if (output) output.textContent = String(value).padStart(2, "0");
  }
  countdown.setAttribute(
    "aria-label",
    `${values.days} days, ${values.hours} hours, ${values.minutes} minutes, and ${values.seconds} seconds until the expo`,
  );
}

updateCountdown();
window.setInterval(updateCountdown, 1000);

const ticker = document.querySelector("#ticker-track");
if (ticker) {
  ticker.insertAdjacentHTML("beforeend", ticker.innerHTML);
  ticker.setAttribute("aria-hidden", "true");
}

const testimonials = [
  {
    name: "Ibrahim M.",
    role: "Student trader, Minna",
    quote: "Before Lifeline I was trading on guesses. The training on risk management completely changed how I trade.",
    result: "Consistent for 6 months",
    photo: "photo-1522529599102-193c0d76b5b6",
  },
  {
    name: "Fatima S.",
    role: "Beginner, now active",
    quote: "I started from zero. The mentors broke everything down step by step, and the e-books keep me learning.",
    result: "Beginner to active trader",
    photo: "photo-1613005341945-35e159e522f1",
  },
  {
    name: "Aisha B.",
    role: "Copy trading member",
    quote: "The team explained how copy trading works and the risks involved. I finally understand what I'm doing.",
    result: "Informed decisions",
    photo: "photo-1586171984069-1dbce3573a10",
  },
  {
    name: "Daniel O.",
    role: "Affiliate partner",
    quote: "I already had a community into trading. The affiliate programme gave me a professional way to serve them.",
    result: "Growing partner network",
    photo: "photo-1533108344127-a586d2b02479",
  },
  {
    name: "Chinedu A.",
    role: "Part-time trader, Abuja",
    quote: "I work a 9 to 5 and thought trading wasn't for me. Lifeline showed me how to trade around my schedule.",
    result: "Trading alongside his job",
    photo: "photo-1562173650-f61426fbe683",
  },
  {
    name: "Zainab Y.",
    role: "University student",
    quote: "The classes were so practical. I learned how to read charts properly instead of following random signals.",
    result: "Reads charts confidently",
    photo: "photo-1505421031134-e57263cae630",
  },
  {
    name: "Musa K.",
    role: "AI bot trading user",
    quote: "They were honest about what AI bots can and can't do. That honesty is why I trust this team.",
    result: "Smarter automation",
    photo: "photo-1659422440915-d516c6dc932e",
  },
  {
    name: "Blessing E.",
    role: "Entrepreneur, Minna",
    quote: "As a business owner, I wanted another income stream. The mentorship gave me a clear, disciplined plan.",
    result: "New income stream",
    photo: "photo-1620424037570-15137a4a562d",
  },
  {
    name: "Abdullahi T.",
    role: "Forex student",
    quote: "I blew two accounts before joining. Now I respect my stop loss and my account has stayed healthy.",
    result: "No more blown accounts",
    photo: "photo-1612720572242-fefde96650f6",
  },
  {
    name: "Grace N.",
    role: "Beginner trader",
    quote: "The community is so supportive. Anytime I'm confused, someone in the group is ready to explain.",
    result: "Learning with support",
    photo: "photo-1756588534346-e8899364757b",
  },
  {
    name: "Samuel I.",
    role: "Active trader, Kaduna",
    quote: "The live sessions are gold. Watching experienced traders analyse the market in real time taught me a lot.",
    result: "Sharper market analysis",
    photo: "photo-1614023342667-6f060e9d1e04",
  },
  {
    name: "Hauwa D.",
    role: "Copy trading member",
    quote: "I don't have time to watch charts all day. Copy trading with proper guidance works well for me.",
    result: "Hands-off growth",
    photo: "photo-1743871698163-a2e470d8eac7",
  },
  {
    name: "Emeka U.",
    role: "Investor",
    quote: "Lifeline focuses on education first, not hype. That is rare, and it's why I keep coming back.",
    result: "Long-term mindset",
    photo: "photo-1542276677-0aab41a6190f",
  },
  {
    name: "Maryam L.",
    role: "Affiliate partner",
    quote: "The affiliate programme is transparent and the team is always available when my referrals have questions.",
    result: "Earning commissions",
    photo: "photo-1600362445230-475b83f83ccf",
  },
  {
    name: "Yusuf G.",
    role: "Tech enthusiast",
    quote: "I came for the AI trading talk and stayed for the whole programme. Every session was worth my time.",
    result: "Full programme graduate",
    photo: "photo-1617440431587-138ca5c563ec",
  },
];

let testimonialIndex = 0;
const testimonialFields = {
  quote: document.querySelector("#testimonial-quote"),
  name: document.querySelector("#testimonial-name"),
  role: document.querySelector("#testimonial-role"),
  result: document.querySelector("#testimonial-result"),
  photo: document.querySelector("#testimonial-photo"),
  position: document.querySelector("#testimonial-position"),
};

function showTestimonial(index) {
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  const person = testimonials[testimonialIndex];
  testimonialFields.quote.textContent = person.quote;
  testimonialFields.name.textContent = person.name;
  testimonialFields.role.textContent = person.role;
  testimonialFields.result.textContent = person.result;
  testimonialFields.photo.src = `https://images.unsplash.com/${person.photo}?w=160&h=160&fit=crop&crop=faces&q=80`;
  testimonialFields.photo.alt = person.name;
  testimonialFields.position.textContent = `${String(testimonialIndex + 1).padStart(2, "0")} / ${String(testimonials.length).padStart(2, "0")}`;
}

document.querySelector("#testimonial-prev")?.addEventListener("click", () => {
  showTestimonial(testimonialIndex - 1);
});
document.querySelector("#testimonial-next")?.addEventListener("click", () => {
  showTestimonial(testimonialIndex + 1);
});

const animatedCounters = document.querySelectorAll("[data-count]");
const countObserver = new IntersectionObserver(
  (entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target;
      const target = Number(element.dataset.count);
      const suffix = element.dataset.suffix || "";
      const startedAt = performance.now();
      const duration = 1800;

      function animateCount(now) {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - (1 - progress) ** 4;
        element.textContent = `${Math.round(target * eased).toLocaleString()}${suffix}`;
        if (progress < 1) requestAnimationFrame(animateCount);
      }

      requestAnimationFrame(animateCount);
      observer.unobserve(element);
    }
  },
  { threshold: 0.45 },
);

animatedCounters.forEach((counter) => countObserver.observe(counter));

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
