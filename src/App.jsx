import React from "react";
import "./App.css";

function App() {
  const rawHtml = `
<span data-radix-focus-guard="" tabindex="0"
    style="outline: none; opacity: 0; position: fixed; pointer-events: none;" data-aria-hidden="true"
    aria-hidden="true"></span>
  <div id="root" data-aria-hidden="true" aria-hidden="true">
    <div
      class="min-h-[100dvh] bg-black text-white font-sans selection:bg-[#AB9FF2]/30 flex items-center justify-center sm:p-8">
      <div
        class="w-full h-[100dvh] sm:h-[850px] sm:max-w-[430px] bg-black sm:bg-[#000000] sm:border-[10px] sm:border-[#1a1a1a] sm:rounded-[50px] shadow-2xl overflow-hidden relative flex flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        <div class="flex flex-col h-full bg-black text-white overflow-hidden font-sans pb-20">
          <header class="px-5 pt-8 pb-2 flex justify-between items-center bg-black">
            <div class="flex items-center gap-3">
              <div class="relative">
                <div
                  class="w-9 h-9 rounded-full bg-[#2A2A2A] overflow-hidden flex items-center justify-center border border-[#333]">
                  <span class="text-lg">💸</span></div>
              </div>
              <div class="flex flex-col"><span
                  class="text-[11px] text-[#888] font-medium leading-tight">@LeandroMilosavljevi</span><span
                  class="text-[15px] font-semibold leading-tight mt-0.5">LM</span></div>
            </div>
            <div class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-clock w-6 h-6 text-white stroke-[1.5]">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-search w-6 h-6 text-white stroke-[1.5]">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg></div>
          </header>
          <div class="flex-1 overflow-y-auto custom-scrollbar relative px-4 no-scrollbar">
            <div
              class="absolute left-0 right-0 flex justify-center pointer-events-none z-20 transition-all duration-300 ease-out"
              style="top: -50px; opacity: 0;">
              <div
                class="w-10 h-10 bg-[#222] rounded-full shadow-lg flex items-center justify-center border border-[#333]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-refresh-cw w-5 h-5 text-[#A085FF]" style="transform: rotate(0deg);">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg></div>
            </div>
            <section class="mt-4 mb-6 flex flex-col items-start w-full">
              <h1 class="font-bold text-white leading-none tracking-tight transition-all duration-200 text-[32px]">
                €309,596.71083329</h1>
              <div class="flex items-center gap-2 mt-2"><span
                  class="text-[#16C784] text-sm font-medium tracking-wide">+€0.00000038</span><span
                  class="bg-[#16C784]/20 text-[#16C784] text-xs font-bold px-1.5 py-0.5 rounded">+0.01%</span></div>
            </section>
            <section class="grid grid-cols-4 gap-3 mb-8">
              <div class="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform">
                <div
                  class="w-full aspect-square rounded-[22px] bg-[#222222] flex items-center justify-center text-[#AB9FF2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-qr-code w-7 h-7 text-[#A085FF]">
                    <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                    <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                    <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                    <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                    <path d="M21 21v.01"></path>
                    <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                    <path d="M3 12h.01"></path>
                    <path d="M12 3h.01"></path>
                    <path d="M12 16v.01"></path>
                    <path d="M16 12h1"></path>
                    <path d="M21 12v.01"></path>
                    <path d="M12 21v-1"></path>
                  </svg></div><span class="text-[11px] font-medium text-[#888]">Erhalten</span>
              </div>
              <div class="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform">
                <div
                  class="w-full aspect-square rounded-[22px] bg-[#222222] flex items-center justify-center text-[#AB9FF2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-send w-7 h-7 text-[#A085FF]">
                    <path
                      d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                    </path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg></div><span class="text-[11px] font-medium text-[#888]">Senden</span>
              </div>
              <div class="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform">
                <div
                  class="w-full aspect-square rounded-[22px] bg-[#222222] flex items-center justify-center text-[#AB9FF2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-left-right w-7 h-7 text-[#A085FF]">
                    <path d="M8 3 4 7l4 4"></path>
                    <path d="M4 7h16"></path>
                    <path d="m16 21 4-4-4-4"></path>
                    <path d="M20 17H4"></path>
                  </svg></div><span class="text-[11px] font-medium text-[#888]">Tauschen</span>
              </div>
              <div class="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform">
                <div
                  class="w-full aspect-square rounded-[22px] bg-[#222222] flex items-center justify-center text-[#AB9FF2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-credit-card w-7 h-7 text-[#A085FF]">`;

  return <div className="react-html-wrapper" dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}

export default App;

