emailjs.init({
    publicKey: "W7Yushb-85gJXEPLd",
});

document.querySelectorAll("nav a").forEach(a => {
    a.onclick = e => {
        e.preventDefault();
        document.querySelector(a.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    };
});

const form = document.getElementById("quoteForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("email").value.trim();
    const project = document.getElementById("project").value.trim();

    try {
        await emailjs.send(
            "service_afbi1j3",
            "template_22n45zr",
            {
                name,
                contact,
                project
            }
        );

        alert("Quote request sent!");
        form.reset();
    } catch (error) {
        console.error(error);
        alert("Failed to send quote request.");
    }
});

const lastSubmit = localStorage.getItem("lastQuoteSubmit");

if (lastSubmit) {

    const elapsed = Date.now() - Number(lastSubmit);

    // 5 minute cooldown

    if (elapsed < 5 * 60 * 1000) {

        alert("Please wait a few minutes before submitting another quote request.");

        return;

    }

}