//constants
const cardContainer = document.getElementById("cardContainer");
const issuCounter = document.getElementById("issueCounter");
const buttons = document.querySelectorAll("#btnContainer .btn");
const openPing= document.getElementById("openPing");
const closedPing= document.getElementById("closedPing");
let allIssues = [];
//mobile menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}
//set acitive Button
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("btn-active", "text-white"));

    btn.classList.add("btn-active", "text-white");

    let filteredIssues;

    if (btn.id === "primaryBtn") {
      filteredIssues = allIssues;
      openPing.classList.remove("animate-ping");
      closedPing.classList.remove("animate-ping");

    } 
    else if (btn.id === "openBtn") {
      closedPing.classList.remove("animate-ping");
      openPing.classList.add("animate-ping");
      filteredIssues = allIssues.filter(issue => issue.status === "open");
    } 
    else if (btn.id === "closedBtn") {
      openPing.classList.remove("animate-ping");
      closedPing.classList.add("animate-ping");
      filteredIssues = allIssues.filter(issue => issue.status === "closed");
    }

    displayCards(filteredIssues);
  });
});

//fetch all issues api function
async function fetchAllIssues() {
  const response = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await response.json();
  allIssues = data.data;
  displayCards(allIssues);
}
//Priority Config
const priorityConfig = {
  high: {
    class:
      "badge badge-soft badge-error font-medium text-xs px-6 py-2 text-red-500",
    label: "High",
  },

  medium: {
    class:
      "badge badge-soft badge-warning font-medium text-xs px-6 py-2 text-yellow-600",
    label: "Medium",
  },

  low: {
    class: "badge badge-ghost text-gray-400 font-medium text-xs px-6 py-2",
    label: "Low",
  },
};
//badgeConfig
const badgeConfig = {
  bug: {
    class: "badge badge-error font-medium text-xs badge-outline",
    icon: "fa-solid fa-bug",
    label: "Bug",
  },

  warning: {
    class: "badge badge-outline badge-warning font-medium text-xs",
    icon: "fa-regular fa-life-ring",
    label: "Warning",
  },

  enhancement: {
    class:
      "badge badge-success badge-soft font-medium text-xs border border-green-300",
    icon: "fa-solid fa-ranking-star",
    label: "Enhancement",
  },

  documentation: {
    class: "badge badge-info badge-outline font-medium text-xs",
    icon: "fa-solid fa-book",
    label: "Documentation",
  },

  goodfirstissue: {
    class:
      "badge badge-primary badge-soft font-medium text-xs flex items-center gap-1 whitespace-nowrap px-3 py-2 border border-violet-500",
    icon: "fa-solid fa-seedling",
    label: "Good First Issue",
  },

  helpwanted: {
    class: "badge badge-accent badge-outline font-medium text-xs",
    icon: "fa-solid fa-hand-holding-heart",
    label: "Help Wanted",
  },
};
//create Priority
function createPriority(priority) {
  const config = priorityConfig[priority];

  if (!config) return "";

  return `
    <div class="${config.class}">
      ${config.label}
    </div>
  `;
}

//create badge
function createBadge(type) {
  const badge = badgeConfig[type.replace(/\s/g, "")];
  if (!badge) return "";
  return `
    <div class="${badge.class}">
      <i class="${badge.icon}"></i> ${badge.label}
    </div>
  `;
}
//render badges
function renderBadges(labels) {
  return labels.map((label) => createBadge(label)).join("");
}
//formate Data function
function formatDate(dateStr) {
  const date = new Date(dateStr);

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();

  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  minutes = minutes.toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}${ampm}`;
}
//displaycard function
function displayCards(issues) {
  const length = issues.length;
  issuCounter.innerText = length;
  cardContainer.innerHTML = "";
  for (const issue of issues) {
    const issuecard = document.createElement("div");
    if (issue.status == "open") {
      issuecard.classList =
        "bg-white shadow-md w-full max-w-xs flex flex-col justify-between p-4 rounded-md border-t-4 border-success min-h-96";
    } else {
      issuecard.classList =
        "bg-white shadow-md w-full max-w-xs flex flex-col justify-between p-4 rounded-md border-t-4 border-violet-400 min-h-96";
    }
    issuecard.innerHTML = `
                            <!-- Upper -->
                            <div class="p-4 pb-0 flex flex-col gap-4">
                                <!-- Top -->
                                <div class="flex flex-row justify-between">
                                    <div>
                                          <img src="${issue.status === "open" ? "../assets/Open-Status.png" : "../assets/close-status.png"}"
                                          alt="${issue.status}"
                                          class="w-6 h-6 sm:w-8 sm:h-8">
                                    </div>
                                    <div>
                                        ${createPriority(issue.priority)}
                                    </div>
                                </div>
                                <!-- bottom -->
                                 <div class="flex flex-col gap-2">
                                    <h1 class="text-base font-semibold text-gray-700 line-clamp-2">
                                        ${issue.title}
                                    </h1>
                                    <p class="text-sm font-normal text-gray-500 line-clamp-2">
                                        ${issue.description}
                                    </p>
                                    <div class="flex flex-row gap-2 flex-wrap">
                                      ${renderBadges(issue.labels)}
                                    </div>
                                 </div>
                            </div>
                            <div class="divider"></div>
                            <!-- Lower -->
                             <div class="flex flex-col p-4 gap-2 pt-0 text-sm font-normal text-gray-500">
                                <span>Author: ${issue.author}</span>
                                <span>Created at: ${formatDate(issue.createdAt)}</span>
                             </div> 
  `;
    cardContainer.appendChild(issuecard);
  }
}

fetchAllIssues();
