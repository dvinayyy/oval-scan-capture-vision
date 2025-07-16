import React from 'react';
import { QrCode } from 'lucide-react';

const MemorialTemplate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-200 to-amber-300 flex items-center justify-center p-8">
      {/* Memorial Card */}
      <div className="w-96 h-[600px] bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-2xl p-8 relative overflow-hidden">
        {/* Background pathway effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent skew-y-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent skew-y-1 mt-8"></div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 relative z-10">
          <h1 className="text-2xl font-bold text-amber-900 tracking-wider">GATE OF</h1>
          <h1 className="text-2xl font-bold text-amber-900 tracking-wider -mt-1">MEMORY</h1>
        </div>

        {/* Photo with holographic effect */}
        <div className="flex justify-center mb-8 relative z-10">
          <div className="w-48 h-56 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border-2 border-amber-400 shadow-lg overflow-hidden relative">
            {/* Holographic glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-yellow-300/30 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent"></div>
            
            {/* Photo placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-amber-600 opacity-50">
                <div className="w-16 h-16 bg-amber-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <p className="text-xs font-medium">Photo</p>
              </div>
            </div>
            
            {/* Holographic shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 animate-pulse"></div>
          </div>
        </div>

        {/* Name */}
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-lg font-semibold text-amber-900 mb-1">In Loving Memory</h2>
          <h2 className="text-lg font-semibold text-amber-900">of Naomi N.</h2>
        </div>

        {/* Bottom section */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          {/* Scan text */}
          <div className="text-amber-900">
            <p className="text-sm font-medium leading-tight">Scan with your</p>
            <p className="text-sm font-medium leading-tight">camera to view</p>
            <p className="text-sm font-medium leading-tight">the hologram</p>
          </div>

          {/* QR Code */}
          <div className="w-16 h-16 bg-white border border-amber-400 rounded flex items-center justify-center shadow-sm">
            <QrCode className="w-12 h-12 text-amber-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorialTemplate;