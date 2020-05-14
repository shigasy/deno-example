import { moment } from "https://deno.land/x/moment/moment.ts";

export const date = moment().format("YYYY h:mm:ss a");

console.log(date);
console.log("import log");
