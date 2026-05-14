// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, TriangleAlert } from "lucide-react";


export type GameOverActionId = "reboot-sequence-1" | "return-to-core-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* TopAppBar (Modified for Terminal state) */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full z-50 shrink-0">
      <div className="font-headline-md text-headline-md font-bold tracking-tighter text-primary dark:text-primary uppercase">
                  TETRA-OS v1.0 <span className="text-error text-sm ml-sm animate-pulse">[SYS_HALT]</span>
      </div>
      <div className="flex gap-md text-on-surface-variant items-center">
      <span className="font-label-sm text-label-sm tracking-widest uppercase hidden md:inline-block">TERMINAL_CRITICAL</span>
      </div>
      </header>
      <main className="flex-1 flex items-center justify-center relative z-10 scanline">
      {/* CRT Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      <div className="w-full max-w-2xl px-margin-mobile md:px-0 relative crt-flicker">
      {/* System Error Container */}
      <div className="bg-surface-container border border-outline-variant relative before:absolute before:inset-0 before:bg-surface-tint/5 before:pointer-events-none">
      {/* Error Header Tape */}
      <div className="bg-error/10 border-b border-error/30 px-lg py-md flex items-center gap-md">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-error" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-xl text-headline-xl text-error uppercase tracking-widest m-0">GAME OVER</h1>
      </div>
      {/* Data Readout */}
      <div className="p-lg md:p-xl space-y-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Score Block */}
      <div className="bg-surface border border-outline-variant p-md flex flex-col justify-center items-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-sm">FINAL SCORE</span>
      <span className="font-headline-lg text-headline-lg text-primary font-bold">142,850</span>
      </div>
      {/* Stats Block */}
      <div className="flex flex-col gap-sm">
      {/* Lines */}
      <div className="bg-surface border border-outline-variant p-md flex justify-between items-center">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">LINES CLEARED</span>
      <span className="font-label-md text-label-md text-on-surface font-bold">114</span>
      </div>
      {/* Level */}
      <div className="bg-surface border border-outline-variant p-md flex justify-between items-center">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">LEVEL REACHED</span>
      <span className="font-label-md text-label-md text-on-surface font-bold">12</span>
      </div>
      {/* Duration */}
      <div className="bg-surface border border-outline-variant p-md flex justify-between items-center">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">TIME ELAPSED</span>
      <span className="font-label-md text-label-md text-on-surface font-bold">08:42:15</span>
      </div>
      </div>
      </div>
      {/* Divider */}
      <div className="h-px bg-outline-variant w-full relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-container px-sm font-label-sm text-label-sm text-outline uppercase tracking-widest">AWAITING INPUT</div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-md justify-center">
      <button className="bg-primary text-surface font-label-md text-label-md uppercase px-xl py-md hover:bg-surface-tint transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container flex items-center justify-center gap-sm" type="button" data-action-id="reboot-sequence-1" onClick={actions?.["reboot-sequence-1"]}>
      <Circle aria-hidden={true} focusable="false" />
                                  REBOOT SEQUENCE
                              </button>
      <button className="bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md uppercase px-xl py-md hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container flex items-center justify-center gap-sm" type="button" data-action-id="return-to-core-2" onClick={actions?.["return-to-core-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                                  RETURN TO CORE
                              </button>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
