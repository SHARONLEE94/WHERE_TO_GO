/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js 13의 app 디렉터리
    "./pages/**/*.{js,ts,jsx,tsx}", // pages 디렉터리 (구버전 Next.js)
    "./components/**/*.{js,ts,jsx,tsx}", // 재사용 컴포넌트 경로
    "./index.html", "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
  ],
};