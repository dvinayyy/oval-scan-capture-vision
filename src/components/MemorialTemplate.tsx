import React from 'react';
import { Camera, QrCode } from 'lucide-react';

const MemorialTemplate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 p-8">
      {/* Background architectural elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-amber-600 rounded-full"></div>
        <div className="absolute top-40 right-16 w-24 h-40 border-4 border-amber-600 rounded-lg"></div>
        <div className="absolute bottom-32 left-20 w-40 h-6 border-4 border-amber-600"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 border-4 border-amber-600 rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-2">In Loving Memory</h1>
          <div className="w-32 h-1 bg-amber-600 mx-auto"></div>
        </div>

        {/* Main content area */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-amber-200">
          {/* Oval placeholder for photo */}
          <div className="flex justify-center mb-8">
            <div className="w-64 h-80 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full border-4 border-amber-300 shadow-inner flex items-center justify-center">
              <div className="text-center text-amber-600">
                <div className="w-16 h-16 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-amber-600" />
                </div>
                <p className="text-sm font-medium">Photo Placeholder</p>
              </div>
            </div>
          </div>

          {/* Name and dates */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-800 mb-2">[Name]</h2>
            <p className="text-xl text-amber-700">[Birth Date] - [Death Date]</p>
          </div>

          {/* Quote or message */}
          <div className="text-center mb-8">
            <p className="text-lg text-amber-700 italic max-w-2xl mx-auto leading-relaxed">
              "Forever in our hearts, your memory will live on through the love you shared and the lives you touched."
            </p>
          </div>

          {/* Bottom section with scan camera and QR code */}
          <div className="flex justify-between items-center pt-8 border-t border-amber-200">
            {/* Scan with camera - Left side */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-amber-800">Scan with camera</p>
                <p className="text-xs text-amber-600">to view memories</p>
              </div>
            </div>

            {/* QR Code - Right side */}
            <div className="flex items-center space-x-3">
              <div>
                <p className="text-sm font-medium text-amber-800 text-right">Share memories</p>
                <p className="text-xs text-amber-600 text-right">Scan QR code</p>
              </div>
              <div className="w-16 h-16 bg-white border-2 border-amber-300 rounded-lg flex items-center justify-center shadow-sm">
                <QrCode className="w-10 h-10 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-amber-700 text-sm">
            Celebrating a life well lived • Forever remembered
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemorialTemplate;