import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const NewClaim = () => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const dropzone = dropzoneRef.current;
    const fileInput = fileInputRef.current;

    if (!dropzone || !fileInput) return;

    const handleDropzoneClick = () => fileInput.click();
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      dropzone.classList.add('drag-active');
    };
    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dropzone.classList.remove('drag-active');
    };
    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      dropzone.classList.remove('drag-active');
      const dt = e.dataTransfer;
      const files = dt?.files;
      console.log('Files dropped:', files);
      // Simulated upload logic would go here
    };
    const handleFileChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      console.log('Files selected:', target.files);
    };

    dropzone.addEventListener('click', handleDropzoneClick);
    dropzone.addEventListener('dragenter', handleDragOver as EventListener);
    dropzone.addEventListener('dragover', handleDragOver as EventListener);
    dropzone.addEventListener('dragleave', handleDragLeave as EventListener);
    dropzone.addEventListener('drop', handleDrop as EventListener);
    fileInput.addEventListener('change', handleFileChange);

    return () => {
        dropzone.removeEventListener('click', handleDropzoneClick);
        dropzone.removeEventListener('dragenter', handleDragOver as EventListener);
        dropzone.removeEventListener('dragover', handleDragOver as EventListener);
        dropzone.removeEventListener('dragleave', handleDragLeave as EventListener);
        dropzone.removeEventListener('drop', handleDrop as EventListener);
        fileInput.removeEventListener('change', handleFileChange);
    };
  }, []);

  return (
    <main className="flex-1 md:ml-64 flex flex-col min-h-screen pb-20 md:pb-0">
      <header className="glass-header flex justify-between items-center w-full px-6 md:px-margin-desktop h-16 border-b border-outline-variant sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <span className="md:hidden font-headline-lg text-headline-lg-mobile font-bold text-primary">ClaimsPortal</span>
          <span className="hidden md:block font-headline-lg text-headline-lg font-bold text-on-surface">Submit New Claim</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-surface-container px-4 py-1.5 rounded-full border border-outline-variant/30">
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="search">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-label-md text-on-surface w-40 placeholder:text-on-surface-variant/50" placeholder="Search claims..." type="text"/>
          </div>
          <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors relative">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
            <img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a middle-aged man with a friendly expression, wearing a neutral business casual outfit. The lighting is soft and even, typical of a corporate profile photograph. The background is a clean, minimalist office environment with subtle blue and grey tones to match a professional UI color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmkxNQ2-eYIGzE9pZjktW9fuh_Q72FGFlxU8psJdLrLUE3RWEoKdXmpvZ_S4eqr6yq_3sE2ryyZea1DJNIR-gNgX_qSHyVhQEZUfuuggwe15hehcXgi4ZDUptZR_W8IofJRQIFTVihupwdQWESSTHipMRBXIYiDsNqgzB1faDgtl9j7_5xy2DM_d8zv0P3CbQWUTsp1OJa7P82pdnY-5eLzlvdG2r4sIzrlrIrGWwSp9H1DpLHZxiATud7X-vy1xnw1nZjZ-F7fTBR"/>
          </div>
        </div>
      </header>
      <section className="p-6 md:p-gutter max-w-container-max-width mx-auto w-full space-y-gutter">
        <div className="bg-white rounded-xl p-6 border border-outline-variant flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-md text-label-md text-secondary">Step 1: Documentation</span>
              <span className="font-label-md text-label-md text-on-surface-variant">25% Complete</span>
            </div>
            <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-1/4 rounded-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold">1</div>
            </div>
            <div className="w-8 h-0.5 bg-outline-variant mt-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-bold">2</div>
            </div>
            <div className="w-8 h-0.5 bg-outline-variant mt-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-bold">3</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8 space-y-gutter">
            <div ref={dropzoneRef} id="dropzone" className="bg-surface-container-lowest border-2 border-dashed border-outline-variant rounded-2xl p-12 flex flex-col items-center justify-center text-center transition-all hover:border-secondary group cursor-pointer h-[400px]">
              <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-secondary-container text-4xl" data-icon="cloud_upload">cloud_upload</span>
              </div>
              <h2 className="font-headline-md text-headline-md mb-2">Upload Receipts &amp; Evidence</h2>
              <p className="text-on-surface-variant font-body-md max-w-md">Drag and drop your files here, or click to browse. AI will automatically scan and verify your documents in real-time.</p>
              <div className="mt-8 flex gap-4">
                <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Select Files</button>
                <button className="bg-surface-container-high text-on-surface font-label-md text-label-md px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-[18px]" data-icon="photo_camera">photo_camera</span>
                  Use Camera
                </button>
              </div>
              <input ref={fileInputRef} id="fileInput" type="file" accept="image/*,.pdf" multiple className="hidden"/>
            </div>
            <div className="bg-white rounded-2xl border border-outline-variant overflow-hidden">
              <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low flex items-center justify-between">
                <h3 className="font-label-md text-label-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" data-icon="auto_awesome">auto_awesome</span>
                  Processing Engine
                </h3>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Active Intelligence</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 group">
                  <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-outline" data-icon="image">image</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-label-md text-label-md">medical_receipt_jan.jpg</h4>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase">Verifying</span>
                    </div>
                    <div className="mt-2 w-full h-1.5 bg-surface-container rounded-full relative overflow-hidden">
                      <div className="shimmer absolute inset-0 w-full h-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/30 group hover:bg-emerald-50 transition-colors">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-emerald-700" data-icon="description">description</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-label-md text-label-md text-emerald-900">Hospital_Invoice_2901.pdf</h4>
                        <p className="text-[11px] text-emerald-700 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]" data-icon="check_circle" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span>
                          98% confidence - Valid Claim Item
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded uppercase">Verified</span>
                    </div>
                  </div>
                  <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                  </button>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border-l-4 border-coral-500 bg-red-50/30 group hover:bg-red-50 transition-colors">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-error" data-icon="report_problem">report_problem</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-label-md text-label-md text-on-error-container">Pharmacy_Scanned_01.png</h4>
                        <p className="text-[11px] text-error flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]" data-icon="warning" style={{fontVariationSettings: '\'FILL\' 1'}}>warning</span>
                          Handwriting unreadable - Manual input required
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-on-error-container bg-error-container px-2 py-0.5 rounded uppercase">Flagged</span>
                    </div>
                  </div>
                  <button className="bg-primary text-on-primary px-3 py-1 rounded text-[11px] font-bold">FIX</button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-gutter">
            <div className="bg-inverse-surface text-inverse-on-surface rounded-2xl p-6 space-y-6">
              <h3 className="font-headline-md text-headline-md">Real-time Analysis</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-outline/30 pb-4">
                  <span className="text-surface-variant font-label-sm">Total Detected Value</span>
                  <span className="font-headline-md text-white">$1,420.50</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline/30 pb-4">
                  <span className="text-surface-variant font-label-sm">Items Scanned</span>
                  <span className="font-label-md">3 of 3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-surface-variant font-label-sm">Estimated Payout</span>
                  <span className="text-secondary-fixed font-bold">~ $1,100.00</span>
                </div>
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-sm font-body-sm italic opacity-80">"Scanning complete. Please review the flagged items to ensure maximum reimbursement."</p>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-2xl p-6 border border-outline-variant/30">
              <h4 className="font-label-md text-label-md mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]" data-icon="info">info</span>
                Best Practices
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[12px] text-on-secondary-container" data-icon="done">done</span>
                  </div>
                  <p className="text-sm font-body-sm">Ensure all four corners of receipts are visible in images.</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[12px] text-on-secondary-container" data-icon="done">done</span>
                  </div>
                  <p className="text-sm font-body-sm">Include itemized lists, not just the total balance.</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[12px] text-on-secondary-container" data-icon="done">done</span>
                  </div>
                  <p className="text-sm font-body-sm">PDF formats are preferred for digital statements.</p>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-outline-variant flex items-center gap-4 group cursor-pointer hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface" data-icon="support_agent">support_agent</span>
              </div>
              <div className="flex-1">
                <h5 className="font-label-md text-label-md">Need assistance?</h5>
                <p className="text-xs text-on-surface-variant">Live chat available 24/7</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant gap-4">
          <button className="w-full md:w-auto px-8 py-3 rounded-xl border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors">
            Save as Draft
          </button>
          <div className="flex w-full md:w-auto gap-4">
            <Link to="/verification" className="flex-1 md:px-12 py-3 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Continue to Details
              <span className="material-symbols-outlined text-[20px]" data-icon="arrow_forward">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewClaim;