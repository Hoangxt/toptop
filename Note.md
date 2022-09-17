npx create-next-app@latest ./ --ts

sanity:
npm install -g @sanity/cli
sanity init --

gitignore

install dependencies
npm install --legacy-peer-deps
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

in siderbar.tsx
px-2 py-4 hidden xl:block => full screen is will show p tag in sidebar

Discover: 1:08:22

Main video view:

- get api (next.js)
  getServerSideProps: moi lan reload lai page thi no se goi lai api

types.d.ts :[type api will have] all properties of api

Google oauth:
npm install @react-oauth/google jwt-decode --legacy-peer-deps

create user store: [/utils/index.ts]
create auth.ts in pages/api

create store/authStore.ts
using zustand
