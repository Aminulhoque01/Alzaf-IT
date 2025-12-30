// components/HeroSection.tsx (SERVER)
import banners from "@/Data/banners"
import Banners from "../Banners/Banners"
 

const HeroSection = async () => {
  const res = await banners()
  const bannerList = res?.data?.banners || [] ;

  return <Banners banners={bannerList} />
}

export default HeroSection
