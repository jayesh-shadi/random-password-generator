This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Password Generator App

This app allows users to generate secure passwords with customizable options like length, numbers, symbols, and uppercase letters.

### Features
- Adjustable password length (6-24 characters)
- Toggle options for numbers, symbols, and uppercase letters
- Dark mode UI with Tailwind CSS

## Getting Started

First, install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Build for Production
To create a production build, run:
```bash
npm run build && npm run start
```

## Tech Stack
- **Next.js** for server-side rendering
- **React** for UI components
- **Tailwind CSS** for styling
- **TypeScript** for type safety

## Folder Structure
```
📂 src
 ┣ 📂 components
 ┃ ┣ 📂 ui
 ┃ ┃ ┣ 📜 button.tsx
 ┃ ┃ ┣ 📜 card.tsx
 ┃ ┃ ┣ 📜 input.tsx
 ┃ ┃ ┣ 📜 switch.tsx
 ┃ ┃ ┗ 📜 label.tsx
 ┃ ┗ 📜 PasswordGenerator.tsx
 ┣ 📂 pages
 ┃ ┗ 📜 index.tsx
 ┗ 📜 styles/globals.css
```

## Contributing
Feel free to fork this repository, open issues, or submit pull requests for improvements!

🚀 Happy coding!