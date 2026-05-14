// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, Play, Settings } from "lucide-react";


export type PauseOverlayActionId = "button-1-1" | "button-2-2" | "button-3-3" | "resume-mission-4" | "restart-level-5" | "quit-to-menu-6";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface flex justify-between items-center px-margin-desktop h-16 w-full z-50 border-b border-outline-variant docked full-width top-0">
      <div className="font-headline-md text-headline-md font-bold tracking-tighter text-primary dark:text-primary">
                  TETRA-OS v1.0
              </div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:bg-surface-container-highest transition-colors p-sm rounded focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest transition-colors p-sm rounded focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  data-icon="help_outline" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-primary font-bold hover:bg-surface-container-highest transition-colors p-sm rounded ring-2 ring-primary ring-offset-2 ring-offset-surface" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Pause  data-icon="pause" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden relative">
      {/* SideNavBar (Suppressed for Contextual Task) */}
      {/* The user is in a focused paused state relative to the game board, suppressing global nav */}
      {/* Main Content Area (Game Board Background) */}
      <main className="flex-1 relative flex items-center justify-center p-margin-desktop">
      {/* Simulated Game Board (Dimmed) */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <div className="relative z-0 flex gap-gutter opacity-40 blur-[2px] transition-colors duration-300">
      {/* Left Panel (Hold) */}
      <div className="w-32 bg-surface-container border border-outline-variant flex flex-col items-center">
      <div className="w-full bg-surface-container-high border-b border-outline-variant p-sm text-center">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">HOLD</span>
      </div>
      <div className="p-md h-32 flex items-center justify-center">
      <div className="grid grid-cols-4 grid-rows-2 gap-[1px]">
      <div className="w-6 h-6 bg-primary-container border inset-0 border-surface-container-lowest opacity-80"></div>
      <div className="w-6 h-6 bg-primary-container border inset-0 border-surface-container-lowest opacity-80"></div>
      <div className="w-6 h-6 bg-primary-container border inset-0 border-surface-container-lowest opacity-80"></div>
      <div className="w-6 h-6 bg-primary-container border inset-0 border-surface-container-lowest opacity-80"></div>
      </div>
      </div>
      </div>
      {/* Center Playfield */}
      <div className="w-[320px] h-[640px] bg-surface-container-lowest border-2 border-outline-variant relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      {/* Simulated Blocks */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-surface-container-highest border-t border-outline-variant opacity-80 flex flex-wrap content-end">
      <div className="w-8 h-8 bg-tertiary-container border inset-0 border-surface-container-lowest"></div>
      <div className="w-8 h-8 bg-tertiary-container border inset-0 border-surface-container-lowest"></div>
      <div className="w-8 h-8 bg-error border inset-0 border-surface-container-lowest"></div>
      <div className="w-8 h-8 bg-primary-container border inset-0 border-surface-container-lowest"></div>
      </div>
      </div>
      {/* Right Panel (Next/Stats) */}
      <div className="w-32 flex flex-col gap-gutter">
      <div className="bg-surface-container border border-outline-variant flex flex-col items-center">
      <div className="w-full bg-surface-container-high border-b border-outline-variant p-sm text-center">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">NEXT</span>
      </div>
      <div className="p-md h-32 flex items-center justify-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px]">
      <div className="col-start-2 w-6 h-6 bg-tertiary-container border inset-0 border-surface-container-lowest opacity-80"></div>
      <div className="col-start-1 row-start-2 w-6 h-6 bg-tertiary-container border inset-0 border-surface-container-lowest opacity-80"></div>
      <div className="col-start-2 row-start-2 w-6 h-6 bg-tertiary-container border inset-0 border-surface-container-lowest opacity-80"></div>
      <div className="col-start-3 row-start-2 w-6 h-6 bg-tertiary-container border inset-0 border-surface-container-lowest opacity-80"></div>
      </div>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant flex flex-col items-center flex-1">
      <div className="w-full bg-surface-container-high border-b border-outline-variant p-sm text-center">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">SCORE</span>
      </div>
      <div className="p-md w-full text-right">
      <span className="font-label-md text-label-md text-primary block mb-xs">014,520</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">LEVEL 04</span>
      </div>
      </div>
      </div>
      </div>
      {/* PAUSE OVERLAY */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="bg-surface-container border border-outline-variant p-xl flex flex-col items-center min-w-[400px]">
      <h1 className="font-headline-xl text-headline-xl text-primary tracking-widest mb-lg uppercase">PAUSED</h1>
      <div className="w-full h-px bg-outline-variant mb-xl"></div>
      <div className="flex flex-col gap-md w-full">
      <button className="w-full bg-primary-container text-on-primary-fixed font-label-md text-label-md py-md px-lg uppercase tracking-widest hover:bg-surface-tint transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container flex items-center justify-center gap-sm" type="button" data-action-id="resume-mission-4" onClick={actions?.["resume-mission-4"]}>
      <Play  data-icon="play_arrow" aria-hidden={true} focusable="false" />
                                  Resume Mission
                              </button>
      <button className="w-full bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-md px-lg uppercase tracking-widest hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container flex items-center justify-center gap-sm" type="button" data-action-id="restart-level-5" onClick={actions?.["restart-level-5"]}>
      <Circle  data-icon="replay" aria-hidden={true} focusable="false" />
                                  Restart Level
                              </button>
      <button className="w-full bg-transparent border border-outline-variant text-on-surface-variant font-label-md text-label-md py-md px-lg uppercase tracking-widest hover:border-error hover:text-error transition-colors focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface-container flex items-center justify-center gap-sm mt-md" type="button" data-action-id="quit-to-menu-6" onClick={actions?.["quit-to-menu-6"]}>
      <Circle  data-icon="logout" aria-hidden={true} focusable="false" />
                                  Quit to Menu
                              </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
