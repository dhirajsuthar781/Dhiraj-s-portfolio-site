export function toSlug(input) {
     let slug= String(input);
     return slug
          .toLowerCase()
          .normalize("NFD") // split accented chars into base + mark
          .replace(/[\u0300-\u036f]/g, "") // remove diacritics
          .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with -
          .replace(/^-+|-+$/g, "") // trim - from start/end
          .replace(/--+/g, "-"); // collapse multiple -
}
