"use client";
import { useModal } from "@/app/projects/components/ModalContext";
import { projectImages } from "@/app/projects/data/data";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Chip,
} from "@heroui/react";
import { IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import ProjectInfos from "../components/ProjectInfos";

export default function ProjectModal() {
  const { isOpen, closeModal, selectedProjectId } = useModal();
  const project = projectImages.find((p) => p.id === selectedProjectId);

  if (!project) return null;

  return (
    <div className="flex justify-center relative">
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        placement="top-center"
        size="full"
        radius="lg"
        scrollBehavior="inside"
        backdrop="blur"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
          wrapper: "mt-[50px] z-[1000]",
          closeButton: "bg-black hover:text-black md:me-4 md:mt-4 text-white",
        }}
      >
        <ModalContent className="text-white">
          <div className="text-center bg-stone-900 px-4 py-6 md:px-0">
            <ModalHeader className="flex flex-col gap-2 mt-4 md:mt-8">
              {/* Responsive Image Container */}
              <div className="w-full max-w-md md:max-w-[1000px] h-auto mx-auto relative">
                <Image
                  alt="Project Image"
                  src={project.mockup || "/default-image-path.jpg"}
                  layout="responsive"
                  width={1000}
                  height={600}
                  className="rounded-2xl object-cover"
                />
              </div>
            </ModalHeader>

            <ModalBody className="w-full max-w-lg md:max-w-[1024px] mx-auto">
              <div className="grid gap-6 md:gap-8 mt-6">
                {/* Project Type Badge */}
                <Chip className="mx-auto text-sm md:text-[12px] bg-blue-700 text-white">
                  {project.type}
                </Chip>

                {/* Title */}
                <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-white">
                  {project.title}
                </h1>

                {/* Description */}
                <p className="text-sm md:text-medium md:tracking-widest leading-6 text-stone-300">
                  {project.description}
                </p>

                {/* Like Button */}
                <div className="flex justify-center border-b pb-4 md:pb-8">
                  <div className="border border-stone-500 p-3 rounded-full hover:bg-stone-700 cursor-pointer transition">
                    <IoHeartOutline size={20} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <ProjectInfos
                tools={project.tools}
                duration={project.duration}
                id={""}
                url={undefined}
                title={""}
                catchcopy={project.catchcopy}
                description={""}
                tags={[]}
                type={project.type}
                thoughts={project.thoughts}
                link={project.link}
                images={project.images}
                mockup={project.mockup}
                videoLink={null}
              />
            </ModalBody>

            {/* Close Button */}
            <ModalFooter className="flex justify-center mt-6">
              <Button color="danger" variant="light" onPress={closeModal}>
                Close
              </Button>
            </ModalFooter>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}
