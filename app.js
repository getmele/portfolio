document.documentElement.classList.add("js");

/* =====================================================
   EDIT THIS PART: all your content lives here
   ===================================================== */
const CONFIG = {
  name: "Melese",
  email: "meleget89@gmail.com",
  photo: "images/me.jpg",
  cv: "cv.pdf",
  available: "Available for opportunities", // set to "" to hide the badge
  social: [
    { label: "GitHub", url: "https://github.com/your-username" },
    { label: "LinkedIn", url: "https://linkedin.com/in/your-username" },
    { label: "Instagram", url: "https://instagram.com/your-username" },
  ],
  roles: [
    "a Full-Stack Developer",
    "a React & Node.js Developer",
    "an AI App Builder",
  ],
  skills: [
    { name: "HTML", icon: "ti-brand-html5", cat: "Frontend" },
    { name: "CSS", icon: "ti-brand-css3", cat: "Frontend" },
    { name: "Bootstrap", icon: "ti-layout-grid", cat: "Frontend" },
    { name: "Tailwind CSS", icon: "ti-wind", cat: "Frontend" },
    { name: "JavaScript", icon: "ti-brand-javascript", cat: "Frontend" },
    { name: "React", icon: "ti-atom-2", cat: "Frontend" },
    { name: "Node.js", icon: "ti-brand-nodejs", cat: "Backend" },
    { name: "Express", icon: "ti-server-2", cat: "Backend" },
    { name: "MySQL", icon: "ti-database", cat: "Backend" },
    { name: "REST APIs", icon: "ti-api", cat: "Backend" },
    { name: "Git & GitHub", icon: "ti-brand-git", cat: "Tools" },
    { name: "Deployment", icon: "ti-rocket", cat: "Tools" },
    { name: "AI / RAG", icon: "ti-brain", cat: "AI" },
    { name: "LLM APIs", icon: "ti-robot", cat: "AI" },
  ],
  services: [
    {
      icon: "ti-code",
      title: "Full-stack web apps",
      text: "A React front end, a Node.js back end and a MySQL database working as one project.",
      tags: ["React", "Node.js", "MySQL"],
    },
    {
      icon: "ti-palette",
      title: "Frontend and styling",
      text: "Responsive, polished layouts built with plain CSS or a framework.",
      tags: ["CSS", "Bootstrap", "Tailwind"],
    },
    {
      icon: "ti-click",
      title: "Interactive interfaces",
      text: "Menus, forms, filters and live updates that respond as people use the page.",
      tags: ["JavaScript", "React", "DOM"],
    },
    {
      icon: "ti-brain",
      title: "AI-powered apps",
      text: "Chat and question answering that searches your own data.",
      tags: ["RAG", "LLM APIs"],
    },
    {
      icon: "ti-database-cog",
      title: "APIs and databases",
      text: "Secure Express APIs and MySQL schemas that stay fast as data grows.",
      tags: ["Express", "REST", "MySQL"],
    },
    {
      icon: "ti-rocket",
      title: "Deployment",
      text: "Putting the front end, back end and database online so people can use them.",
      tags: ["Render", "Vercel", "Git"],
    },
  ],
  // thumbnailImage = screenshot (click it to open the live site)
  // thumbnailUrl   = your hosted link from Render or Vercel. Leave "" until it is live.
  projects: [
    {
      title: "Evangadi AI-Powered Forum",
      description:
        "A question-and-answer forum where members post questions and get answers from an AI assistant that searches the forum's own knowledge base.",
      tech: ["React", "Node.js", "Express", "MySQL", "AI"],
      thumbnailImage: "images/evangadi.jpg",
      thumbnailUrl: "https://melese-ai-forum-frontend.vercel.app",
      github: "https://github.com/getmele/melese-ai-forum",
    },
    {
      title: "Netflix Clone",
      description:
        "A responsive Netflix-style interface with a featured banner, scrolling movie rows and trailers.",
      tech: ["React", "CSS", "REST API"],
      thumbnailImage: "images/netflix.jpg",
      thumbnailUrl: "",
      github: "",
    },
    {
      title: "ChatGPT Clone",
      description:
        "A chat app that sends your messages to an AI model and shows the conversation, like ChatGPT.",
      tech: ["React", "Node.js", "AI API", "MySQL"],
      thumbnailImage: "images/chatgpt.jpg",
      thumbnailUrl: "",
      github: "",
    },
    {
      title: "Garage Management System",
      description:
        "A system for a garage to register customers and vehicles, track repair jobs and manage services. Currently in development.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      thumbnailImage: "images/garage.jpg",
      thumbnailUrl: "",
      github: "",
    },
    {
      title: "Weather Forecast App",
      description:
        "An app that shows the current weather and a multi-day forecast for any city you search. Currently in development.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      thumbnailImage: "images/weather.jpg",
      thumbnailUrl: "",
      github: "",
    },
  ],
};
/* ===================== end of editable part ===================== */

