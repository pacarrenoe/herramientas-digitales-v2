import { ENTITY_DICTIONARY } from "./entityDictionary";

export function convertTextToEntities(text) {
    if (!text) return "";

    return text
        .split("")
        .map(char => ENTITY_DICTIONARY[char] ?? char)
        .join("");
}
