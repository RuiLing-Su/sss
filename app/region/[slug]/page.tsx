"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { AudioPlayer } from "@/components/audio-player"

const regionNames = {
  fuzhou: "福州茶亭",
  minxi: "闽西客家",
  putian: "莆田黄石慧洋",
  nanping: "南平",
}

const regionDescriptions = {
  fuzhou:
    "福州茶亭十番音乐是福建省福州市的传统民间音乐，具有浓郁的地方特色。茶亭十番音乐以其独特的演奏风格和丰富的音乐表现力而闻名，是福建文化的重要组成部分。",
  minxi:
    "闽西客家十番音乐是客家文化的重要组成部分，流传于福建西部的客家地区。这种音乐融合了客家人的生活习俗和文化特色，具有鲜明的地域特点和民族风格。",
  putian:
    "莆田黄石慧洋十番音乐是福建莆田地区的传统音乐形式，以其独特的演奏技巧和音乐风格而著称。这种音乐在当地的民俗活动和庆典中扮演着重要角色。",
  nanping:
    "南平十番音乐是福建省南平市的传统民间音乐，具有浓厚的地方色彩。这种音乐形式在当地的民俗活动和庆典中广泛使用，是福建音乐文化的重要组成部分。",
}

const regionBackgrounds = {
  fuzhou: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
  minxi: "linear-gradient(135deg, #b91d73 0%, #f953c6 100%)",
  putian: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
  nanping: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)",
}

