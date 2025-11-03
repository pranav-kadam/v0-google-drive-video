"use client"

interface Video {
  id: number
  title: string
  driveId: string
  thumbnail: string
  duration: string
}

interface PlaylistProps {
  videos: Video[]
  currentIndex: number
  onSelectVideo: (index: number) => void
}

export default function PlaylistSidebar({ videos, currentIndex, onSelectVideo }: PlaylistProps) {
  return (
    <div className="flex w-full flex-col border-t border-border bg-card p-4 lg:w-80 lg:border-l lg:border-t-0">
      <h2 className="mb-4 text-lg font-semibold text-foreground">Playlist</h2>
      <div className="space-y-2 overflow-y-auto lg:max-h-[calc(100vh-100px)]">
        {videos.map((video, index) => (
          <button
            key={video.id}
            onClick={() => onSelectVideo(index)}
            className={`group w-full text-left transition-colors rounded-lg p-3 ${
              index === currentIndex ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
            }`}
          >
            <div className="flex gap-3">
              {/* Thumbnail */}
              <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded bg-muted">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="h-full w-full object-cover"
                />
                {/* Duration badge */}
                <div className="absolute bottom-1 right-1 bg-black/70 px-1.5 py-0.5 rounded text-xs text-white font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Video info */}
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <h3 className="line-clamp-2 text-sm font-medium">{video.title}</h3>
                <p
                  className={`text-xs mt-1 ${
                    index === currentIndex ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  Video {index + 1}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
