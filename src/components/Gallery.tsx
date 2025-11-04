import { useState } from "react";
import { MediaCard } from "./MediaCard";
import { PreviewPane } from "./PreviewPane";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Media {
  id: string;
  filename: string;
  originalName: string;
  mimetype: string;
  size: number;
  uploadedAt: string;
  description?: string;
  thumbnailUrl: string;
  url: string;
}

interface GalleryProps {
  media: Media[];
}

export const Gallery = ({ media }: GalleryProps) => {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMedia = media.filter((item) =>
    item.originalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Search media..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 glass-card"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredMedia.map((item) => (
            <MediaCard
              key={item.id}
              {...item}
              onSelect={() => setSelectedMedia(item)}
              isSelected={selectedMedia?.id === item.id}
            />
          ))}
        </div>

        {filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No media found</p>
          </div>
        )}
      </div>

      <div className="lg:col-span-1">
        {selectedMedia ? (
          <div className="sticky top-6">
            <PreviewPane
              media={selectedMedia}
              onClose={() => setSelectedMedia(null)}
            />
          </div>
        ) : (
          <div className="sticky top-6">
            <div className="glass-card p-8 text-center rounded-lg">
              <p className="text-muted-foreground">
                Select a media item to preview
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
