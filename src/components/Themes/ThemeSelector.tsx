
import React from 'react';
import { useTheme, Theme } from '@/contexts/ThemeContext';
import { Palette, Check } from 'lucide-react';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  const themes: { id: Theme; name: string; description: string; colors: string; preview: string }[] = [
    {
      id: 'blue',
      name: 'Blue Ocean',
      description: 'Cool and professional blue tones reminiscent of ocean depths',
      colors: 'from-blue-500 to-blue-600',
      preview: 'bg-gradient-to-br from-blue-100 to-blue-200'
    },
    {
      id: 'purple',
      name: 'Purple Galaxy',
      description: 'Mysterious and creative purple hues inspired by cosmic beauty',
      colors: 'from-purple-500 to-purple-600',
      preview: 'bg-gradient-to-br from-purple-100 to-purple-200'
    },
    {
      id: 'green',
      name: 'Green Forest',
      description: 'Natural and calming green shades evoking forest tranquility',
      colors: 'from-green-500 to-green-600',
      preview: 'bg-gradient-to-br from-green-100 to-green-200'
    },
    {
      id: 'orange',
      name: 'Orange Sunset',
      description: 'Warm and energetic orange tones capturing sunset vibes',
      colors: 'from-orange-500 to-orange-600',
      preview: 'bg-gradient-to-br from-orange-100 to-orange-200'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <Palette className="w-8 h-8" />
          Theme Customization
        </h1>
        <p className="text-gray-600">Choose your preferred color scheme to personalize your dashboard experience.</p>
      </div>

   
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Theme</h2>
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${themes.find(t => t.id === theme)?.colors} shadow-lg`}></div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{themes.find(t => t.id === theme)?.name}</h3>
            <p className="text-gray-600">{themes.find(t => t.id === theme)?.description}</p>
          </div>
        </div>
      </div>

      {/* Theme Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {themes.map((themeOption) => (
          <div
            key={themeOption.id}
            className={`relative bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 ${
              theme === themeOption.id 
                ? 'border-blue-300 ring-4 ring-blue-100' 
                : 'border-gray-100 hover:border-gray-200'
            }`}
            onClick={() => setTheme(themeOption.id)}
          >
            {/* Theme Preview */}
            <div className={`w-full h-32 ${themeOption.preview} rounded-xl mb-4 relative overflow-hidden`}>
              <div className={`absolute top-3 left-3 w-8 h-8 bg-gradient-to-br ${themeOption.colors} rounded-lg shadow-lg`}></div>
              <div className="absolute top-3 right-3 w-16 h-2 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-3 left-3 right-3 space-y-2">
                <div className="w-3/4 h-2 bg-white/40 rounded-full"></div>
                <div className="w-1/2 h-2 bg-white/30 rounded-full"></div>
              </div>
            </div>

            {/* Theme Info */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{themeOption.name}</h3>
                <p className="text-sm text-gray-600">{themeOption.description}</p>
              </div>
              
              {/* Selection Indicator */}
              {theme === themeOption.id && (
                <div className={`ml-3 p-2 bg-gradient-to-br ${themeOption.colors} rounded-full text-white shadow-lg`}>
                  <Check className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* Color Swatches */}
            <div className="flex items-center gap-2 mt-4">
              <div className={`w-6 h-6 bg-gradient-to-br ${themeOption.colors} rounded-full shadow-md`}></div>
              <div className={`w-6 h-6 ${themeOption.preview} rounded-full shadow-md`}></div>
              <div className="text-xs text-gray-500 ml-2">Primary & Accent</div>
            </div>
          </div>
        ))}
      </div>

      {/* Theme Features */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Theme Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-xl bg-gray-50">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Dynamic Colors</h3>
            <p className="text-sm text-gray-600">All components automatically adapt to your chosen theme colors</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gray-50">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Consistent Design</h3>
            <p className="text-sm text-gray-600">Unified design language across all dashboard elements</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gray-50">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Instant Preview</h3>
            <p className="text-sm text-gray-600">See your changes applied immediately throughout the dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
