"use client"

import { useState } from "react"
import VideoPlayer from "@/components/video-player"
import PlaylistSidebar from "@/components/playlist-sidebar"

const videos = [
  {
    id: 1,
    title: "Episode 1",
    driveId: "1P8TIC1J4-gV0hamF0tFOVz7nmRwxIy9y",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BZWQ1NGE4YjgtOGJjZS00OTZjLWI0MGUtMDUxYjY2M2E4MjNjXkEyXkFqcGc@._V1_.jpg",
    duration: "12:34",
  },
  {
    id: 2,
    title: "Episode 2",
    driveId: "1-3R15JEHUnwllKRvydJ6qMHH6Knh7ykD",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BZWQ1NGE4YjgtOGJjZS00OTZjLWI0MGUtMDUxYjY2M2E4MjNjXkEyXkFqcGc@._V1_.jpg",
    duration: "8:45",
  },
  {
    id: 3,
    title: "Episode 1",
    driveId: "1THHAKrylAPiWDZBmi17VzNK9NpyBxBmI",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BZWQ1NGE4YjgtOGJjZS00OTZjLWI0MGUtMDUxYjY2M2E4MjNjXkEyXkFqcGc@._V1_.jpg",
    duration: "15:20",
  },
  {
    id: 4,
    title: "Episode 1",
    driveId: "https://m.media-amazon.com/images/M/MV5BZWQ1NGE4YjgtOGJjZS00OTZjLWI0MGUtMDUxYjY2M2E4MjNjXkEyXkFqcGc@._V1_.jpg",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BZWQ1NGE4YjgtOGJjZS00OTZjLWI0MGUtMDUxYjY2M2E4MjNjXkEyXkFqcGc@._V1_.jpg",
    duration: "11:15",
  },
  {
    id: 5,
    title: "Episode 1",
    driveId: "https://m.media-amazon.com/images/M/MV5BZWQ1NGE4YjgtOGJjZS00OTZjLWI0MGUtMDUxYjY2M2E4MjNjXkEyXkFqcGc@._V1_.jpg",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BZWQ1NGE4YjgtOGJjZS00OTZjLWI0MGUtMDUxYjY2M2E4MjNjXkEyXkFqcGc@._V1_.jpg",
    duration: "20:00",
  },
]

export default function Page() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const currentVideo = videos[currentVideoIndex]

  return (
    <main className="min-h-screen bg-background">
      <div className="flex h-screen flex-col gap-0 lg:flex-row">
        {/* Main video player area */}
        <div className="flex flex-1 flex-col justify-between bg-background p-4 lg:p-8">
          <div className="flex-1">
            <VideoPlayer video={currentVideo} />
          </div>

          {/* Video info */}
          <div className="mt-6 space-y-3">
            <h1 className="text-3xl font-bold text-foreground">{currentVideo.title}</h1>
            <p className="text-muted-foreground">
              {currentVideo.duration} • Video {currentVideoIndex + 1} of {videos.length}
            </p>
          </div>
        </div>

        {/* Playlist sidebar */}
        <PlaylistSidebar videos={videos} currentIndex={currentVideoIndex} onSelectVideo={setCurrentVideoIndex} />
      </div>
    </main>
  )
}
