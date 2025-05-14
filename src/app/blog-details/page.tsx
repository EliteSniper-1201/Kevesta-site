import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  const images = [
    "/images/portfolio/1-1.png",
    "/images/portfolio/1-2.png",
    "/images/portfolio/1-3.png",
    "/images/portfolio/1-4.png",
    "/images/portfolio/1-5.png",
    "/images/portfolio/2-1.png",
    "/images/portfolio/2-2.png",
    "/images/portfolio/2-3.png",
    "/images/portfolio/2-4.png",
    "/images/portfolio/3-1.png",
    "/images/portfolio/4-1.jpg",
    "/images/portfolio/4-2.jpg",
    "/images/portfolio/4-3.png",
    "/images/portfolio/4-4.png",
    "/images/portfolio/4-5.jpg",
    "/images/portfolio/6-1.png",
    "/images/portfolio/6-2.png",
    "/images/portfolio/6-3.png",
    "/images/portfolio/6-4.png",
    "/images/portfolio/6-6.png",
    "/images/portfolio/7-1.png",
    "/images/portfolio/7-2.png",
    "/images/portfolio/7-3.png",
    "/images/portfolio/7-4.png",
    "/images/portfolio/7-5.png",
    "/images/portfolio/8-1.png",
    "/images/portfolio/8-2.png",
    "/images/portfolio/9-1.png",
    "/images/portfolio/9-2.png",
    "/images/portfolio/9-3.png",
    "/images/portfolio/10-1.png",
    "/images/portfolio/10-2.png",
    "/images/portfolio/10-3.png",
  ];
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              {images.map((image, index) => (
                <div key={index} className="mb-8 w-full max-w-3xl">
                  <Image
                    src={image}
                    alt={`Blog post image ${index + 1}`}
                    width={800}
                    height={450}
                    className="rounded-lg object-cover"
                    priority={index === 0} // Only prioritize loading the first image
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
