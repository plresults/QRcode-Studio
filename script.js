// Preset Colors
const COLOR_PRESETS = {
    classic: { qr: "#0f172a", bg: "#ffffff", frameBg: "#0f172a", frameText: "#ffffff" },
    neon: { qr: "#06b6d4", bg: "#090d16", frameBg: "#1e1b4b", frameText: "#38bdf8" },
    pastel: { qr: "#db2777", bg: "#fdf2f8", frameBg: "#fbcfe8", frameText: "#831843" },
    forest: { qr: "#047857", bg: "#f0fdf4", frameBg: "#064e3b", frameText: "#a7f3d0" },
    midnight: { qr: "#4f46e5", bg: "#0f172a", frameBg: "#312e81", frameText: "#c7d2fe" }
};

// Default Configuration State
const DEFAULT_CONFIG = {
    data: "https://example.com",
    dotsStyle: "square",
    qrColor: "#0f172a",
    bgColor: "#ffffff",
    template: "none",
    frameTopText: "SCAN ME",
    frameBottomText: "VISIT WEBSITE",
    frameBgColor: "#0f172a",
    frameTextColor: "#ffffff",
    frameRadius: "12px",
    frameFontStyle: "uppercase font-extrabold tracking-wider",
    iconKey: "",
    customIconUrl: "",
    exportRes: 400
};

