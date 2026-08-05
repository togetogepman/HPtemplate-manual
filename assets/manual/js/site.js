document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    const status = button.parentElement.querySelector(".copy-status");
    if (!target || !navigator.clipboard) {
      if (status) status.textContent = "選択してコピーしてください。";
      return;
    }
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      if (status) status.textContent = "コピーしました。";
    } catch {
      if (status) status.textContent = "選択してコピーしてください。";
    }
  });
});