const $ = (id) => document.getElementById(id);
const $$ = (sel) => [...document.querySelectorAll(sel)];
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = matchMedia("(hover: hover)").matches;

const ICONS = {
  GitHub:
    '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  LinkedIn:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  Instagram:
    '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
};

/* ---------- content ---------- */
function initPersonalInfo() {
  $$(".logo").forEach(
    (l) => (l.innerHTML = esc(CONFIG.name) + "<span>.</span>"),
  );
  $("aboutName").textContent = CONFIG.name;
  $("footName").textContent = CONFIG.name;
  $("initial").textContent = CONFIG.name.charAt(0);
  $("contactEmail").textContent = CONFIG.email;
  $("year").textContent = new Date().getFullYear();
  $("cv").href = CONFIG.cv;
  const badge = $("availability");
  CONFIG.available ? (badge.textContent = CONFIG.available) : badge.remove();
  const photo = $("photo");
  photo.onerror = () => photo.remove();
  photo.src = CONFIG.photo;
}

function initSocialLinks() {
  const html = CONFIG.social
    .map(
      (s) =>
        `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.label)}" title="${esc(s.label)}">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[s.label] || ""}</svg></a>`,
    )
    .join("");
  ["heroSocial", "social", "contactSocial", "footerSocial"].forEach(
    (id) => ($(id).innerHTML = html),
  );
}

function initStats() {
  const done = CONFIG.projects.filter((p) => p.status !== "In progress");
  const ai = done.filter((p) => p.tech.some((t) => t.includes("AI"))).length;
  const stats = [
    [done.length, "Projects built"],
    [CONFIG.skills.length, "Technologies"],
    [ai, "AI-powered apps"],
  ];
  $("stats").innerHTML = stats
    .map(
      (s) =>
        `<div class="stat"><b data-to="${s[0]}">${s[0]}</b><span>${esc(s[1])}</span></div>`,
    )
    .join("");
  if (reduceMotion) return;
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const el = e.target.querySelector("b"),
          to = +el.dataset.to,
          t0 = performance.now();
        (function step(now) {
          const p = Math.min((now - t0) / 1200, 1);
          el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        })(t0);
      }),
    { threshold: 0.6 },
  );
  $$(".stat").forEach((s) => {
    s.querySelector("b").textContent = "0";
    io.observe(s);
  });
}

function initSkills() {
  const cats = ["All", ...new Set(CONFIG.skills.map((s) => s.cat))];
  const tabs = $("tabs"),
    pills = $("pills");
  const draw = (cat) => {
    pills.innerHTML = CONFIG.skills
      .filter((s) => cat === "All" || s.cat === cat)
      .map(
        (s, i) =>
          `<span class="pill" style="animation-delay:${i * 40}ms"><i class="ti ${esc(s.icon)}"></i>${esc(s.name)}</span>`,
      )
      .join("");
    $$(".tab").forEach((t) => {
      t.classList.toggle("on", t.dataset.cat === cat);
      t.setAttribute("aria-selected", t.dataset.cat === cat);
    });
  };
  tabs.innerHTML = cats
    .map(
      (c) =>
        `<button class="tab" role="tab" data-cat="${esc(c)}">${esc(c)}</button>`,
    )
    .join("");
  tabs.addEventListener("click", (e) => {
    if (e.target.dataset.cat) draw(e.target.dataset.cat);
  });
  draw("All");
}

function initServices() {
  $("services-grid").innerHTML = CONFIG.services
    .map(
      (s) =>
        `<div class="svc"><div class="ico"><i class="ti ${esc(s.icon)}"></i></div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>
     <div class="chips">${s.tags.map((t) => `<i>${esc(t)}</i>`).join("")}</div></div>`,
    )
    .join("");
  $$(".svc").forEach((c) =>
    c.addEventListener("mousemove", (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--x", e.clientX - r.left + "px");
      c.style.setProperty("--y", e.clientY - r.top + "px");
    }),
  );
}