// Inline SVG Data URIs for Center Icons
const SVG_ICONS = {
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    wifi: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.85a10 10 0 0 1 14 0"/><path d="M8.5 16.88a5 5 0 0 1 7 0"/></svg>`,
    heart: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    star: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="#0f172a"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="#0f172a"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    cart: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`
};

function getSvgDataUrl(key) {
    if (!key || !SVG_ICONS[key]) return "";
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(SVG_ICONS[key]);
}

// Main State
let currentConfig = { ...DEFAULT_CONFIG };
let qrCodeInstance = null;

function initQRCode() {
    let logoImage = currentConfig.customIconUrl || getSvgDataUrl(currentConfig.iconKey);

    qrCodeInstance = new QRCodeStyling({
        width: 220,
        height: 220,
        data: currentConfig.data,
        dotsOptions: {
            color: currentConfig.qrColor,
            type: currentConfig.dotsStyle
        },
        backgroundOptions: {
            color: currentConfig.bgColor
        },
        image: logoImage,
        imageOptions: {
            crossOrigin: "anonymous",
            imageSize: 0.28,
            margin: 4
        },
        cornersSquareOptions: {
            type: currentConfig.dotsStyle === 'dots' ? 'dot' : (currentConfig.dotsStyle === 'extra-rounded' ? 'extra-rounded' : 'square'),
            color: currentConfig.qrColor
        }
    });

    const container = document.getElementById("qr-canvas-container");
    container.innerHTML = "";
    qrCodeInstance.append(container);

    saveToHistoryDebounced();
}

function updateQR() {
    if (!qrCodeInstance) return;

    let logoImage = currentConfig.customIconUrl || getSvgDataUrl(currentConfig.iconKey);

    qrCodeInstance.update({
        data: currentConfig.data || " ",
        dotsOptions: {
            color: currentConfig.qrColor,
            type: currentConfig.dotsStyle
        },
        backgroundOptions: {
            color: currentConfig.bgColor
        },
        image: logoImage,
        cornersSquareOptions: {
            type: currentConfig.dotsStyle === 'dots' ? 'dot' : (currentConfig.dotsStyle === 'extra-rounded' ? 'extra-rounded' : 'square'),
            color: currentConfig.qrColor
        }
    });

    updateFrameView();
}

function updateFrameView() {
    const wrapper = document.getElementById("export-target-wrapper");
    const topText = document.getElementById("preview-top-text");
    const bottomText = document.getElementById("preview-bottom-text");

    wrapper.style.backgroundColor = currentConfig.frameBgColor;
    wrapper.style.borderRadius = currentConfig.frameRadius;

    topText.style.color = currentConfig.frameTextColor;
    bottomText.style.color = currentConfig.frameTextColor;

    topText.className = `text-center mb-3 text-xs transition-all ${currentConfig.frameFontStyle}`;
    bottomText.className = `text-center mt-3 text-xs transition-all ${currentConfig.frameFontStyle}`;

    topText.textContent = currentConfig.frameTopText;
    bottomText.textContent = currentConfig.frameBottomText;

    if (currentConfig.template === "scan") {
        topText.classList.remove("hidden");
        bottomText.classList.add("hidden");
    } else if (currentConfig.template === "website" || currentConfig.template === "follow") {
        topText.classList.add("hidden");
        bottomText.classList.remove("hidden");
    } else if (currentConfig.template === "none") {
        if (!currentConfig.frameTopText.trim()) topText.classList.add("hidden");
        else topText.classList.remove("hidden");

        if (!currentConfig.frameBottomText.trim()) bottomText.classList.add("hidden");
        else bottomText.classList.remove("hidden");
    }
}

function resetDesign() {
    // Reset configuration state back to defaults
    currentConfig = { ...DEFAULT_CONFIG };

    // Reset input fields
    document.getElementById("qr-input").value = DEFAULT_CONFIG.data;
    document.getElementById("char-count").textContent = `${DEFAULT_CONFIG.data.length}/500`;

    document.getElementById("frame-text-top").value = "";
    document.getElementById("frame-text-bottom").value = "";

    document.getElementById("frame-bg-color").value = DEFAULT_CONFIG.frameBgColor;
    document.getElementById("frame-text-color").value = DEFAULT_CONFIG.frameTextColor;
    document.getElementById("frame-radius").value = DEFAULT_CONFIG.frameRadius;
    document.getElementById("frame-font-style").value = DEFAULT_CONFIG.frameFontStyle;

    document.getElementById("qr-color").value = DEFAULT_CONFIG.qrColor;
    document.getElementById("qr-color-text").value = DEFAULT_CONFIG.qrColor;
    document.getElementById("qr-bg-color").value = DEFAULT_CONFIG.bgColor;
    document.getElementById("qr-bg-color-text").value = DEFAULT_CONFIG.bgColor;

    // Reset logo inputs
    const logoInput = document.getElementById("logo-file-input");
    if (logoInput) logoInput.value = "";
    document.getElementById("btn-remove-logo").classList.add("hidden");
    document.getElementById("logo-filename").textContent = "";

    // Reset active button UI highlights for frame templates
    document.querySelectorAll(".frame-btn").forEach(b => {
        b.classList.remove("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");
        b.classList.add("border-slate-200", "dark:border-slate-700");
    });
    const noneFrameBtn = document.querySelector('.frame-btn[data-template="none"]');
    if (noneFrameBtn) {
        noneFrameBtn.classList.remove("border-slate-200", "dark:border-slate-700");
        noneFrameBtn.classList.add("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");
    }

    // Reset dots style button UI
    document.querySelectorAll(".dots-btn").forEach(b => {
        b.classList.remove("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");
        b.classList.add("border-slate-200", "dark:border-slate-700");
    });
    const squareDotsBtn = document.querySelector('.dots-btn[data-style="square"]');
    if (squareDotsBtn) {
        squareDotsBtn.classList.remove("border-slate-200", "dark:border-slate-700");
        squareDotsBtn.classList.add("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");
    }

    // Reset center icon buttons UI
    document.querySelectorAll(".icon-btn").forEach(b => {
        b.classList.remove("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");
        b.classList.add("border-slate-200", "dark:border-slate-700");
    });
    const noneIconBtn = document.querySelector('.icon-btn[data-icon=""]');
    if (noneIconBtn) {
        noneIconBtn.classList.remove("border-slate-200", "dark:border-slate-700");
        noneIconBtn.classList.add("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");
    }

    // Re-render QR code & Frame
    initQRCode();
    showToast("Design reset to default!");
}

function showToast(msg, isError = false) {
    const toast = document.getElementById("toast");
    const msgEl = document.getElementById("toast-message");
    const iconEl = document.getElementById("toast-icon");

    msgEl.textContent = msg;
    iconEl.className = isError ? "fa-solid fa-circle-exclamation text-rose-400" : "fa-solid fa-circle-check text-emerald-400";

    toast.classList.remove("translate-y-20", "opacity-0");
    setTimeout(() => {
        toast.classList.add("translate-y-20", "opacity-0");
    }, 3000);
}

// Export Canvas Renderer
async function generateExportCanvas(scaleFactor = 2) {
    const wrapper = document.getElementById("export-target-wrapper");
    const topText = document.getElementById("preview-top-text");
    const bottomText = document.getElementById("preview-bottom-text");
    const qrCanvas = wrapper.querySelector("canvas");

    const padding = 24 * scaleFactor;
    const textHeight = 28 * scaleFactor;
    
    const qrSize = currentConfig.exportRes;
    
    const showTop = !topText.classList.contains("hidden") && topText.textContent.trim() !== "";
    const showBottom = !bottomText.classList.contains("hidden") && bottomText.textContent.trim() !== "";

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const canvasWidth = qrSize + (padding * 2);
    let canvasHeight = qrSize + (padding * 2);
    if (showTop) canvasHeight += textHeight;
    if (showBottom) canvasHeight += textHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx.fillStyle = currentConfig.frameBgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    let currentY = padding;

    if (showTop) {
        ctx.fillStyle = currentConfig.frameTextColor;
        ctx.font = `bold ${16 * scaleFactor}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(topText.textContent.toUpperCase(), canvasWidth / 2, currentY + (textHeight / 2));
        currentY += textHeight;
    }

    if (qrCanvas) {
        ctx.drawImage(qrCanvas, padding, currentY, qrSize, qrSize);
    }
    currentY += qrSize;

    if (showBottom) {
        currentY += 8;
        ctx.fillStyle = currentConfig.frameTextColor;
        ctx.font = `bold ${16 * scaleFactor}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(bottomText.textContent.toUpperCase(), canvasWidth / 2, currentY + (textHeight / 2));
    }

    return canvas;
}

let historyTimer = null;
function saveToHistoryDebounced() {
    clearTimeout(historyTimer);
    historyTimer = setTimeout(() => {
        if (!currentConfig.data || currentConfig.data.trim() === "") return;
        let history = JSON.parse(localStorage.getItem("qr_studio_history") || "[]");
        if (history.length > 0 && history[0].data === currentConfig.data) return;

        history.unshift({
            id: Date.now(),
            data: currentConfig.data,
            date: new Date().toLocaleDateString(),
            config: { ...currentConfig }
        });

        if (history.length > 20) history.pop();
        localStorage.setItem("qr_studio_history", JSON.stringify(history));
        updateHistoryBadge();
    }, 1000);
}

function updateHistoryBadge() {
    let history = JSON.parse(localStorage.getItem("qr_studio_history") || "[]");
    document.getElementById("history-badge").textContent = history.length;
}

document.addEventListener("DOMContentLoaded", () => {
    initQRCode();
    updateFrameView();
    updateHistoryBadge();

    // Dark Mode persistence
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;
    
    if (localStorage.getItem("qr_theme") === "light") {
        html.classList.remove("dark");
    } else {
        html.classList.add("dark");
    }

    themeToggle.addEventListener("click", () => {
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("qr_theme", "light");
        } else {
            html.classList.add("dark");
            localStorage.setItem("qr_theme", "dark");
        }
    });

    // Reset button listener
    const btnReset = document.getElementById("btn-reset-design");
    if (btnReset) {
        btnReset.addEventListener("click", resetDesign);
    }

    // Input handlers
    const input = document.getElementById("qr-input");
    const charCount = document.getElementById("char-count");

    input.addEventListener("input", (e) => {
        let val = e.target.value;
        if (val.length > 500) {
            val = val.substring(0, 500);
            e.target.value = val;
        }
        charCount.textContent = `${val.length}/500`;
        currentConfig.data = val || "https://example.com";
        updateQR();
    });

    document.getElementById("btn-copy-input").addEventListener("click", () => {
        navigator.clipboard.writeText(input.value);
        showToast("Content copied to clipboard!");
    });

    document.querySelectorAll(".preset-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const presetKey = btn.getAttribute("data-preset");
            const preset = COLOR_PRESETS[presetKey];
            if (preset) {
                currentConfig.qrColor = preset.qr;
                currentConfig.bgColor = preset.bg;
                currentConfig.frameBgColor = preset.frameBg;
                currentConfig.frameTextColor = preset.frameText;

                document.getElementById("qr-color").value = preset.qr;
                document.getElementById("qr-color-text").value = preset.qr;
                document.getElementById("qr-bg-color").value = preset.bg;
                document.getElementById("qr-bg-color-text").value = preset.bg;
                document.getElementById("frame-bg-color").value = preset.frameBg;
                document.getElementById("frame-text-color").value = preset.frameText;

                updateQR();
                showToast(`Applied ${presetKey} theme!`);
            }
        });
    });

    document.querySelectorAll(".frame-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".frame-btn").forEach(b => {
                b.classList.remove("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");
                b.classList.add("border-slate-200", "dark:border-slate-700");
            });
            btn.classList.remove("border-slate-200", "dark:border-slate-700");
            btn.classList.add("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");

            const template = btn.getAttribute("data-template");
            currentConfig.template = template;

            if (template === "scan") {
                currentConfig.frameTopText = "SCAN ME";
                document.getElementById("frame-text-top").value = "SCAN ME";
            } else if (template === "website") {
                currentConfig.frameBottomText = "VISIT WEBSITE";
                document.getElementById("frame-text-bottom").value = "VISIT WEBSITE";
            } else if (template === "follow") {
                currentConfig.frameBottomText = "FOLLOW US";
                document.getElementById("frame-text-bottom").value = "FOLLOW US";
            }
            updateFrameView();
        });
    });

    document.getElementById("frame-text-top").addEventListener("input", (e) => {
        currentConfig.frameTopText = e.target.value;
        updateFrameView();
    });

    document.getElementById("frame-text-bottom").addEventListener("input", (e) => {
        currentConfig.frameBottomText = e.target.value;
        updateFrameView();
    });

    document.getElementById("frame-bg-color").addEventListener("input", (e) => {
        currentConfig.frameBgColor = e.target.value;
        updateFrameView();
    });

    document.getElementById("frame-text-color").addEventListener("input", (e) => {
        currentConfig.frameTextColor = e.target.value;
        updateFrameView();
    });

    document.getElementById("frame-radius").addEventListener("change", (e) => {
        currentConfig.frameRadius = e.target.value;
        updateFrameView();
    });

    document.getElementById("frame-font-style").addEventListener("change", (e) => {
        currentConfig.frameFontStyle = e.target.value;
        updateFrameView();
    });

    document.getElementById("qr-color").addEventListener("input", (e) => {
        document.getElementById("qr-color-text").value = e.target.value;
        currentConfig.qrColor = e.target.value;
        updateQR();
    });

    document.getElementById("qr-bg-color").addEventListener("input", (e) => {
        document.getElementById("qr-bg-color-text").value = e.target.value;
        currentConfig.bgColor = e.target.value;
        updateQR();
    });

    document.querySelectorAll(".dots-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".dots-btn").forEach(b => {
                b.classList.remove("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");
                b.classList.add("border-slate-200", "dark:border-slate-700");
            });
            btn.classList.remove("border-slate-200", "dark:border-slate-700");
            btn.classList.add("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");

            currentConfig.dotsStyle = btn.getAttribute("data-style");
            updateQR();
        });
    });

    document.querySelectorAll(".icon-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".icon-btn").forEach(b => {
                b.classList.remove("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");
                b.classList.add("border-slate-200", "dark:border-slate-700");
            });
            btn.classList.remove("border-slate-200", "dark:border-slate-700");
            btn.classList.add("border-emerald-500", "bg-emerald-50/50", "dark:bg-emerald-950/30");

            currentConfig.iconKey = btn.getAttribute("data-icon");
            currentConfig.customIconUrl = "";
            document.getElementById("btn-remove-logo").classList.add("hidden");
            document.getElementById("logo-filename").textContent = "";

            initQRCode();
        });
    });

    const logoInput = document.getElementById("logo-file-input");
    const btnRemoveLogo = document.getElementById("btn-remove-logo");
    const logoFilename = document.getElementById("logo-filename");

    logoInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                currentConfig.customIconUrl = event.target.result;
                currentConfig.iconKey = "";
                
                logoFilename.textContent = file.name;
                btnRemoveLogo.classList.remove("hidden");
                
                initQRCode();
                showToast("Custom logo uploaded!");
            };
            reader.readAsDataURL(file);
        }
    });

    btnRemoveLogo.addEventListener("click", () => {
        currentConfig.customIconUrl = "";
        logoInput.value = "";
        logoFilename.textContent = "";
        btnRemoveLogo.classList.add("hidden");
        initQRCode();
        showToast("Removed custom logo.");
    });

    document.querySelectorAll(".res-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".res-btn").forEach(b => {
                b.classList.remove("border-emerald-500", "bg-emerald-50", "dark:bg-emerald-950/40", "text-emerald-600", "dark:text-emerald-400");
                b.classList.add("border-slate-200", "dark:border-slate-700", "text-slate-600", "dark:text-slate-400");
            });
            btn.classList.remove("border-slate-200", "dark:border-slate-700", "text-slate-600", "dark:text-slate-400");
            btn.classList.add("border-emerald-500", "bg-emerald-50", "dark:bg-emerald-950/40", "text-emerald-600", "dark:text-emerald-400");

            currentConfig.exportRes = parseInt(btn.getAttribute("data-res"));
        });
    });

    document.getElementById("btn-export-png").addEventListener("click", async () => {
        const canvas = await generateExportCanvas();
        const link = document.createElement("a");
        link.download = "qrcode-studio.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        showToast("Exported PNG successfully!");
    });

    document.getElementById("btn-export-webp").addEventListener("click", async () => {
        const canvas = await generateExportCanvas();
        const link = document.createElement("a");
        link.download = "qrcode-studio.webp";
        link.href = canvas.toDataURL("image/webp");
        link.click();
        showToast("Exported WEBP successfully!");
    });

    document.getElementById("btn-export-svg").addEventListener("click", () => {
        if (qrCodeInstance) {
            qrCodeInstance.download({ name: "qrcode-studio", extension: "svg" });
            showToast("Exported Vector SVG!");
        }
    });

    document.getElementById("btn-export-pdf").addEventListener("click", async () => {
        const canvas = await generateExportCanvas();
        const imgData = canvas.toDataURL("image/png");

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [canvas.width + 40, canvas.height + 40]
        });

        pdf.addImage(imgData, "PNG", 20, 20, canvas.width, canvas.height);
        pdf.save("qrcode-studio.pdf");
        showToast("Exported PDF document!");
    });

    const workspaceView = document.getElementById("workspace-view");
    const historyView = document.getElementById("history-view");

    document.getElementById("btn-show-history").addEventListener("click", () => {
        workspaceView.classList.add("hidden");
        historyView.classList.remove("hidden");
        renderHistory();
    });

    document.getElementById("btn-back-workspace").addEventListener("click", () => {
        historyView.classList.add("hidden");
        workspaceView.classList.remove("hidden");
    });

    document.getElementById("btn-clear-history").addEventListener("click", () => {
        localStorage.removeItem("qr_studio_history");
        updateHistoryBadge();
        renderHistory();
        showToast("Cleared history.");
    });
});

function renderHistory() {
    const grid = document.getElementById("history-grid");
    const empty = document.getElementById("history-empty");
    let history = JSON.parse(localStorage.getItem("qr_studio_history") || "[]");

    grid.innerHTML = "";
    if (history.length === 0) {
        empty.classList.remove("hidden");
        return;
    }
    empty.classList.add("hidden");

    history.forEach(item => {
        const card = document.createElement("div");
        card.className = "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3 shadow-sm";
        card.innerHTML = `
            <div class="flex items-center justify-between text-[11px] text-slate-400">
                <span>${item.date}</span>
                <button onclick="deleteHistoryItem(${item.id})" class="text-rose-500 hover:text-rose-600"><i class="fa-solid fa-trash"></i></button>
            </div>
            <p class="text-xs font-semibold truncate text-slate-700 dark:text-slate-200" title="${item.data}">${item.data}</p>
            <button onclick="loadHistoryItem('${encodeURIComponent(item.data)}')" class="w-full py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-slate-700 text-xs font-bold rounded-lg transition">Load Item</button>
        `;
        grid.appendChild(card);
    });
}

function deleteHistoryItem(id) {
    let history = JSON.parse(localStorage.getItem("qr_studio_history") || "[]");
    history = history.filter(item => item.id !== id);
    localStorage.setItem("qr_studio_history", JSON.stringify(history));
    updateHistoryBadge();
    renderHistory();
}

function loadHistoryItem(encodedData) {
    const data = decodeURIComponent(encodedData);
    document.getElementById("qr-input").value = data;
    currentConfig.data = data;
    updateQR();

    document.getElementById("history-view").classList.add("hidden");
    document.getElementById("workspace-view").classList.remove("hidden");
    showToast("Loaded QR code from history!");
}