// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, MousePointerClick } from "lucide-react";


export type ControlsHelpActionId = "return-1";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* Modal Container */}
      <main className="w-full max-w-[960px] bg-surface border border-outline-variant shadow-2xl flex flex-col max-h-[921px]">
      {/* Header */}
      <header className="bg-surface-container border-b border-outline-variant px-md py-sm md:px-lg md:py-md flex items-center justify-between shrink-0">
      <button className="group flex items-center gap-xs px-sm py-xs md:px-md md:py-sm border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface rounded-DEFAULT" type="button" data-action-id="return-1" onClick={actions?.["return-1"]}>
      <ArrowLeft className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md uppercase tracking-widest">Return</span>
      </button>
      <div className="flex items-center gap-sm">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-md text-headline-md text-on-surface tracking-widest uppercase">System Diagnostics</h1>
      </div>
      {/* Spacer to balance the header */}
      <div className="w-[80px] hidden md:block"></div>
      </header>
      {/* Scrollable Content Canvas */}
      <div className="flex-1 overflow-y-auto p-md md:p-xl flex flex-col gap-xl">
      {/* Controls Section (Bento Grid) */}
      <section aria-labelledby="controls-heading">
      <div className="flex items-end gap-sm mb-md border-b border-outline-variant/50 pb-sm">
      <Circle className="text-outline" aria-hidden={true} focusable="false" />
      <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight" id="controls-heading">Interface Mapping</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
      {/* Keyboard Mapping Card */}
      <div className="bg-surface-container-low border border-outline-variant p-md flex flex-col">
      <div className="flex items-center gap-sm mb-lg text-primary">
      <Circle aria-hidden={true} focusable="false" />
      <h3 className="font-label-md text-label-md uppercase tracking-widest border-b border-primary/30 pb-xs flex-1">Keyboard Protocol</h3>
      </div>
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center py-xs border-b border-outline-variant/30 last:border-0">
      <span className="font-body-md text-body-md text-on-surface-variant">Translate Matrix (Left/Right)</span>
      <div className="flex gap-xs">
      <kbd className="font-label-md text-label-md inline-flex items-center justify-center min-w-[32px] h-[32px] bg-surface-container-highest border border-outline-variant text-on-surface rounded-DEFAULT shadow-[0_2px_0_0_#3e484f]"><ArrowLeft className="text-[16px]" aria-hidden={true} focusable="false" /></kbd>
      <kbd className="font-label-md text-label-md inline-flex items-center justify-center min-w-[32px] h-[32px] bg-surface-container-highest border border-outline-variant text-on-surface rounded-DEFAULT shadow-[0_2px_0_0_#3e484f]"><ArrowRight className="text-[16px]" aria-hidden={true} focusable="false" /></kbd>
      </div>
      </div>
      <div className="flex justify-between items-center py-xs border-b border-outline-variant/30 last:border-0">
      <span className="font-body-md text-body-md text-on-surface-variant">Rotate Block</span>
      <kbd className="font-label-md text-label-md inline-flex items-center justify-center min-w-[32px] h-[32px] bg-surface-container-highest border border-outline-variant text-on-surface rounded-DEFAULT shadow-[0_2px_0_0_#3e484f]"><ArrowUp className="text-[16px]" aria-hidden={true} focusable="false" /></kbd>
      </div>
      <div className="flex justify-between items-center py-xs border-b border-outline-variant/30 last:border-0">
      <span className="font-body-md text-body-md text-on-surface-variant">Soft Drop</span>
      <kbd className="font-label-md text-label-md inline-flex items-center justify-center min-w-[32px] h-[32px] bg-surface-container-highest border border-outline-variant text-on-surface rounded-DEFAULT shadow-[0_2px_0_0_#3e484f]"><ArrowDown className="text-[16px]" aria-hidden={true} focusable="false" /></kbd>
      </div>
      <div className="flex justify-between items-center py-xs border-b border-outline-variant/30 last:border-0">
      <span className="font-body-md text-body-md text-on-surface-variant">Hard Drop (Commit)</span>
      <kbd className="font-label-md text-label-md inline-flex items-center justify-center px-md h-[32px] bg-surface-container-highest border border-outline-variant text-on-surface rounded-DEFAULT shadow-[0_2px_0_0_#3e484f]">SPACE</kbd>
      </div>
      <div className="flex justify-between items-center py-xs border-b border-outline-variant/30 last:border-0">
      <span className="font-body-md text-body-md text-on-surface-variant">Halt Execution (Pause)</span>
      <kbd className="font-label-md text-label-md inline-flex items-center justify-center min-w-[32px] h-[32px] bg-surface-container-highest border border-outline-variant text-on-surface rounded-DEFAULT shadow-[0_2px_0_0_#3e484f]">P</kbd>
      </div>
      </div>
      </div>
      {/* Touch Mapping Card */}
      <div className="bg-surface-container-low border border-outline-variant p-md flex flex-col">
      <div className="flex items-center gap-sm mb-lg text-primary">
      <MousePointerClick aria-hidden={true} focusable="false" />
      <h3 className="font-label-md text-label-md uppercase tracking-widest border-b border-primary/30 pb-xs flex-1">Tactile Overlay</h3>
      </div>
      <div className="flex-1 flex flex-col gap-md">
      <p className="font-body-md text-body-md text-on-surface-variant">For operational environments lacking mechanical input devices, deploy the tactile HUD overlay.</p>
      {/* Visual representation of touch layout */}
      <div className="flex-1 bg-surface-container border border-outline-variant/50 rounded-DEFAULT p-md flex items-center justify-between opacity-80">
      {/* D-Pad Mock */}
      <div className="grid grid-cols-3 grid-rows-3 gap-xs w-[100px] h-[100px]">
      <div className="col-start-2 row-start-1 bg-outline-variant rounded-full flex items-center justify-center"><Circle className="text-surface-container text-[20px]" aria-hidden={true} focusable="false" /></div>
      <div className="col-start-1 row-start-2 bg-outline-variant rounded-full flex items-center justify-center"><ArrowLeft className="text-surface-container text-[20px]" aria-hidden={true} focusable="false" /></div>
      <div className="col-start-3 row-start-2 bg-outline-variant rounded-full flex items-center justify-center"><ArrowRight className="text-surface-container text-[20px]" aria-hidden={true} focusable="false" /></div>
      <div className="col-start-2 row-start-3 bg-outline-variant rounded-full flex items-center justify-center"><Circle className="text-surface-container text-[20px]" aria-hidden={true} focusable="false" /></div>
      </div>
      {/* Action Buttons Mock */}
      <div className="flex gap-sm">
      <div className="w-[48px] h-[48px] bg-outline-variant rounded-full flex items-center justify-center"><span className="font-label-md text-label-md text-surface-container font-bold">R</span></div>
      <div className="w-[48px] h-[48px] bg-primary/80 border border-primary rounded-full flex items-center justify-center mt-lg"><span className="font-label-md text-label-md text-surface-container font-bold">DROP</span></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Rules Section */}
      <section aria-labelledby="rules-heading">
      <div className="flex items-end gap-sm mb-md border-b border-outline-variant/50 pb-sm">
      <Circle className="text-outline" aria-hidden={true} focusable="false" />
      <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight" id="rules-heading">Core Directives</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Rule 1 */}
      <div className="bg-surface-container border border-outline-variant p-md flex items-start gap-md hover:border-primary/50 transition-colors">
      <div className="bg-surface p-sm border border-outline-variant rounded-DEFAULT shrink-0 mt-xs">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h4 className="font-headline-md text-headline-md text-on-surface mb-xs">Clear Lines to Score</h4>
      <p className="font-body-md text-body-md text-on-surface-variant">Assemble contiguous horizontal arrays to purge data from the matrix. Multi-line purges yield exponential score multipliers.</p>
      </div>
      </div>
      {/* Rule 2 */}
      <div className="bg-surface-container border border-outline-variant p-md flex items-start gap-md hover:border-primary/50 transition-colors">
      <div className="bg-surface p-sm border border-outline-variant rounded-DEFAULT shrink-0 mt-xs">
      <Circle className="text-tertiary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h4 className="font-headline-md text-headline-md text-on-surface mb-xs">Level Up Every 10 Lines</h4>
      <p className="font-body-md text-body-md text-on-surface-variant">System drop velocity escalates automatically per deca-purge. Continuous focus is mandated to maintain matrix stability at higher tiers.</p>
      </div>
      </div>
      </div>
      </section>
      </div>
      </main>
    </>
  );
}