export default function RegionPage() {
  const router = useRouter()
  const params = useParams()
  const slug = params?.slug as string

  const [audioFiles, setAudioFiles] = useState<Array<{ id: string; name: string; url: string; description: string }>>(
    [],
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟从后端获取音频文件列表
    const fetchAudioFiles = async () => {
      // 在实际应用中，这里应该是一个API请求
      // 例如: const response = await fetch(`/api/regions/${slug}/audio-files`);

      // 模拟不同地区的音频文件
      let mockAudioFiles = []

      if (slug === "fuzhou") {
        mockAudioFiles = [
          {
            id: "fuzhou-1",
            name: "福州茶亭十番音乐 - 开场曲",
            url: "/audio/fuzhou/opening.mp3",
            description: "传统茶亭十番音乐的开场曲目，通常在庆典或仪式开始时演奏，具有庄重而喜庆的氛围。",
          },
          {
            id: "fuzhou-2",
            name: "福州茶亭十番音乐 - 迎宾曲",
            url: "/audio/fuzhou/welcome.mp3",
            description: "在重要客人到来时演奏的曲目，节奏明快，表达热情欢迎之意。",
          },
          {
            id: "fuzhou-3",
            name: "福州茶亭十番音乐 - 茶歌",
            url: "/audio/fuzhou/tea-song.mp3",
            description: "描绘福州茶文化的传统曲目，旋律优美，体现了当地人民对茶的喜爱。",
          },
          {
            id: "fuzhou-4",
            name: "福州茶亭十番音乐 - 庆典曲",
            url: "/audio/fuzhou/celebration.mp3",
            description: "在重大节日和庆典上演奏的曲目，气氛热烈，象征着喜庆和祝福。",
          },
          {
            id: "fuzhou-5",
            name: "福州茶亭十番音乐 - 结尾曲",
            url: "/audio/fuzhou/ending.mp3",
            description: "十番音乐的结尾曲目，通常以热烈欢快的节奏结束，象征着美好的祝福和期望。",
          },
        ]
      } else if (slug === "minxi") {
        mockAudioFiles = [
          {
            id: "minxi-1",
            name: "闽西客家十番音乐 - 山歌",
            url: "/audio/minxi/mountain-song.mp3",
            description: "反映客家人山区生活的传统曲目，旋律高亢嘹亮，表达了客家人坚韧不拔的精神。",
          },
          {
            id: "minxi-2",
            name: "闽西客家十番音乐 - 婚礼曲",
            url: "/audio/minxi/wedding.mp3",
            description: "客家传统婚礼上演奏的曲目，充满喜庆祝福的氛围。",
          },
          {
            id: "minxi-3",
            name: "闽西客家十番音乐 - 劳动号子",
            url: "/audio/minxi/work-song.mp3",
            description: "客家人在劳动时唱的号子，节奏鲜明，展现了客家人勤劳的品质。",
          },
          {
            id: "minxi-4",
            name: "闽西客家十番音乐 - 祭祖曲",
            url: "/audio/minxi/ancestor.mp3",
            description: "客家人祭祖仪式上演奏的曲目，庄严肃穆，体现了客家人尊祖敬宗的传统。",
          },
          {
            id: "minxi-5",
            name: "闽西客家十番音乐 - 欢庆曲",
            url: "/audio/minxi/celebration.mp3",
            description: "在节日庆典上演奏的欢快曲目，表达了客家人对美好生活的向往。",
          },
        ]
      } else if (slug === "putian") {
        mockAudioFiles = [
          {
            id: "putian-1",
            name: "莆田黄石慧洋十番音乐 - 开场曲",
            url: "/audio/putian/opening.mp3",
            description: "莆田黄石慧洋十番音乐的传统开场曲，气势恢宏，为整个演出奠定基调。",
          },
          {
            id: "putian-2",
            name: "莆田黄石慧洋十番音乐 - 海洋曲",
            url: "/audio/putian/ocean.mp3",
            description: "描绘莆田沿海地区渔民生活的曲目，旋律起伏如海浪，展现了海洋文化的特色。",
          },
          {
            id: "putian-3",
            name: "莆田黄石慧洋十番音乐 - 妈祖颂",
            url: "/audio/putian/mazu.mp3",
            description: "赞颂妈祖的传统曲目，庄严肃穆，体现了莆田人民对妈祖的崇敬。",
          },
          {
            id: "putian-4",
            name: "莆田黄石慧洋十番音乐 - 渔歌",
            url: "/audio/putian/fishing-song.mp3",
            description: "描绘渔民出海捕鱼场景的曲目，节奏明快，充满生活气息。",
          },
          {
            id: "putian-5",
            name: "莆田黄石慧洋十番音乐 - 庆丰收",
            url: "/audio/putian/harvest.mp3",
            description: "庆祝丰收的欢快曲目，表达了人们对丰收的喜悦和感恩。",
          },
        ]
      } else if (slug === "nanping") {
        mockAudioFiles = [
          {
            id: "nanping-1",
            name: "南平十番音乐 - 山水曲",
            url: "/audio/nanping/landscape.mp3",
            description: "描绘南平山水美景的曲目，旋律优美，展现了当地的自然风光。",
          },
          {
            id: "nanping-2",
            name: "南平十番音乐 - 茶山歌",
            url: "/audio/nanping/tea-mountain.mp3",
            description: "描绘茶农在山间采茶的场景，旋律轻快，充满劳动的喜悦。",
          },
          {
            id: "nanping-3",
            name: "南平十番音乐 - 竹林曲",
            url: "/audio/nanping/bamboo.mp3",
            description: "以南平丰富的竹资源为主题的曲目，清新自然，如同竹林中的微风。",
          },
          {
            id: "nanping-4",
            name: "南平十番音乐 - 武夷山歌",
            url: "/audio/nanping/wuyi-mountain.mp3",
            description: "赞美武夷山美景的曲目，旋律起伏如山峦，展现了武夷山的壮丽景色。",
          },
          {
            id: "nanping-5",
            name: "南平十番音乐 - 欢庆曲",
            url: "/audio/nanping/celebration.mp3",
            description: "在节日庆典上演奏的欢快曲目，热闹喜庆，表达了人们的欢乐心情。",
          },
        ]
      }

      // 模拟加载延迟
      await new Promise((resolve) => setTimeout(resolve, 800))

      return mockAudioFiles
    }

    fetchAudioFiles()
      .then((files) => {
        setAudioFiles(files)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching audio files:", error)
        setLoading(false)
      })
  }, [slug])

  if (!regionNames[slug]) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-slate-100">
        <h1 className="text-xl mb-4">地区不存在</h1>
        <button onClick={() => router.push("/")} className="px-4 py-2 bg-blue-500 text-white rounded-full">
          返回首页
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      {/* 顶部导航栏 */}
      <div className="bg-white py-3 px-4 flex items-center shadow-sm">
        <button onClick={() => router.push("/")} className="mr-2">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-medium">{regionNames[slug]} 十番音乐</h1>
      </div>

      {/* 主内容区域 */}
      <div className="flex-1 overflow-auto pb-4">
        <div className="relative w-full h-48">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              background: regionBackgrounds[slug],
              filter: "brightness(0.9)",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
            <h2 className="text-xl font-bold">{regionNames[slug]} 十番音乐</h2>
            <p className="text-sm mt-1 line-clamp-2">{regionDescriptions[slug]}</p>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium mb-3">音乐列表</h3>

          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {audioFiles.map((audio) => (
                <div key={audio.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="p-3 border-b border-slate-100">
                    <h4 className="font-medium">{audio.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{audio.description}</p>
                  </div>
                  <AudioPlayer audio={audio} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

