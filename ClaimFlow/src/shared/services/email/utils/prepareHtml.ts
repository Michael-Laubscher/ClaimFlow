import juice from "juice";

export function prepareHtml(html: string) {
  return juice(html);
}
