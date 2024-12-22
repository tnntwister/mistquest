'use client'

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  iconName: string
  href: string
  image: string
}

export function FeatureCard({ title, description, iconName, href, image }: FeatureCardProps) {
  return (
    <Card className="relative overflow-hidden group transition-all hover:scale-105">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background-dark/60 group-hover:bg-background-dark/40 transition-colors" />
      </div>
      
      <Link href={href}>
        <CardHeader className="relative z-10">
          <div className="flex items-center gap-4">
            <span className="h-8 w-8 text-ice-blue">{iconName}</span>
            <CardTitle className="text-text-light">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <CardDescription className="text-text-light/80">
            {description}
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  )
} 