// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ChevronRight, Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "start-new-game-1" | "resume-session-unavailable-2" | "controls-help-3" | "system-settings-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Subtle Background Grid Overlay */}
      <div className="absolute inset-0 tetris-grid-bg pointer-events-none z-0"></div>
      {/* Main Container */}
      <main className="z-10 flex flex-col items-center gap-xl w-full max-w-2xl px-margin-mobile md:px-margin-desktop">
      {/* Header / Identity */}
      <header className="text-center flex flex-col gap-sm">
      <div className="flex items-center justify-center gap-sm mb-xs">
      <Circle  style={{fontSize: "48px"}} className="text-primary text-headline-xl" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tighter">TETRIS SUPERVISOR</h1>
      </div>
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">System Boot Sequence V1.0</p>
      </header>
      {/* Action Panel */}
      <div className="bg-surface-container-low border border-outline-variant p-lg w-full flex flex-col gap-md shadow-2xl relative">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div>
      <div className="font-label-sm text-label-sm text-primary mb-xs flex justify-between border-b border-outline-variant pb-xs">
      <span>&gt; AWAITING_INPUT</span>
      <span>STATUS: ONLINE</span>
      </div>
      {/* Primary Actions */}
      <button className="w-full bg-primary-container text-on-primary-container font-headline-md text-headline-md py-md flex items-center justify-center gap-sm hover:bg-surface-tint transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background border border-transparent hover:border-primary" type="button" data-action-id="start-new-game-1" onClick={actions?.["start-new-game-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Start New Game
                  </button>
      {/* Secondary Actions List */}
      <div className="flex flex-col gap-sm mt-xs">
      <button className="w-full bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-sm px-md flex items-center justify-between hover:border-primary hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group" type="button" data-action-id="resume-session-unavailable-2" onClick={actions?.["resume-session-unavailable-2"]}>
      <span className="flex items-center gap-sm">
      <Circle className="text-outline group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
                              Resume Session
                          </span>
      <span className="text-on-surface-variant font-label-sm text-label-sm">[UNAVAILABLE]</span>
      </button>
      <button className="w-full bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-sm px-md flex items-center justify-between hover:border-primary hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group" type="button" data-action-id="controls-help-3" onClick={actions?.["controls-help-3"]}>
      <span className="flex items-center gap-sm">
      <Circle className="text-outline group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
                              Controls Help
                          </span>
      <ChevronRight className="text-outline group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-full bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-sm px-md flex items-center justify-between hover:border-primary hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group" type="button" data-action-id="system-settings-4" onClick={actions?.["system-settings-4"]}>
      <span className="flex items-center gap-sm">
      <Settings className="text-outline group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
                              System Settings
                          </span>
      <ChevronRight className="text-outline group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Footer Info */}
      <footer className="mt-auto md:mt-0 font-label-sm text-label-sm text-on-surface-variant text-center opacity-70">
      <p>TERMINAL ID: 094-B // SECURE CONNECTION</p>
      </footer>
      </main>
    </>
  );
}
