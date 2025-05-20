"use client";

import Image from "next/image";
import Footer from "../_components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NextPage() {
  return (
    <div className="flex-1">
      <div className="pt-32">
        {/* Header section */}
        <div className="relative h-[600px] w-full">
          <div className="relative h-full w-full">
            <Image
              src="/announcelogo.jpg"
              alt="Cover Photo"
              fill
              priority
              className="object-cover"
            />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
              <h1 className="text-7xl font-bold text-yellow-500 [text-shadow:_2px_2px_4px_#000000]">
                Barangay News, Updates, and Projects
              </h1>
              <br />
              <p className="text-3xl font-bold text-yellow-500 [text-shadow:_2px_2px_4px_#000000]">
                For a more connected and informed community.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white px-4 pt-5">
          {/* Latest Announcements Title */}
          <h2 className="mt-8 text-center text-4xl font-bold text-white [text-shadow:_2px_2px_4px_#000000]">
            Latest Announcements!
          </h2>

          {/* Announcements Cards Section */}
          <div className="mx-auto mt-8 max-w-7xl py-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* First Announcement Card */}
              <div className="overflow-hidden rounded-lg bg-gray-800 p-6 text-white shadow-lg">
                <div className="border-b border-gray-700 pb-4">
                  <h2 className="text-xl font-bold">April 25, 2025</h2>
                </div>
                <div className="space-y-4 pt-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Barangay Cleanup Drive this Weekend
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      Volunteers needed for Zone 3 and Zone 4.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button className="text-blue-400 hover:text-blue-300">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              {/* Second Announcement Card */}
              <div className="overflow-hidden rounded-lg bg-gray-800 p-6 text-white shadow-lg">
                <div className="border-b border-gray-700 pb-4">
                  <h2 className="text-xl font-bold">May 1, 2025</h2>
                </div>
                <div className="space-y-4 pt-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Community Health Seminar
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      Free health check-ups and consultation at the Barangay
                      Hall.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button className="text-blue-400 hover:text-blue-300">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              {/* Third Announcement Card */}
              <div className="overflow-hidden rounded-lg bg-gray-800 p-6 text-white shadow-lg">
                <div className="border-b border-gray-700 pb-4">
                  <h2 className="text-xl font-bold">May 10, 2025</h2>
                </div>
                <div className="space-y-4 pt-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Basketball Tournament Registration
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      Open for youth ages 15-21. Register at the Barangay Sports
                      Complex.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button className="text-blue-400 hover:text-blue-300">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Projects Title */}
          <h2 className="mt-12 text-center text-4xl font-bold text-white [text-shadow:_2px_2px_4px_#000000]">
            Recent Projects
          </h2>

          {/* Projects Cards Section */}
          <div className="mx-auto mt-8 max-w-7xl py-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* First Project Card */}
              <div className="overflow-hidden rounded-lg bg-gray-800 p-6 text-white shadow-lg">
                <div className="border-b border-gray-700 pb-4">
                  <h2 className="text-xl font-bold">Road Rehabilitation</h2>
                </div>
                <div className="space-y-4 pt-4">
                  <div>
                    <h3 className="text-lg font-semibold">Phase 1 Complete</h3>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      Successfully completed the first phase of road repairs in
                      Zone 1.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button className="text-blue-400 hover:text-blue-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Second Project Card */}
              <div className="overflow-hidden rounded-lg bg-gray-800 p-6 text-white shadow-lg">
                <div className="border-b border-gray-700 pb-4">
                  <h2 className="text-xl font-bold">Street Lighting Project</h2>
                </div>
                <div className="space-y-4 pt-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Installation Ongoing
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      LED lights installation in progress along main streets.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button className="text-blue-400 hover:text-blue-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Third Project Card */}
              <div className="overflow-hidden rounded-lg bg-gray-800 p-6 text-white shadow-lg">
                <div className="border-b border-gray-700 pb-4">
                  <h2 className="text-xl font-bold">Community Center</h2>
                </div>
                <div className="space-y-4 pt-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Renovation Project
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      Upgrading facilities and expanding the community hall
                      space.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button className="text-blue-400 hover:text-blue-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 px-4 py-16">
        <h2 className="mb-8 text-center text-4xl font-bold text-white">
          Barangay Facility
        </h2>
        <div className="mx-auto max-w-7xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="h-[400px]"
          >
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery13.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery14.jpg"
                  alt="Gallery Image 2"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery3.jpg"
                  alt="Gallery Image 3"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery4.jpg"
                  alt="Gallery Image 4"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery5.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery6.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery7.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery8.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery9.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery10.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery11.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery12.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery2.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery1.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery15.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/gallery16.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <h2 className="mt-8 mb-8 text-center text-4xl font-bold text-white">
          Barangay's Recent Community Service
        </h2>
        <div className="mx-auto max-w-7xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="h-[400px]"
          >
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery1.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery2.jpg"
                  alt="Gallery Image 2"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery3.jpg"
                  alt="Gallery Image 3"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery4.jpg"
                  alt="Gallery Image 4"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery5.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery6.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery7.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery8.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery9.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery10.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery11.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery12.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery2.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery1.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery15.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/secgallery16.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}
