"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AboutHeader } from "@/components/about-header"
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  SkipBack, 
  SkipForward,
  Heart,
  Share2,
  Download,
  Maximize,
  Minimize,
  RotateCcw,
  Shuffle,
  Repeat,
  Music,
  Video,
  Image as ImageIcon,
  Sparkles,
  Zap,
  Palette,
  Camera,
  Mic,
  Headphones,
  Film,
  Layers,
  Globe,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Search,
  Filter,
  Clock,
  Eye,
  ThumbsUp,
  MessageCircle,
  Users,
  Lightbulb
} from 'lucide-react'
import '../../styles/globals.css'
import '../../styles/bootstrap.min.css'
import '../../styles/nice-select.css'
import '../../styles/meanmenu.css'
import '../../styles/swiper-bundle.min.css'
import '../../styles/animate.min.css'
import '../../styles/magnific-popup.css'
import '../../styles/main.css'

export default function LabPage() {
  const [activeTab, setActiveTab] = useState('music')
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState<'dark' | 'light' | 'current'>('current')

  const audioRef = useRef<HTMLAudioElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const musicData = [
    {
      id: 1,
      title: "Digital Dreams",
      artist: "Pitamaas Collective",
      duration: "3:45",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      audio: "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
      genre: "Electronic",
      likes: 1247,
      plays: 15680
    },
    {
      id: 2,
      title: "Lepidoptera",
      artist: "Epoq",
      duration: "4:12",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
      audio: "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
      genre: "Ambient",
      likes: 892,
      plays: 12340
    },
    {
      id: 3,
      title: "Innovation Beat",
      artist: "Future Sounds",
      duration: "3:28",
      cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop",
      audio: "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
      genre: "Synthwave",
      likes: 2156,
      plays: 28900
    },
    {
      id: 4,
      title: "Pixel Perfect",
      artist: "Digital Vibes",
      duration: "4:33",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
      audio: "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
      genre: "Chill",
      likes: 1789,
      plays: 22100
    }
  ]

  const videoData = [
    {
      id: 1,
      title: "The Future of Design",
      description: "Exploring innovative design concepts and creative processes",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      video: "/sam.mp4",
      duration: "2:15",
      views: 45600,
      likes: 2340,
      category: "Design"
    },
    {
      id: 2,
      title: "Creative Process",
      description: "Behind the scenes of our creative workflow",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      video: "/sam.mp4",
      duration: "3:42",
      views: 32100,
      likes: 1890,
      category: "Process"
    },
    {
      id: 3,
      title: "Digital Artistry",
      description: "Showcasing digital art techniques and tools",
      thumbnail: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop",
      video: "/sam.mp4",
      duration: "4:18",
      views: 67800,
      likes: 3450,
      category: "Art"
    },
    {
      id: 4,
      title: "Innovation Lab",
      description: "Our latest experiments and creative breakthroughs",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      video: "/sam.mp4",
      duration: "2:55",
      views: 28900,
      likes: 1560,
      category: "Innovation"
    }
  ]

  const imageData = [
    {
      id: 1,
      title: "Abstract Composition",
      description: "Digital art exploring color and form",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
      category: "Abstract",
      likes: 890,
      downloads: 234
    },
    {
      id: 2,
      title: "Geometric Patterns",
      description: "Mathematical beauty in visual form",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=600&fit=crop",
      category: "Geometric",
      likes: 1200,
      downloads: 456
    },
    {
      id: 3,
      title: "Nature's Code",
      description: "Fractals and natural algorithms",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
      category: "Nature",
      likes: 1567,
      downloads: 789
    },
    {
      id: 4,
      title: "Digital Landscapes",
      description: "Imaginary worlds brought to life",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
      category: "Landscape",
      likes: 2100,
      downloads: 1234
    },
    {
      id: 5,
      title: "Color Symphony",
      description: "Harmony of colors and emotions",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=600&fit=crop",
      category: "Color",
      likes: 980,
      downloads: 345
    },
    {
      id: 6,
      title: "Minimalist Forms",
      description: "Beauty in simplicity",
      image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=600&h=600&fit=crop",
      category: "Minimal",
      likes: 1340,
      downloads: 567
    }
  ]

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(error => {
          console.log('Audio play failed:', error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTrackSelect = (index: number) => {
    setCurrentSong(index)
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.load()
    }
  }

  const toggleTheme = () => {
    if (theme === 'current') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('current')
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume
        setIsMuted(false)
      } else {
        audioRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      setDuration(audioRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const time = parseFloat(e.target.value)
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const filteredContent = () => {
    let content: any[] = []
    if (activeTab === 'music') content = musicData
    else if (activeTab === 'videos') content = videoData
    else if (activeTab === 'images') content = imageData

    if (searchQuery) {
      content = content.filter((item: any) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.artist && item.artist.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }
    return content
  }

  return (
    <>
      <AboutHeader />
      <style jsx global>{`
        /* Lab Page Styles */
        .lab-hero {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .lab-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(138, 241, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(161, 238, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 189, 140, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .lab-hero::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(138,241,53,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
          pointer-events: none;
        }

        .hero-content-lab {
          position: relative;
          z-index: 2;
          padding: 60px 0;
        }

        .hero-badge-lab {
          display: inline-block;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          color: var(--clr-common-black);
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 8px 25px rgba(138, 241, 53, 0.3);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .hero-title-lab {
          font-size: 4.5rem;
          font-weight: 800;
          color: var(--clr-body-heading);
          margin-bottom: 25px;
          line-height: 1.2;
          text-shadow: 0 0 30px rgba(138, 241, 53, 0.3);
        }

        .gradient-text-lab {
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue), #ffbd8c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-description-lab {
          font-size: 1.3rem;
          color: var(--clr-body-text);
          opacity: 0.9;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 600px;
        }

        .lab-tabs {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 8px;
          margin-bottom: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tab-button {
          background: transparent;
          border: none;
          color: var(--clr-body-text);
          padding: 12px 24px;
          border-radius: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tab-button.active {
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          color: var(--clr-common-black);
          box-shadow: 0 4px 15px rgba(138, 241, 53, 0.3);
        }

        .search-bar {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 12px 20px;
          color: var(--clr-body-text);
          width: 100%;
          max-width: 400px;
          backdrop-filter: blur(10px);
        }

        .search-bar:focus {
          outline: none;
          border-color: var(--clr-theme-primary);
          box-shadow: 0 0 20px rgba(138, 241, 53, 0.2);
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .content-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }

        .content-item:hover {
          transform: translateY(-10px);
          border-color: var(--clr-theme-primary);
          box-shadow: 0 20px 40px rgba(138, 241, 53, 0.1);
        }

        .content-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .content-item:hover .content-image {
          transform: scale(1.05);
        }

        .content-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .content-item:hover .content-overlay {
          opacity: 1;
        }

        .play-button {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-common-black);
          font-size: 24px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .play-button:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(138, 241, 53, 0.4);
        }

        .content-info {
          padding: 20px;
        }

        .content-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 8px;
        }

        .content-meta {
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .content-stats {
          display: flex;
          gap: 15px;
          font-size: 12px;
          color: var(--clr-body-text);
          opacity: 0.7;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Music Player Styles */
        .music-player {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px;
          z-index: 1000;
        }

        .player-content {
          display: flex;
          align-items: center;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .player-info {
          display: flex;
          align-items: center;
          gap: 15px;
          min-width: 300px;
        }

        .player-cover {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          object-fit: cover;
        }

        .player-details h4 {
          color: var(--clr-body-heading);
          font-size: 16px;
          margin-bottom: 4px;
        }

        .player-details p {
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 14px;
        }

        .player-controls {
          display: flex;
          align-items: center;
          gap: 15px;
          flex: 1;
          justify-content: center;
        }

        .control-button {
          background: transparent;
          border: none;
          color: var(--clr-body-text);
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 8px;
          border-radius: 8px;
        }

        .control-button:hover {
          color: var(--clr-theme-primary);
          background: rgba(138, 241, 53, 0.1);
        }

        .play-pause-btn {
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          color: var(--clr-common-black);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 24px;
        }

        .progress-bar {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          position: relative;
          cursor: pointer;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          border-radius: 3px;
          transition: width 0.1s ease;
        }

        .time-display {
          color: var(--clr-body-text);
          font-size: 12px;
          min-width: 80px;
          text-align: center;
        }

        .volume-control {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 150px;
        }

        .volume-slider {
          flex: 1;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: var(--clr-theme-primary);
          border-radius: 50%;
          cursor: pointer;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }

        .modal-content {
          background: var(--clr-common-black);
          border-radius: 20px;
          padding: 30px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-video {
          width: 100%;
          height: 400px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .modal-image {
          width: 100%;
          height: auto;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: var(--clr-body-text);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
          color: var(--clr-theme-primary);
        }

        /* Stats Section Styles */
        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 30px 20px;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: var(--clr-theme-primary);
          box-shadow: 0 20px 40px rgba(138, 241, 53, 0.1);
        }

        .stat-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-common-black);
          margin: 0 auto 20px auto;
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--clr-theme-primary);
          margin-bottom: 10px;
          line-height: 1;
        }

        .stat-label {
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 1rem;
          font-weight: 500;
        }

        /* Section Titles */
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--clr-body-heading);
          margin-bottom: 20px;
          text-align: center;
        }

        .section-subtitle {
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 1.1rem;
          text-align: center;
          margin-bottom: 0;
        }

        .section-description {
          color: var(--clr-body-text);
          opacity: 0.9;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        /* Featured Content Styles */
        .featured-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
        }

        .featured-card:hover {
          transform: translateY(-10px);
          border-color: var(--clr-theme-primary);
          box-shadow: 0 20px 40px rgba(138, 241, 53, 0.1);
        }

        .featured-image {
          position: relative;
          overflow: hidden;
        }

        .featured-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .featured-card:hover .featured-image img {
          transform: scale(1.05);
        }

        .featured-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .featured-card:hover .featured-overlay {
          opacity: 1;
        }

        .play-button-large {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-common-black);
          font-size: 32px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .play-button-large:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(138, 241, 53, 0.4);
        }

        .featured-content {
          padding: 25px;
        }

        .featured-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          color: var(--clr-common-black);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .featured-content h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 10px;
        }

        .featured-content p {
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .featured-stats {
          display: flex;
          gap: 15px;
          font-size: 12px;
          color: var(--clr-body-text);
          opacity: 0.7;
        }

        .featured-stats span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* About Lab Styles */
        .lab-features {
          margin-top: 30px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 25px;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-common-black);
          flex-shrink: 0;
        }

        .feature-item h5 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 8px;
        }

        .feature-item p {
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 14px;
          margin: 0;
        }

        .lab-showcase {
          position: relative;
        }

        .lab-showcase img {
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title-lab {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .player-content {
            flex-direction: column;
            gap: 15px;
          }

          .player-info {
            min-width: auto;
          }

          .player-controls {
            width: 100%;
          }

          .volume-control {
            min-width: auto;
          }

          .featured-card {
            margin-bottom: 20px;
          }

          .feature-item {
            flex-direction: column;
            text-align: center;
          }
        }

        /* Artist Cards Styles */
        .artist-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
        }

        .artist-card:hover {
          border-color: var(--clr-theme-primary);
          box-shadow: 0 20px 40px rgba(138, 241, 53, 0.1);
        }

        .artist-image {
          position: relative;
          overflow: hidden;
        }

        .artist-image img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .artist-card:hover .artist-image img {
          transform: scale(1.05);
        }

        .artist-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
          display: flex;
          align-items: flex-end;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          padding: 20px;
        }

        .artist-card:hover .artist-overlay {
          opacity: 1;
        }

        .artist-social {
          display: flex;
          gap: 10px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-btn:hover {
          background: var(--clr-theme-primary);
          color: var(--clr-common-black);
          transform: scale(1.1);
        }

        .artist-info {
          padding: 25px;
        }

        .artist-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 5px;
        }

        .artist-role {
          color: var(--clr-theme-primary);
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .artist-bio {
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 14px;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .artist-stats {
          display: flex;
          gap: 20px;
        }

        .artist-stats .stat {
          text-align: center;
        }

        .artist-stats .stat-number {
          display: block;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--clr-theme-primary);
          margin-bottom: 4px;
        }

        .artist-stats .stat-label {
          font-size: 12px;
          color: var(--clr-body-text);
          opacity: 0.7;
        }

        /* Process Cards Styles */
        .process-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 30px 20px;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
          position: relative;
        }

        .process-card:hover {
          border-color: var(--clr-theme-primary);
          box-shadow: 0 20px 40px rgba(138, 241, 53, 0.1);
        }

        .process-number {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-common-black);
          font-weight: 800;
          font-size: 16px;
        }

        .process-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto 20px auto;
          transition: all 0.3s ease;
        }

        .process-card:hover .process-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .process-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 15px;
        }

        .process-description {
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        /* Testimonial Cards Styles */
        .testimonial-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          height: 100%;
        }

        .testimonial-card:hover {
          border-color: var(--clr-theme-primary);
          box-shadow: 0 20px 40px rgba(138, 241, 53, 0.1);
        }

        .testimonial-rating {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }

        .star-filled {
          color: #fbbf24;
          fill: currentColor;
        }

        .testimonial-content {
          color: var(--clr-body-text);
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 25px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .author-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 4px;
        }

        .author-role {
          color: var(--clr-body-text);
          opacity: 0.7;
          font-size: 14px;
          margin: 0;
        }

        /* Newsletter Styles */
        .newsletter-section {
          background: linear-gradient(135deg, rgba(138, 241, 53, 0.1), rgba(161, 238, 255, 0.1));
          border-radius: 30px;
          padding: 60px 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .newsletter-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--clr-body-heading);
          margin-bottom: 20px;
        }

        .newsletter-description {
          color: var(--clr-body-text);
          opacity: 0.9;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .newsletter-features {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .newsletter-features .feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--clr-body-text);
          opacity: 0.9;
        }

        .newsletter-features .feature svg {
          color: var(--clr-theme-primary);
        }

        .subscription-form {
          max-width: 500px;
        }

        .subscription-form .form-group {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
        }

        .email-input {
          flex: 1;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          color: var(--clr-body-text);
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .email-input:focus {
          outline: none;
          border-color: var(--clr-theme-primary);
          box-shadow: 0 0 20px rgba(138, 241, 53, 0.2);
        }

        .subscribe-btn {
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          color: var(--clr-common-black);
          padding: 16px 24px;
          border: none;
          border-radius: 16px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .subscribe-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(138, 241, 53, 0.4);
        }

        .form-note {
          color: var(--clr-body-text);
          opacity: 0.7;
          font-size: 14px;
          margin: 0;
        }

        /* CTA Section Styles */
        .cta-section {
          padding: 60px 40px;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--clr-body-heading);
          margin-bottom: 20px;
        }

        .cta-description {
          color: var(--clr-body-text);
          opacity: 0.9;
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary-cta {
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          color: var(--clr-common-black);
          padding: 18px 36px;
          border: none;
          border-radius: 20px;
          font-weight: 700;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-primary-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(138, 241, 53, 0.4);
        }

        .btn-secondary-cta {
          background: transparent;
          color: var(--clr-body-text);
          padding: 18px 36px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          font-weight: 600;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-secondary-cta:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--clr-theme-primary);
          color: var(--clr-body-heading);
          transform: translateY(-2px);
        }

        /* Theme Toggle Button */
        .theme-toggle-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 12px;
          color: var(--clr-body-text);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          min-width: 48px;
          height: 48px;
        }

        .theme-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: var(--clr-theme-primary);
          transform: scale(1.05);
        }

        /* Theme Selector */
        .theme-selector {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .theme-label {
          font-size: 12px;
          color: var(--clr-body-text);
          opacity: 0.8;
          font-weight: 500;
        }

        /* Hero Theme Selector */
        .theme-selector-hero {
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .theme-selector-title {
          color: var(--clr-body-heading);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .theme-options {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .theme-option {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 15px 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          min-width: 100px;
          position: relative;
          overflow: hidden;
        }

        .theme-option:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--clr-theme-primary);
          transform: translateY(-2px);
        }

        .theme-option.active {
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          border-color: var(--clr-theme-primary);
          color: var(--clr-common-black);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(138, 241, 53, 0.3);
        }

        .theme-option.active .theme-icon {
          transform: scale(1.2);
        }

        .theme-icon {
          font-size: 24px;
          transition: all 0.3s ease;
        }

        .theme-name {
          font-size: 14px;
          font-weight: 600;
          color: inherit;
        }

        .theme-option.active .theme-name {
          color: var(--clr-common-black);
        }

        /* Fixed Music Player Styles */
        .music-player {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 15px 20px;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .player-content {
          display: flex;
          align-items: center;
          gap: 20px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .player-info {
          display: flex;
          align-items: center;
          gap: 15px;
          min-width: 200px;
        }

        .player-cover {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          object-fit: cover;
        }

        .player-details h4 {
          color: var(--clr-body-heading);
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 4px 0;
        }

        .player-details p {
          color: var(--clr-body-text);
          font-size: 12px;
          opacity: 0.8;
          margin: 0;
        }

        .player-controls {
          display: flex;
          align-items: center;
          gap: 15px;
          flex: 1;
          justify-content: center;
        }

        .control-btn {
          background: none;
          border: none;
          color: var(--clr-body-text);
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--clr-theme-primary);
        }

        .play-pause-btn {
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          color: var(--clr-common-black);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .play-pause-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(138, 241, 53, 0.4);
        }

        .progress-section {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          max-width: 300px;
        }

        .time-display {
          color: var(--clr-body-text);
          font-size: 12px;
          min-width: 40px;
          text-align: center;
        }

        .progress-bar {
          flex: 1;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          cursor: pointer;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          border-radius: 2px;
          transition: width 0.1s ease;
        }

        .volume-section {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 120px;
        }

        .volume-slider {
          width: 80px;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          cursor: pointer;
          position: relative;
        }

        .volume-fill {
          height: 100%;
          background: var(--clr-theme-primary);
          border-radius: 2px;
          transition: width 0.1s ease;
        }

        /* Theme-specific styles */
        .theme-light {
          --clr-body-heading: #1a1a1a;
          --clr-body-text: #4a4a4a;
          --clr-common-black: #ffffff;
          --clr-theme-primary: #8af135;
          --clr-color-skyBlue: #a1eeff;
        }

        .theme-light body {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%) !important;
        }

        .theme-light .lab-hero {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%);
        }

        .theme-light .lab-hero::before {
          background: 
            radial-gradient(circle at 20% 80%, rgba(138, 241, 53, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(161, 238, 255, 0.08) 0%, transparent 50%);
        }

        .theme-light .music-player {
          background: rgba(255, 255, 255, 0.95);
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          color: #1a1a1a;
        }

        .theme-light .content-item,
        .theme-light .stat-card,
        .theme-light .featured-card,
        .theme-light .artist-card,
        .theme-light .process-card,
        .theme-light .testimonial-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #1a1a1a;
        }

        .theme-light .theme-selector-hero {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .theme-light .theme-option {
          background: rgba(0, 0, 0, 0.05);
          border: 2px solid rgba(0, 0, 0, 0.1);
          color: #1a1a1a;
        }

        .theme-light .theme-option:hover {
          background: rgba(0, 0, 0, 0.1);
          border-color: var(--clr-theme-primary);
        }

        .theme-light section {
          background: rgba(255, 255, 255, 0.3) !important;
        }

        .theme-light .newsletter-section {
          background: linear-gradient(135deg, rgba(138, 241, 53, 0.15), rgba(161, 238, 255, 0.15)) !important;
        }

        .theme-dark {
          --clr-body-heading: #ffffff;
          --clr-body-text: #b0b0b0;
          --clr-common-black: #000000;
          --clr-theme-primary: #8af135;
          --clr-color-skyBlue: #a1eeff;
        }

        .theme-dark body {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%) !important;
        }

        .theme-dark .lab-hero {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%);
        }

        .theme-dark .lab-hero::before {
          background: 
            radial-gradient(circle at 20% 80%, rgba(138, 241, 53, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(161, 238, 255, 0.08) 0%, transparent 50%);
        }

        .theme-dark .music-player {
          background: rgba(0, 0, 0, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .theme-dark .content-item,
        .theme-dark .stat-card,
        .theme-dark .featured-card,
        .theme-dark .artist-card,
        .theme-dark .process-card,
        .theme-dark .testimonial-card {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .theme-dark .theme-selector-hero {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .theme-dark .theme-option {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .theme-dark .theme-option:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--clr-theme-primary);
        }

        .theme-dark section {
          background: rgba(0, 0, 0, 0.3) !important;
        }

        .theme-dark .newsletter-section {
          background: linear-gradient(135deg, rgba(138, 241, 53, 0.1), rgba(161, 238, 255, 0.1)) !important;
        }

        /* Responsive Updates */
        @media (max-width: 768px) {
          .newsletter-section {
            padding: 40px 20px;
          }

          .newsletter-title {
            font-size: 2rem;
          }

          .subscription-form .form-group {
            flex-direction: column;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary-cta,
          .btn-secondary-cta {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .music-player {
            padding: 10px 15px;
          }

          .player-content {
            gap: 10px;
          }

          .player-info {
            min-width: 150px;
          }

          .player-cover {
            width: 40px;
            height: 40px;
          }

          .progress-section {
            max-width: 200px;
          }

          .volume-section {
            min-width: 80px;
          }

          .volume-slider {
            width: 60px;
          }
        }
      `}</style>

      <div className={`has-smooth theme-${theme}`} id="has_smooth">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper">
              {/* Hero Section */}
              <section className="lab-hero">
                <div className="container">
                  <div className="row align-items-center min-vh-100">
                    <div className="col-lg-8">
                      <motion.div 
                        className="hero-content-lab"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <motion.div 
                          className="hero-badge-lab"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <Camera size={16} className="me-2" />
                          <span>Product Photography</span>
                        </motion.div>
                        
                        <motion.h1 
                          className="hero-title-lab"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        >
                          WE MAKE YOUR <span className="gradient-text-lab">PRODUCT SHINE</span>
                        </motion.h1>
                        
                        <motion.p 
                          className="hero-description-lab"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          High-quality photography is key to showcasing your product in the online marketplace.
                          Recognized as one of the leading product photography agencies in India, we capture stunning
                          images that enhance brand appeal and drive sales conversions.
                          Our expertise in lighting, composition, and digital enhancement ensures every shot reflects
                          exceptional quality and leaves a lasting impression.
                        </motion.p>
                      </motion.div>
                    </div>
                    <div className="col-lg-4">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        <div className="hero-visual-lab">
                          <motion.div
                            animate={{ 
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{ 
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Image
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDSLAHn8qkWzjth6bpdyl1AIu1BhMCikotA&s"
                              alt="Creative Lab"
                              width={800}
                              height={800}
                              className="w-100 rounded-4"
                              style={{ boxShadow: '0 20px 60px rgba(138, 241, 53, 0.2)' }}
                              priority
                              unoptimized
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>


              {/* Stats Section */}
              <section className="py-5" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <div className="container">
                  <div className="row text-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="stat-card">
                          <div className="stat-icon">
                            <Music size={40} />
                          </div>
                          <h3 className="stat-number">50+</h3>
                          <p className="stat-label">Original Tracks</p>
                        </div>
                      </motion.div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="stat-card">
                          <div className="stat-icon">
                            <Video size={40} />
                          </div>
                          <h3 className="stat-number">25+</h3>
                          <p className="stat-label">Mini Movies</p>
                        </div>
                      </motion.div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="stat-card">
                          <div className="stat-icon">
                            <ImageIcon size={40} />
                          </div>
                          <h3 className="stat-number">100+</h3>
                          <p className="stat-label">Creative Images</p>
                        </div>
                      </motion.div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="stat-card">
                          <div className="stat-icon">
                            <Users size={40} />
                          </div>
                          <h3 className="stat-number">10K+</h3>
                          <p className="stat-label">Monthly Listeners</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Content Section */}
              <section className="py-5">
                <div className="container">
                  <motion.div 
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="section-title">Featured Content</h2>
                    <p className="section-subtitle">Discover our most popular and trending creations</p>
                  </motion.div>
                  
                  <div className="row">
                    <div className="col-lg-4 mb-4">
                      <motion.div
                        className="featured-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="featured-image">
                          <Image
                            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
                            alt="Featured Music"
                            width={400}
                            height={300}
                            className="w-100"
                          />
                          <div className="featured-overlay">
                            <div className="play-button-large">
                              <Music size={32} />
                            </div>
                          </div>
                        </div>
                        <div className="featured-content">
                          <span className="featured-badge">Trending</span>
                          <h4>Digital Dreams</h4>
                          <p>Our most popular electronic track with over 50K plays</p>
                          <div className="featured-stats">
                            <span><Heart size={14} /> 2.5K</span>
                            <span><Play size={14} /> 50K</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="col-lg-4 mb-4">
                      <motion.div
                        className="featured-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="featured-image">
                          <Image
                            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
                            alt="Featured Video"
                            width={400}
                            height={300}
                            className="w-100"
                          />
                          <div className="featured-overlay">
                            <div className="play-button-large">
                              <Play size={32} />
                            </div>
                          </div>
                        </div>
                        <div className="featured-content">
                          <span className="featured-badge">Viral</span>
                          <h4>The Future of Design</h4>
                          <p>Our most watched mini movie exploring design innovation</p>
                          <div className="featured-stats">
                            <span><Eye size={14} /> 45K</span>
                            <span><ThumbsUp size={14} /> 2.3K</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="col-lg-4 mb-4">
                      <motion.div
                        className="featured-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="featured-image">
                          <Image
                            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop"
                            alt="Featured Art"
                            width={400}
                            height={300}
                            className="w-100"
                          />
                          <div className="featured-overlay">
                            <div className="play-button-large">
                              <ImageIcon size={32} />
                            </div>
                          </div>
                        </div>
                        <div className="featured-content">
                          <span className="featured-badge">Editor's Choice</span>
                          <h4>Abstract Composition</h4>
                          <p>Award-winning digital art piece featured in galleries</p>
                          <div className="featured-stats">
                            <span><Heart size={14} /> 890</span>
                            <span><Download size={14} /> 234</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>

              {/* About Lab Section */}
              <section className="py-5" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h2 className="section-title">About Our Photography Studio</h2>
                        <p className="section-description">
                          Our state-of-the-art photography studio is equipped with professional lighting, 
                          high-end cameras, and advanced post-production capabilities. We specialize in 
                          product photography that transforms ordinary products into extraordinary visual stories.
                        </p>
                        <div className="lab-features">
                          <div className="feature-item">
                            <div className="feature-icon">
                              <Camera size={24} />
                            </div>
                            <div>
                              <h5>Professional Equipment</h5>
                              <p>State-of-the-art cameras, lighting, and studio equipment for perfect shots</p>
                            </div>
                          </div>
                          <div className="feature-item">
                            <div className="feature-icon">
                              <Palette size={24} />
                            </div>
                            <div>
                              <h5>Creative Excellence</h5>
                              <p>Expert composition and lighting techniques that make products stand out</p>
                            </div>
                          </div>
                          <div className="feature-item">
                            <div className="feature-icon">
                              <Zap size={24} />
                            </div>
                            <div>
                              <h5>Fast Turnaround</h5>
                              <p>Quick delivery without compromising on quality and attention to detail</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="col-lg-6">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="lab-showcase">
                          <Image
                            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
                            alt="Lab Showcase"
                            width={600}
                            height={400}
                            className="w-100 rounded-4"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content Section */}
              <section className="py-5">
                <div className="container">
                  {/* Tabs and Search */}
                  <div className="row mb-5">
                    <div className="col-lg-8">
                      <div className="lab-tabs d-flex gap-2">
                        <button 
                          className={`tab-button ${activeTab === 'music' ? 'active' : ''}`}
                          onClick={() => setActiveTab('music')}
                        >
                          <Music size={18} />
                          Music
                        </button>
                        <button 
                          className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
                          onClick={() => setActiveTab('videos')}
                        >
                          <Video size={18} />
                          Mini Movies
                        </button>
                        <button 
                          className={`tab-button ${activeTab === 'images' ? 'active' : ''}`}
                          onClick={() => setActiveTab('images')}
                        >
                          <ImageIcon size={18} />
                          Creative Images
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="d-flex gap-3">
                        <input
                          type="text"
                          placeholder="Search content..."
                          className="search-bar"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button 
                          className="tab-button"
                          onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                        >
                          {viewMode === 'grid' ? <List size={18} /> : <Grid size={18} />}
                        </button>
                        <div className="theme-selector">
                          <button 
                            className="theme-toggle-btn"
                            onClick={toggleTheme}
                            title={`Current theme: ${theme}`}
                          >
                            {theme === 'current' ? '🎨' : theme === 'dark' ? '🌙' : '☀️'}
                          </button>
                          <span className="theme-label">
                            {theme === 'current' ? 'Creative' : theme === 'dark' ? 'Dark' : 'Light'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className={`content-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                    {filteredContent().map((item: any, index: number) => (
                      <motion.div 
                        key={item.id}
                        className="content-item"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => {
                          if (activeTab === 'music') {
                            handleTrackSelect(index)
                            setIsPlaying(true)
                          } else if (activeTab === 'videos') {
                            setSelectedVideo(index)
                          } else if (activeTab === 'images') {
                            setSelectedImage(index)
                          }
                        }}
                      >
                        <div className="position-relative">
                          <Image
                            src={item.cover || item.thumbnail || item.image}
                            alt={item.title}
                            width={300}
                            height={200}
                            className="content-image"
                          />
                          <div className="content-overlay">
                            <div className="play-button">
                              {activeTab === 'music' ? (
                                <Music size={24} />
                              ) : activeTab === 'videos' ? (
                                <Play size={24} />
                              ) : (
                                <Eye size={24} />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="content-info">
                          <h4 className="content-title">{item.title}</h4>
                          <p className="content-meta">
                            {activeTab === 'music' && item.artist}
                            {activeTab === 'videos' && item.description}
                            {activeTab === 'images' && item.description}
                          </p>
                          <div className="content-stats">
                            {activeTab === 'music' && (
                              <>
                                <div className="stat-item">
                                  <Heart size={12} />
                                  <span>{item.likes}</span>
                                </div>
                                <div className="stat-item">
                                  <Play size={12} />
                                  <span>{item.plays}</span>
                                </div>
                                <div className="stat-item">
                                  <Clock size={12} />
                                  <span>{item.duration}</span>
                                </div>
                              </>
                            )}
                            {activeTab === 'videos' && (
                              <>
                                <div className="stat-item">
                                  <Eye size={12} />
                                  <span>{item.views}</span>
                                </div>
                                <div className="stat-item">
                                  <ThumbsUp size={12} />
                                  <span>{item.likes}</span>
                                </div>
                                <div className="stat-item">
                                  <Clock size={12} />
                                  <span>{item.duration}</span>
                                </div>
                              </>
                            )}
                            {activeTab === 'images' && (
                              <>
                                <div className="stat-item">
                                  <Heart size={12} />
                                  <span>{item.likes}</span>
                                </div>
                                <div className="stat-item">
                                  <Download size={12} />
                                  <span>{item.downloads}</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>



              {/* Testimonials Section */}
              <section className="py-5" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <div className="container">
                  <motion.div 
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="section-title">What People Say</h2>
                    <p className="section-subtitle">Hear from our community of creators and listeners</p>
                  </motion.div>
                  
                  <div className="row">
                    {[
                      {
                        name: "Sarah Johnson",
                        role: "Music Producer",
                        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
                        content: "Pitamaas Lab has revolutionized how I approach music production. The quality and creativity are unmatched.",
                        rating: 5
                      },
                      {
                        name: "Michael Chen",
                        role: "Digital Artist",
                        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                        content: "The visual content here is absolutely stunning. It's become my go-to source for inspiration.",
                        rating: 5
                      },
                      {
                        name: "Emily Rodriguez",
                        role: "Content Creator",
                        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                        content: "The mini movies are incredible! They've helped me understand complex concepts in such engaging ways.",
                        rating: 5
                      }
                    ].map((testimonial, index) => (
                      <div key={index} className="col-lg-4 mb-4">
                        <motion.div
                          className="testimonial-card"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5, scale: 1.02 }}
                        >
                          <div className="testimonial-rating">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} size={16} className="star-filled" />
                            ))}
                          </div>
                          <p className="testimonial-content">"{testimonial.content}"</p>
                          <div className="testimonial-author">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={50}
                              height={50}
                              className="author-image"
                            />
                            <div className="author-info">
                              <h5 className="author-name">{testimonial.name}</h5>
                              <p className="author-role">{testimonial.role}</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Newsletter Section */}
              <section className="py-5">
                <div className="container">
                  <motion.div
                    className="newsletter-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <h2 className="newsletter-title">Stay Updated</h2>
                        <p className="newsletter-description">
                          Get the latest tracks, videos, and creative content delivered to your inbox. 
                          Join our community of creators and be the first to experience new releases.
                        </p>
                        <div className="newsletter-features">
                          <div className="feature">
                            <Sparkles size={20} />
                            <span>Exclusive early access</span>
                          </div>
                          <div className="feature">
                            <Music size={20} />
                            <span>Weekly music drops</span>
                          </div>
                          <div className="feature">
                            <Video size={20} />
                            <span>Behind-the-scenes content</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="newsletter-form">
                          <form className="subscription-form">
                            <div className="form-group">
                              <input
                                type="email"
                                placeholder="Enter your email address"
                                className="email-input"
                                required
                              />
                              <button type="submit" className="subscribe-btn">
                                <span>Subscribe</span>
                                <ArrowRight size={18} />
                              </button>
                            </div>
                            <p className="form-note">
                              We respect your privacy. Unsubscribe at any time.
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-5" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <div className="container">
                  <motion.div
                    className="cta-section text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="cta-title">Ready to Create?</h2>
                    <p className="cta-description">
                      Join our creative community and start exploring the endless possibilities of digital art, music, and storytelling.
                    </p>
                    <div className="cta-buttons">
                      <button className="btn-primary-cta">
                        <span>Start Creating</span>
                        <Sparkles size={18} />
                      </button>
                      <button className="btn-secondary-cta">
                        <span>View Portfolio</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Music Player */}
      <div className="music-player">
        <div className="player-content">
          <div className="player-info">
            <Image
              src={musicData[currentSong]?.cover || ''}
              alt="Album Cover"
              width={60}
              height={60}
              className="player-cover"
            />
            <div className="player-details">
              <h4>{musicData[currentSong]?.title}</h4>
              <p>{musicData[currentSong]?.artist}</p>
            </div>
          </div>
          
          <div className="player-controls">
            <button className="control-btn">
              <Shuffle size={18} />
            </button>
            <button className="control-btn">
              <SkipBack size={18} />
            </button>
            <button className="control-btn play-pause-btn" onClick={handlePlayPause}>
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="control-btn">
              <SkipForward size={18} />
            </button>
            <button className="control-btn">
              <Repeat size={18} />
            </button>
          </div>
          
          <div className="progress-section">
            <span className="time-display">{formatTime(currentTime)}</span>
            <div className="progress-bar" onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const clickX = e.clientX - rect.left
              const width = rect.width
              const newTime = (clickX / width) * duration
              if (audioRef.current) {
                audioRef.current.currentTime = newTime
                setCurrentTime(newTime)
              }
            }}>
              <div 
                className="progress-fill" 
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <span className="time-display">{formatTime(duration)}</span>
          </div>
          
          <div className="volume-section">
            <button className="control-btn" onClick={toggleMute}>
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <div className="volume-slider" onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const clickX = e.clientX - rect.left
              const width = rect.width
              const newVolume = clickX / width
              handleVolumeChange({ target: { value: newVolume.toString() } } as any)
            }}>
              <div 
                className="volume-fill" 
                style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
              />
            </div>
          </div>
        </div>
        
        <audio
          ref={audioRef}
          src={musicData[currentSong]?.audio}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="modal-content position-relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-button"
                onClick={() => setSelectedVideo(null)}
              >
                ×
              </button>
              <video
                ref={videoRef}
                className="modal-video"
                controls
                autoPlay
                src={videoData[selectedVideo]?.video}
              />
              <h3>{videoData[selectedVideo]?.title}</h3>
              <p>{videoData[selectedVideo]?.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="modal-content position-relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-button"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <Image
                src={imageData[selectedImage]?.image}
                alt={imageData[selectedImage]?.title}
                width={800}
                height={600}
                className="modal-image"
              />
              <h3>{imageData[selectedImage]?.title}</h3>
              <p>{imageData[selectedImage]?.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}