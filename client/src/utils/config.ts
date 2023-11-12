export const config = (await (await fetch("/api/prelude.json")).json()) as {
  endpoint: string;
};
