import Link from "next/link";

type NewsCardProps = {
  className?: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function NewsCard({ className, title, description, image, url }: NewsCardProps) {
  return (
    <Link href={url}></Link>
  )
}