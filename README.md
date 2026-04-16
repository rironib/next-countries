<div align="center">
  <h1>Next Countries</h1>
</div>

[![GitHub](https://img.shields.io/badge/GitHub-View%20on%20GitHub-blue?logo=github)](https://github.com/rironib/next-countries)

A performance-first library providing data for 248 countries, optimized for Next.js App Router and React Server Components. Zero dependencies, built-in TypeScript support, and extremely lightweight.

## Install

Choose your package manager:

```bash
# npm
npm install next-countries

# pnpm
pnpm add next-countries

# yarn
yarn add next-countries

# bun
bun add next-countries
```

## Quick Start

It's as easy as this:

```typescript
import { countries, getCountryByCode } from "next-countries";

// 1. Get all countries
const list = countries;
console.log(list[0]); // { name: 'Afghanistan', code: 'AF', ... }

// 2. Lookup by ISO Alpha-2 code
const us = getCountryByCode("US");

// 3. Simple Select example in Next.js
export default function CountrySelector() {
  return (
    <select>
      {countries.map((c) => (
        <option key={c.code} value={c.code}>{c.name}</option>
      ))}
    </select>
  );
}
```

## Features

- **Zero Dependencies**: Keeps your bundle size minimal.
- **Next.js Optimized**: Works seamlessly with React Server Components.
- **Standard Compliant**: Includes ISO-3166-1 (Alpha-2, Alpha-3) and numeric codes.
- **TypeScript**: High-quality code suggestions and full type safety built-in.
- **Fast Lookup**: Includes helper functions to find countries by name or codes.

## License

MIT
