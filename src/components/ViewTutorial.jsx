
import { useState, useRef } from "react"

// Import icons from lucide-react
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

function ViewTutorial() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4 py-14">
      <div className="max-w-4xl w-full text-center mb-8">
        <h1 className="font-bold text-3xl leading-[1.1] text-white mb-4 sm:text-3xl md:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">UrduLens</span> Tutorial</h1>
        <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
          A comprehensive demonstration of our UrduLens project, showcasing its features and how to use them
          effectively.
        </p>
      </div>

      <div className="relative max-w-4xl w-full">
        {/* Purple glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-purple-600/20 to-purple-900/30 rounded-2xl blur-xl -m-4"></div>

        {/* Video container */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-black">
          <video
            ref={videoRef}
            className="w-full h-auto"
            poster="https://via.placeholder.com/1000x600"
            onEnded={() => setIsPlaying(false)}
          >
            {/* Replace with your actual video source */}
            <source src="/your-tutorial-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Custom video controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center">
            <button
              onClick={togglePlay}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 mr-3 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <button
              onClick={toggleMute}
              className="bg-purple-600/80 hover:bg-purple-700 text-white rounded-full p-2 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <div className="text-white text-sm ml-auto">UrduLens Demo</div>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-2xl text-center">
        <h2 className="font-bold text-3xl leading-[1.1] text-white mb-4 mt-6 sm:text-3xl md:text-5xl">How to Use UrduLens</h2>
        <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
          This tutorial walks you through all the features of UrduLens, from installation to advanced usage. Follow
          along with the video to get the most out of our project.
        </p>
      </div>
    </div>
  )
}

export default ViewTutorial
