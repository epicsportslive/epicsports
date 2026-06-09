// ===============================
// PREMIUM BIO LINK JAVASCRIPT
// ===============================

// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 800);
    }
});

// ===============================
// THEME TOGGLE
// ===============================

const themeBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");

    if (themeBtn) {
        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';
    }
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

        themeBtn.innerHTML = isLight
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    });
}

// ===============================
// TOAST FUNCTION
// ===============================

function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// ===============================
// COPY PROFILE LINK
// ===============================

const copyBtn =
    document.getElementById("copyBtn");

if (copyBtn) {

    copyBtn.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(
                window.location.href
            );

            showToast(
                "Profile link copied successfully!"
            );

        } catch {

            showToast(
                "Unable to copy link."
            );
        }
    });
}

// ===============================
// SHARE PROFILE
// ===============================

const shareBtn =
    document.getElementById("shareBtn");

if (shareBtn) {

    shareBtn.addEventListener("click", async () => {

        const shareData = {
            title: document.title,
            text: "Check out my Bio Link page",
            url: window.location.href
        };

        if (navigator.share) {

            try {

                await navigator.share(
                    shareData
                );

            } catch {}

        } else {

            try {

                await navigator.clipboard.writeText(
                    window.location.href
                );

                showToast(
                    "Link copied for sharing!"
                );

            } catch {

                showToast(
                    "Sharing unavailable."
                );
            }
        }
    });
}

// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    const trigger =
        window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top =
            element.getBoundingClientRect().top;

        if (top < trigger) {
            element.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ===============================
// BACK TO TOP
// ===============================

const backTop =
    document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 500) {

        backTop.style.opacity = "1";
        backTop.style.visibility = "visible";

    } else {

        backTop.style.opacity = "0";
        backTop.style.visibility = "hidden";
    }
});

if (backTop) {

    backTop.style.opacity = "0";
    backTop.style.visibility = "hidden";

    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

// ===============================
// SOCIAL ICON HOVER EFFECT
// ===============================

document
.querySelectorAll(".socials a")
.forEach(icon => {

    icon.addEventListener(
        "mouseenter",
        () => {

            icon.style.transform =
                "translateY(-6px) scale(1.1)";
        }
    );

    icon.addEventListener(
        "mouseleave",
        () => {

            icon.style.transform =
                "translateY(0) scale(1)";
        }
    );
});

// ===============================
// LINK CARD ANIMATION
// ===============================

document
.querySelectorAll(".link-card")
.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-5px)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";
        }
    );
});

// ===============================
// NEWSLETTER DEMO
// ===============================

const newsletterForm =
    document.querySelector(
        ".newsletter form"
    );

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        e => {

            e.preventDefault();

            const email =
                newsletterForm.querySelector(
                    "input"
                );

            if (
                !email.value ||
                !email.value.includes("@")
            ) {

                showToast(
                    "Enter a valid email."
                );

                return;
            }

            showToast(
                "Subscribed successfully!"
            );

            email.value = "";
        }
    );
}

// ===============================
// VISITOR COUNTER DEMO
// ===============================

let visits =
    localStorage.getItem(
        "profileVisits"
    ) || 0;

visits++;

localStorage.setItem(
    "profileVisits",
    visits
);

console.log(
    "Local Visits:",
    visits
);

// ===============================
// PARALLAX EFFECT
// ===============================

window.addEventListener("mousemove", e => {

    const x =
        (window.innerWidth / 2 - e.pageX)
        / 40;

    const y =
        (window.innerHeight / 2 - e.pageY)
        / 40;

    document
    .querySelectorAll(".bg-blur")
    .forEach(blob => {

        blob.style.transform =
            `translate(${x}px, ${y}px)`;
    });
});

// ===============================
// PAGE TITLE EFFECT
// ===============================

let originalTitle =
    document.title;

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            document.title =
                "👋 Come Back!";

        } else {

            document.title =
                originalTitle;
        }
    }
);

// ===============================
// END
// ===============================
