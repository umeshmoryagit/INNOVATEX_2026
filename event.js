const eventsData = [
  {
    title: "CodeSprint 2026",
    category: "Hackathon",
    description: "48-hour intense hackathon focusing on AI, Web3, and Open Source solution builds."
  },
  {
    title: "RoboWars: Arena",
    category: "Robotics",
    description: "Custom combat bots duel in an enclosed steel arena for national supremacy."
  },
  {
    title: "PitchDeck Hunt",
    category: "Entrepreneurship",
    description: "Present your early-stage venture directly to angel investors and seed funds."
  },
  {
    title: "UI/UX Design Sprint",
    category: "Design",
    description: "Reimagine product interfaces under tight deadlines with real user testing metrics."
  },
  {
    title: "AlgoMaster 1.0",
    category: "Competitive Coding",
    description: "Speed algorithm contest testing data structure proficiency and efficiency."
  }
];

export function renderEvents() {
  const container = document.getElementById('events-container');
  if (!container) return;

  container.innerHTML = eventsData.map(event => `
    <div class="event-card">
      <div>
        <span class="event-tag">${event.category}</span>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
      </div>
      <a href="#register" class="btn btn-secondary btn-block">Register for Track</a>
    </div>
  `).join('');
}
