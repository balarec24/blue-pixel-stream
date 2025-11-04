import { useState } from "react";
import { Gallery } from "@/components/Gallery";
import { UploadForm } from "@/components/UploadForm";
import { Image as ImageIcon } from "lucide-react";

// Mock data for demonstration
const mockMedia = [
  {
    id: "1",
    filename: "sunset-beach.jpg",
    originalName: "Sunset Beach.jpg",
    mimetype: "image/jpeg",
    size: 2457600,
    uploadedAt: "2024-01-15T10:30:00Z",
    description: "Beautiful sunset at the beach",
    thumbnailUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
  },
  {
    id: "2",
    filename: "mountain-view.jpg",
    originalName: "Mountain View.jpg",
    mimetype: "image/jpeg",
    size: 3145728,
    uploadedAt: "2024-01-14T15:45:00Z",
    description: "Stunning mountain landscape",
    thumbnailUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
  },
  {
    id: "3",
    filename: "city-night.jpg",
    originalName: "City Night.jpg",
    mimetype: "image/jpeg",
    size: 1835008,
    uploadedAt: "2024-01-13T20:15:00Z",
    description: "City lights at night",
    thumbnailUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=400&fit=crop",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200",
  },
  {
    id: "4",
    filename: "forest-path.jpg",
    originalName: "Forest Path.jpg",
    mimetype: "image/jpeg",
    size: 2621440,
    uploadedAt: "2024-01-12T09:20:00Z",
    description: "Peaceful forest trail",
    thumbnailUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=400&fit=crop",
    url: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200",
  },
  {
    id: "5",
    filename: "ocean-waves.jpg",
    originalName: "Ocean Waves.jpg",
    mimetype: "image/jpeg",
    size: 2097152,
    uploadedAt: "2024-01-11T14:30:00Z",
    description: "Powerful ocean waves",
    thumbnailUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop",
    url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200",
  },
  {
    id: "6",
    filename: "desert-dunes.jpg",
    originalName: "Desert Dunes.jpg",
    mimetype: "image/jpeg",
    size: 1572864,
    uploadedAt: "2024-01-10T11:45:00Z",
    description: "Golden desert dunes",
    thumbnailUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=400&fit=crop",
    url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200",
  },
];

const Index = () => {
  const [media] = useState(mockMedia);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card sticky top-0 z-50 border-b backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-primary rounded-lg p-2">
                <ImageIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                BluePix
              </h1>
            </div>
            <div className="text-sm text-muted-foreground">
              {media.length} media files
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <Gallery media={media} />
          </div>
          <div className="xl:col-span-1">
            <div className="sticky top-24">
              <UploadForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
