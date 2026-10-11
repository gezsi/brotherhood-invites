// Native disclosure sections remain readable without JavaScript. A deep link
// additionally opens its section; no analytics, cookies or account requests.
function revealSection() {
  const section = document.getElementById(location.hash.slice(1));
  if (section instanceof HTMLDetailsElement) {
    section.open = true;
    section.scrollIntoView({block: 'start'});
  }
}
addEventListener('hashchange', revealSection);
revealSection();
