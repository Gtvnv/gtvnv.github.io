/**
 * CLIPBOARD — botões de copiar e-mail/telefone com feedback textual traduzido.
 * Os textos (idle/done) vêm do ui do locale, embutidos nos data-attributes do
 * botão pelo componente Contact.astro. O link mailto:/tel: ao lado é o fallback
 * quando o clipboard não está disponível. Idempotente entre navegações.
 */
let cleanup: (() => void) | null = null;

export function initClipboard(): void {
  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  const buttons = Array.from(
    document.querySelectorAll<HTMLButtonElement>("[data-copy-value]"),
  );
  if (!buttons.length) return;

  const timers = new WeakMap<HTMLButtonElement, number>();

  const handlers = buttons.map((btn) => {
    const value = btn.dataset.copyValue ?? "";
    const idle = btn.dataset.copyIdle ?? btn.textContent ?? "";
    const done = btn.dataset.copyDone ?? idle;

    const onClick = async () => {
      try {
        await navigator.clipboard.writeText(value);
        btn.textContent = done;
        const existing = timers.get(btn);
        if (existing) window.clearTimeout(existing);
        const t = window.setTimeout(() => {
          btn.textContent = idle;
        }, 1800);
        timers.set(btn, t);
      } catch {
        // Clipboard indisponível — o link mailto:/tel: ao lado já resolve.
      }
    };

    btn.addEventListener("click", onClick);
    return { btn, onClick };
  });

  cleanup = () => {
    handlers.forEach(({ btn, onClick }) => btn.removeEventListener("click", onClick));
  };
}
