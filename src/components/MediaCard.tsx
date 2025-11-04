import { Download, Play, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MediaCardProps {
  id: string;
  filename: string;
  originalName: string;
  mimetype: string;
  size: number;
  uploadedAt: string;
  description?: string;
  thumbnailUrl: string;
  onSelect: () => void;
  isSelected: boolean;
}

export const MediaCard = ({
  filename,
  originalName,
  mimetype,
  size,
  description,
  thumbnailUrl,
  onSelect,
  isSelected,
}: MediaCardProps) => {
  const isVideo = mimetype.startsWith("video/");
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <Card
      className={`glass-card overflow-hidden cursor-pointer group transition-smooth hover:shadow-lg hover:scale-[1.02] ${
        isSelected ? "ring-2 ring-primary" : ""
      }`}
      onClick={onSelect}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={thumbnailUrl}
          alt={originalName}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="bg-primary rounded-full p-3">
              <Play className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
          </div>
        )}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-smooth">
          <Button size="icon" variant="secondary" className="h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate text-sm">{originalName}</h3>
            {description && (
              <p className="text-xs text-muted-foreground truncate mt-1">
                {description}
              </p>
            )}
          </div>
          <div className="text-primary">
            {isVideo ? (
              <Play className="h-4 w-4" />
            ) : (
              <ImageIcon className="h-4 w-4" />
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
          <span>{formatSize(size)}</span>
          <span>{mimetype.split("/")[1].toUpperCase()}</span>
        </div>
      </div>
    </Card>
  );
};