function initProjects() {
  $("projects-grid").innerHTML = CONFIG.projects
    .map((p) => {
      const live = p.thumbnailUrl;
      const media =
        `${esc(p.title.charAt(0))}<img src="${esc(p.thumbnailImage)}" alt="Screenshot of ${esc(p.title)}" loading="lazy" onerror="this.remove()">` +
        (live
          ? '<span class="go">Visit live site &#8599;</span>'
          : `<span class="soon">${esc(p.status || "Deploying soon")}</span>`);
      return `<article class="card">
      ${live ? `<a class="thumb" href="${esc(live)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(p.title)}">${media}</a>` : `<div class="thumb">${media}</div>`}
      <div class="info">
        <h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
        <div class="tags">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <div class="links">
          ${live ? `<a href="${esc(live)}" target="_blank" rel="noopener noreferrer">Live demo</a>` : ""}
          ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">Source code</a>` : ""}
        </div>
      </div></article>`;
    })
    .join("");
  if (reduceMotion || !canHover) return;
  $$(".card").forEach((c) => {
    c.addEventListener("mousemove", (e) => {
      const r = c.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width - 0.5,
        y = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px)`;
    });
    c.addEventListener("mouseleave", () => (c.style.transform = ""));
  });
}

/* ---------- behaviour ---------- */
function initHeader() {
  const header = $("header"),
    bar = $("progress"),
    top = $("toTop");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    header.classList.toggle("scrolled", scrollY > 20);
    top.classList.toggle("show", scrollY > 400);
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  top.addEventListener("click", () =>
    scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }),
  );
}

function initNavigation() {
  const burger = $("burger"),
    nav = $("nav"),
    links = $$(".nav-link");
  const close = () => {
    nav.classList.remove("open");
    burger.classList.remove("on");
    burger.setAttribute("aria-expanded", "false");
  };
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.classList.toggle("on", open);
    burger.setAttribute("aria-expanded", open);
  });
  links.forEach((l) => l.addEventListener("click", close));
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting)
          links.forEach((l) =>
            l.classList.toggle(
              "on",
              l.getAttribute("href") === "#" + e.target.id,
            ),
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  $$("main section").forEach((s) => io.observe(s));
}

function initTyping() {
  const el = $("typed"),
    roles = CONFIG.roles;
  if (reduceMotion) {
    el.textContent = roles[0];
    return;
  }
  let r = 0,
    i = 0,
    del = false;
  (function tick() {
    const word = roles[r];
    el.textContent = word.slice(0, i);
    if (!del && i === word.length) {
      del = true;
      return setTimeout(tick, 1600);
    }
    if (del && i === 0) {
      del = false;
      r = (r + 1) % roles.length;
    }
    i += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 80);
  })();
}

function initHeroGlow() {
  const hero = document.querySelector(".hero");
  if (reduceMotion || !canHover) return;
  hero.addEventListener("mousemove", (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", e.clientX - r.left + "px");
    hero.style.setProperty("--my", e.clientY - r.top + "px");
  });
}

function initReveal() {
  const els = $$(
    ".head, .photo, .about-grid > div:last-child, .tabs, .pills, .svc, .card, .cbox, .cform",
  );
  els.forEach((el, i) => {
    el.classList.add("rv");
    el.style.transitionDelay = (i % 3) * 90 + "ms";
  });
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        e.target.classList.add("in");
        setTimeout(() => {
          e.target.style.transitionDelay = "";
          e.target.classList.add("done");
        }, 900);
      }),
    { threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));
}

function initContactForm() {
  const form = $("contactForm"),
    status = $("formStatus");
  const say = (msg, type) => {
    status.textContent = msg;
    status.className = "form-status " + type;
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const name = f.get("name").trim(),
      email = f.get("email").trim(),
      message = f.get("message").trim();
    const subject = f.get("subject").trim() || "Portfolio message";
    if (!name || !email || !message)
      return say("Please fill in your name, email and message.", "err");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return say("Please enter a valid email address.", "err");
    const body = `${message}\n\nFrom: ${name} (${email})`;
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    say("Your email app should open now. Press send there to finish.", "ok");
    form.reset();
  });
}

function init() {
  initPersonalInfo();
  initSocialLinks();
  initStats();
  initSkills();
  initServices();
  initProjects();
  initHeader();
  initNavigation();
  initTyping();
  initHeroGlow();
  initReveal(); // runs last so it can see every card that was just built
  initContactForm();
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", init)
  : init();
