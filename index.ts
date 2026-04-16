import countriesData from "./countries.json" with { type: "json" };

export interface Country {
  name: string;
  code: string;
  alpha3: string;
  numeric: string;
}

// Map the compact array format back to Country objects at runtime
export const countries: Country[] = (countriesData as [string, string, string, string][]).map(
  ([name, code, alpha3, numeric]) => ({
    name,
    code,
    alpha3,
    numeric,
  })
);

// Optimize lookups with Maps for O(1) performance
const codeMap = new Map<string, Country>();
const alpha3Map = new Map<string, Country>();
const nameMap = new Map<string, Country>();

countries.forEach((country) => {
  codeMap.set(country.code.toUpperCase(), country);
  alpha3Map.set(country.alpha3.toUpperCase(), country);
  nameMap.set(country.name.toLowerCase(), country);
});

/**
 * Find a country by its 2-letter ISO 3166-1 alpha-2 code.
 * Case-insensitive.
 */
export const getCountryByCode = (code: string): Country | undefined => {
  if (!code) return undefined;
  return codeMap.get(code.trim().toUpperCase());
};

/**
 * Find a country by its 3-letter ISO 3166-1 alpha-3 code.
 * Case-insensitive.
 */
export const getCountryByAlpha3 = (alpha3: string): Country | undefined => {
  if (!alpha3) return undefined;
  return alpha3Map.get(alpha3.trim().toUpperCase());
};

/**
 * Find a country by its common name.
 * Case-insensitive.
 */
export const getCountryByName = (name: string): Country | undefined => {
  if (!name) return undefined;
  return nameMap.get(name.trim().toLowerCase());
};

export default countries;
