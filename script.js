document.addEventListener("DOMContentLoaded", function () {
    const defaultTab = "hem"; // Standardtab om ingen är vald
    const savedTab = localStorage.getItem("activeTab") || defaultTab;
    openTab(savedTab);
});

function openTab(tabName) {
    // Hämta alla tabbar
    var tabs = document.querySelectorAll(".tab-content");

    // Dölj alla tabbar
    tabs.forEach(function (tab) {
        tab.classList.remove("active");
    });

    // Visa den valda tabben
    var selectedTab = document.getElementById(tabName);
    selectedTab.classList.add("active");

    // Ändra aktiva länkens stil
    var links = document.querySelectorAll("nav a");
    links.forEach(function (link) {
        link.classList.remove("active");
    });

    var selectedLink = document.querySelector(`a[onclick="openTab('${tabName}')"]`);
    if (selectedLink) {
        selectedLink.classList.add("active");
    }

    // Uppdatera sidans titel
    const tabTitles = {
        "hem": "DatorFixaren - Hem",
        "service": "DatorFixaren - Service",
        "about": "DatorFixaren - Om mig",
        "contact": "DatorFixaren - Kontakta mig"
    };
    document.title = tabTitles[tabName] || "DatorFixaren";

    // Spara aktuell tab i localStorage
    localStorage.setItem("activeTab", tabName);
}

// Växla mellan mörkt och ljust läge
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Växla mellan klasser
    const icon = document.getElementById('theme-toggle');
    
    if (body.classList.contains('dark-mode')) {
        icon.textContent = '🌞';  // Ändra texten på knappen till sol när mörkt läge är aktiverat
    } else {
        icon.textContent = '🌙';  // Ändra texten till måne när ljus läge är aktiverat
    }

    // Spara inställningen i localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.removeItem("darkMode");
    }
}

// Kolla om dark mode är aktiverat tidigare och applicera det
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    document.getElementById("theme-toggle").textContent = '🌞';  // Visa solsymbolen om mörkt läge är aktiverat
} else {
    document.body.classList.remove("dark-mode");
    document.getElementById("theme-toggle").textContent = '🌙';  // Visa månesymbolen om ljus läge är aktiverat
}

// Klicka på temat-knappen för att aktivera eller inaktivera dark mode
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
