import { Download, X, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PreviewPaneProps {
  media: {
    id: string;
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    uploadedAt: string;
    description?: string;
    url: string;
  };
  onClose: () => void;
}

export const PreviewPane = ({ media, onClose }: PreviewPaneProps) => {
  const isVideo = media.mimetype.startsWith("video/");
  
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card className="glass-card overflow-hidden animate-scale-in">
      <div className="bg-gradient-primary p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-primary-foreground">
          Media Preview
        </h2>
        <Button
          size="icon"
          variant="ghost"
          onClick={onClose}
          className="text-primary-foreground hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="p-6 space-y-6">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            {isVideo ? (
              <video
                src={media.url}
                controls
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={media.url}
                alt={media.originalName}
                className="w-full h-full object-contain"
              />
            )}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{media.originalName}</h3>
              {media.description && (
                <p className="text-muted-foreground">{media.description}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="font-medium flex items-center gap-2">
                  {isVideo && <Play className="h-4 w-4 text-primary" />}
                  {media.mimetype}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Size</p>
                <p className="font-medium">{formatSize(media.size)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Uploaded</p>
                <p className="font-medium">{formatDate(media.uploadedAt)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Filename</p>
                <p className="font-medium truncate">{media.filename}</p>
              </div>
            </div>

            <Button className="w-full gradient-primary" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download File
            </Button>
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
};
