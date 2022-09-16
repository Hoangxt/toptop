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
