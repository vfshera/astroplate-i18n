/**
 * Supported languages object.
 */
export const languages = {
  en: "English",
  fr: "Français",
};

/**
 * Default language.
 */
export const defaultLang: Languages = "en";

/**
 * Translations object containing translations for different languages.
 */
export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      elements: "Elements",
      pages: {
        contact: {
          name: "Contact",
          url: "/contact",
        },
        blog: {
          name: "Blog",
          url: "/blog",
        },
        authors: {
          name: "Authors",
          url: "/authors",
        },
        categories: {
          name: "Categories",
          url: "/categories",
        },
        search: {
          name: "Search",
          url: "/search",
        },
        error: {
          name: "404 Page",
          url: "/404",
        },
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      elements: "Éléments",
      pages: {
        contact: {
          name: "Contact",
          url: "/contact",
        },
        blog: {
          name: "Blog",
          url: "/blog",
        },
        authors: {
          name: "Auteurs",
          url: "/authors",
        },
        categories: {
          name: "Catégories",
          url: "/categories",
        },
        search: {
          name: "Recherche",
          url: "/search",
        },
        error: {
          name: "Page 404",
          url: "/404",
        },
      },
    },
  },
} as const;

/**
 * Types
 */
export type Languages = keyof typeof languages;
export type Translation = typeof translations;

export type NonEmptyPath<T, P = ""> = {
  [K in keyof T]: T[K] extends object
    ? NonEmptyPath<T[K], `${P}${K}.`>
    : `${P}${K}`;
}[keyof T];

export type TPath =
  NonEmptyPath<Translation> extends `${infer Lang}.${infer Rest}`
    ? Rest
    : never;
