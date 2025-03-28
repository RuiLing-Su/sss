"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, PlayCircle, Settings } from "lucide-react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="flex flex-col h-screen bg-slate-100">
      {/* 顶部导航栏 */}
      <div className="bg-white py-3 px-4 text-center relative shadow-sm">
        <h1 className="text-lg font-medium">福建十番音乐景观</h1>
      </div>

      {/* 主内容区域 */}
      <div className="flex-1 overflow-auto pb-16">
        <div className="relative w-full aspect-[4/3] max-w-md mx-auto mt-4">
          <Image src="/map-fujian.png" alt="福建地图" fill className="object-contain" priority />

          <Link href="/region/fuzhou" className="absolute group" style={{ left: "75%", top: "60%" }}>
            <div className="w-5 h-5 bg-red-500 rounded-full animate-pulse group-hover:scale-125 transition-transform flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded absolute -translate-x-1/2 -translate-y-full -mt-1 text-xs shadow-md">
              福州茶亭
            </div>
          </Link>

          <Link href="/region/minxi" className="absolute group" style={{ left: "30%", top: "60%" }}>
            <div className="w-5 h-5 bg-red-500 rounded-full animate-pulse group-hover:scale-125 transition-transform flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded absolute -translate-x-1/2 -translate-y-full -mt-1 text-xs shadow-md">
              闽西客家
            </div>
          </Link>

          <Link href="/region/putian" className="absolute group" style={{ left: "60%", top: "75%" }}>
            <div className="w-5 h-5 bg-red-500 rounded-full animate-pulse group-hover:scale-125 transition-transform flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded absolute -translate-x-1/2 -translate-y-full -mt-1 text-xs shadow-md">
              莆田黄石慧洋
            </div>
          </Link>

          <Link href="/region/nanping" className="absolute group" style={{ left: "45%", top: "35%" }}>
            <div className="w-5 h-5 bg-red-500 rounded-full animate-pulse group-hover:scale-125 transition-transform flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded absolute -translate-x-1/2 -translate-y-full -mt-1 text-xs shadow-md">
              南平
            </div>
          </Link>
        </div>

        <div className="text-center mt-6 text-sm text-gray-500 px-4">点击地图上的标记查看各地区的十番音乐</div>

        <div className="mt-8 px-4">
          <h2 className="text-lg font-medium mb-3">热门十番音乐</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "福州茶亭十番音乐", region: "fuzhou" },
              { name: "闽西客家十番音乐", region: "minxi" },
              { name: "莆田黄石慧洋十番音乐", region: "putian" },
              { name: "南平十番音乐", region: "nanping" },
            ].map((item, index) => (
              <Link
                href={`/region/${item.region}`}
                key={index}
                className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-2">
                  <PlayCircle className="w-6 h-6 text-slate-500" />
                </div>
                <span className="text-sm text-center">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 底部标签栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
        <Link
          href="/"
          className={`flex flex-col items-center ${activeTab === "home" ? "text-blue-500" : "text-gray-500"}`}
          onClick={() => setActiveTab("home")}
        >
          <Home size={20} />
          <span className="text-xs mt-1">首页</span>
        </Link>
        <Link
          href="/sounds"
          className={`flex flex-col items-center ${activeTab === "sounds" ? "text-blue-500" : "text-gray-500"}`}
          onClick={() => setActiveTab("sounds")}
        >
          <PlayCircle size={20} />
          <span className="text-xs mt-1">声音</span>
        </Link>
        <Link
          href="/admin"
          className={`flex flex-col items-center ${activeTab === "admin" ? "text-blue-500" : "text-gray-500"}`}
          onClick={() => setActiveTab("admin")}
        >
          <Settings size={20} />
          <span className="text-xs mt-1">管理</span>
        </Link>
      </div>
    </div>
  )
}

