// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Gamepad2, Pause, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "initiate-core-4";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface flex justify-between items-center px-margin-desktop h-16 w-full z-50 border-b border-outline-variant docked full-width top-0">
      <div className="flex items-center">
      <span className="font-headline-md text-headline-md font-bold tracking-tighter text-primary dark:text-primary">TETRA-OS v1.0</span>
      </div>
      <div className="flex items-center gap-md">
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded bg-primary-container/20 text-primary" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex h-[calc(100vh-64px)]">
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant hidden md:flex flex-col py-lg gap-md docked fixed left-0 h-full w-64 pt-[80px]">
      <div className="px-md mb-md">
      <h2 className="font-label-md text-label-md text-on-surface-variant">OPERATIVE_01</h2>
      <p className="font-label-sm text-label-sm text-outline">SECTOR-7</p>
      </div>
      <a className="bg-secondary-container text-on-secondary-container border-l-4 border-primary px-md py-sm flex items-center gap-sm font-label-md text-label-md" href="#">
      <Gamepad2 aria-hidden={true} focusable="false" />
                      Mission
                  </a>
      <a className="text-on-surface-variant hover:text-on-surface px-md py-sm hover:bg-surface-container-highest transition-colors flex items-center gap-sm font-label-md text-label-md" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      Leaderboard
                  </a>
      <a className="text-on-surface-variant hover:text-on-surface px-md py-sm hover:bg-surface-container-highest transition-colors flex items-center gap-sm font-label-md text-label-md" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      Archive
                  </a>
      <a className="text-on-surface-variant hover:text-on-surface px-md py-sm hover:bg-surface-container-highest transition-colors flex items-center gap-sm font-label-md text-label-md" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      Diagnostics
                  </a>
      <div className="mt-auto px-md pb-margin-desktop">
      <button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-sm border border-primary hover:bg-primary-container/80 transition-colors" type="button" data-action-id="initiate-core-4" onClick={actions?.["initiate-core-4"]}>INITIATE_CORE</button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 ml-0 md:ml-64 p-margin-desktop flex justify-center items-start overflow-y-auto">
      <div className="flex gap-margin-desktop max-w-6xl w-full justify-center">
      {/* Left HUD: Stats */}
      <aside className="w-48 hidden lg:flex flex-col gap-md">
      <div className="bg-surface-container border border-outline-variant rounded">
      <div className="bg-surface-container-high px-sm py-xs border-b border-outline-variant">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Telemetry</h3>
      </div>
      <div className="p-sm flex flex-col gap-sm">
      <div className="flex justify-between items-baseline border-b border-surface-bright pb-xs">
      <span className="font-label-sm text-label-sm text-outline">SCORE</span>
      <span className="font-label-md text-label-md text-primary">024500</span>
      </div>
      <div className="flex justify-between items-baseline border-b border-surface-bright pb-xs bg-surface-container-lowest/50">
      <span className="font-label-sm text-label-sm text-outline">LEVEL</span>
      <span className="font-label-md text-label-md text-on-surface">04</span>
      </div>
      <div className="flex justify-between items-baseline pb-xs">
      <span className="font-label-sm text-label-sm text-outline">LINES</span>
      <span className="font-label-md text-label-md text-on-surface">12</span>
      </div>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded mt-auto">
      <div className="bg-surface-container-high px-sm py-xs border-b border-outline-variant">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Status</h3>
      </div>
      <div className="p-sm flex items-center gap-sm">
      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#38bdf8]"></div>
      <span className="font-label-sm text-label-sm text-primary">ACTIVE</span>
      </div>
      </div>
      </aside>
      {/* Center: Playfield */}
      <div className="flex-shrink-0 flex flex-col items-center">
      <div className="bg-surface-container border-2 border-outline-variant p-[1px] shadow-[0_0_15px_rgba(56,189,248,0.1)]">
      {/* 10x20 Grid */}
      <div className="grid grid-cols-10 grid-rows-20 gap-[1px] bg-surface-bright">
      {/* Simulating empty grid with some blocks at the bottom */}
      {/* Row 1-15: Empty */}
      <div className="w-6 h-6 bg-surface-dim"></div><div className="w-6 h-6 bg-surface-dim"></div><div className="w-6 h-6 bg-surface-dim"></div><div className="w-6 h-6 bg-surface-dim"></div><div className="w-6 h-6 bg-surface-dim"></div><div className="w-6 h-6 bg-surface-dim"></div><div className="w-6 h-6 bg-surface-dim"></div><div className="w-6 h-6 bg-surface-dim"></div><div className="w-6 h-6 bg-surface-dim"></div><div className="w-6 h-6 bg-surface-dim"></div>
      {/* ... skipping empty rows for brevity, adding a few filler blocks to maintain grid structure visually ... */}
      {/* Filler for visual height */}
      <div className="col-span-10 h-[300px] bg-surface-dim/50 border-y border-surface-bright flex items-center justify-center">
      <span className="font-label-md text-label-md text-outline/30">GRID_SPACE_AVAILABLE</span>
      </div>
      {/* Row 18 */}
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-[#38bdf8] border border-[#004c69] tetromino-inner-glow"></div> {/* I Block piece */}
      <div className="w-6 h-6 bg-[#38bdf8] border border-[#004c69] tetromino-inner-glow"></div>
      <div className="w-6 h-6 bg-[#38bdf8] border border-[#004c69] tetromino-inner-glow"></div>
      <div className="w-6 h-6 bg-[#38bdf8] border border-[#004c69] tetromino-inner-glow"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      {/* Row 19 */}
      <div className="w-6 h-6 bg-[#f1a02b] border border-[#613b00] tetromino-inner-glow"></div> {/* L Block piece */}
      <div className="w-6 h-6 bg-[#f1a02b] border border-[#613b00] tetromino-inner-glow"></div>
      <div className="w-6 h-6 bg-[#f1a02b] border border-[#613b00] tetromino-inner-glow"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-[#bdc2ff] border border-[#131e8c] tetromino-inner-glow"></div> {/* T Block piece */}
      <div className="w-6 h-6 bg-[#bdc2ff] border border-[#131e8c] tetromino-inner-glow"></div>
      <div className="w-6 h-6 bg-[#bdc2ff] border border-[#131e8c] tetromino-inner-glow"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      {/* Row 20 */}
      <div className="w-6 h-6 bg-[#f1a02b] border border-[#613b00] tetromino-inner-glow"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-[#bdc2ff] border border-[#131e8c] tetromino-inner-glow"></div>
      <div className="w-6 h-6 bg-[#bdc2ff] border border-[#131e8c] tetromino-inner-glow"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      <div className="w-6 h-6 bg-surface-dim"></div>
      </div>
      </div>
      </div>
      {/* Right HUD: Next & Hold */}
      <aside className="w-32 flex flex-col gap-md">
      <div className="bg-surface-container border border-outline-variant rounded">
      <div className="bg-surface-container-high px-sm py-xs border-b border-outline-variant text-center">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Next</h3>
      </div>
      <div className="p-md flex justify-center items-center h-24 bg-surface-dim">
      {/* Preview Piece (O Block) */}
      <div className="grid grid-cols-2 grid-rows-2 gap-[1px] bg-surface-bright">
      <div className="w-5 h-5 bg-[#ffc176] border border-[#472a00] tetromino-inner-glow"></div>
      <div className="w-5 h-5 bg-[#ffc176] border border-[#472a00] tetromino-inner-glow"></div>
      <div className="w-5 h-5 bg-[#ffc176] border border-[#472a00] tetromino-inner-glow"></div>
      <div className="w-5 h-5 bg-[#ffc176] border border-[#472a00] tetromino-inner-glow"></div>
      </div>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded">
      <div className="bg-surface-container-high px-sm py-xs border-b border-outline-variant text-center">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Hold</h3>
      </div>
      <div className="p-md flex justify-center items-center h-24 bg-surface-dim">
      {/* Hold Piece (None currently) */}
      <span className="font-label-sm text-label-sm text-outline/50">EMPTY</span>
      </div>
      </div>
      {/* Mobile Stats Summary (visible only when left panel is hidden) */}
      <div className="lg:hidden bg-surface-container border border-outline-variant rounded mt-auto p-sm flex flex-col gap-sm">
      <div className="flex justify-between items-baseline">
      <span className="font-label-sm text-label-sm text-outline">SCORE</span>
      <span className="font-label-sm text-label-sm text-primary">024500</span>
      </div>
      <div className="flex justify-between items-baseline">
      <span className="font-label-sm text-label-sm text-outline">LEVEL</span>
      <span className="font-label-sm text-label-sm text-on-surface">04</span>
      </div>
      </div>
      </aside>
      </div>
      </main>
      </div>
    </>
  );
}
