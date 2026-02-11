function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sayYes() {
    document.getElementById("celebration").style.display = "flex";
    document.getElementById("celebration").scrollIntoView({ behavior: "smooth" });
}

// Make NO button run away 😈
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";
});
const heart = document.getElementById("pullHeart");

heart.addEventListener("mousedown", () => {
    heart.style.transform = "translateY(40px)";
    createButterflies();
});

heart.addEventListener("mouseup", () => {
    heart.style.transform = "translateY(0)";
});

// Create butterflies
function createButterflies() {
    for (let i = 0; i < 12; i++) {
        const butterfly = document.createElement("div");
        butterfly.classList.add("butterfly");
        butterfly.innerText = "🦋";

        butterfly.style.left = Math.random() * window.innerWidth + "px";
        butterfly.style.animationDuration = (3 + Math.random() * 3) + "s";

        document.body.appendChild(butterfly);

        setTimeout(() => {
            butterfly.remove();
        }, 6000);
    }
}
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("bg-heart");
    heart.innerText = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heart.style.opacity = Math.random();

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
function openStory() {
    const overlay = document.getElementById("storyOverlay");
    overlay.style.display = "flex";
    createSparkles();
}

function closeStory() {
    document.getElementById("storyOverlay").style.display = "none";
}

// Sparkle effect
function createSparkles() {
    for (let i = 0; i < 25; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.innerText = "✨";

        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = Math.random() * window.innerHeight + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1500);
    }
}

  const memories = document.querySelectorAll('.memory');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.3 });

  memories.forEach(memory => {
    memory.style.opacity = 0;
    memory.style.transform = 'translateY(40px)';
    memory.style.transition = 'all 0.6s ease';
    observer.observe(memory);
  });


  document.querySelectorAll('.scrap').forEach(scrap => {
    const rotation = Math.random() * 6 - 3;
    scrap.style.transform = `rotate(${rotation}deg)`;
  });


  document.querySelectorAll('.tape').forEach(tape => {
    const rotation = Math.random() * 20 - 10;
    tape.style.transform += ` rotate(${rotation}deg)`;
  });

