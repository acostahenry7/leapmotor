type AnyObject = Record<string, any>;

function humanize(key: string) {
  return key
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatValue(value: any): string {
  if (value === null || value === undefined) return "-";

  if (Array.isArray(value)) {
    return value.map((v) => formatValue(v)).join(", ");
  }

  if (typeof value === "object") {
    return formatObject(value);
  }

  return escapeHtml(String(value));
}

export function formatObject(obj: AnyObject): string {
  return `
    <table style="width:100%;border-collapse:collapse;font-family:Arial">
      ${Object.entries(obj)
        .map(
          ([key, value]) => `
            <tr>
              <td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;width:30%">
                ${humanize(key)}
              </td>
              <td style="padding:8px;border:1px solid #ddd">
                ${formatValue(value)}
              </td>
            </tr>
          `
        )
        .join("")}
    </table>
  `;
}
