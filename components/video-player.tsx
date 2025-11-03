"use client"

import { useState } from "react"

interface Video {
  id: number
  title: string
  driveId: string
  thumbnail: string
  duration: string
}

export default function VideoPlayer({ video }: { video: Video }) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Google Drive embed URL format
  const embedUrl = `https://drive.google.com/file/d/${video.driveId}/preview`

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-card shadow-lg">
      <div className="aspect-video w-full bg-black">
        <iframe src={embedUrl} allow="autoplay" className="h-full w-full" title={video.title} />
      </div>
    </div>
  )
}
