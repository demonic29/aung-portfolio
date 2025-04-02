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
  RadioGroup,
  Radio,
  Badge,
  Chip,
} from "@heroui/react";
import { useState } from "react";
import Image from "next/image";

import { IoHeartOutline } from "react-icons/io5";
import ProjectInfos from "../components/ProjectInfos";
import ProjectPdf from "../components/ProjectPdf";

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
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
          wrapper: "mt-[50px] z-[1000]",
          closeButton: "bg-black hover:text-black md:me-4 md:mt-4 text-white",
        }}
      >
        <ModalContent className="text-white">
          <div className="text-center bg-stone-900">

            <ModalHeader className="flex flex-col gap-2 mt-[32px] overflow-scroll">

              <div className="md:w-[1000px] md:h-[600px] mx-auto relative">
                <Image
                  alt="Project-Image"
                  fill
                  src={project.mockup || "/default-image-path.jpg"}
                  className="rounded-2xl object-cover"
                />
              </div>
              

            </ModalHeader>
            
            <ModalBody className="md:w-[1024px] mx-auto">
              
              <div className="grid gap-8 md:mt-8">
                <Chip className="mx-auto  md:text-[12px]  bg-blue-700  text-white">{project.type}</Chip>

                <h1 className="text-5xl font-bold tracking-tight text-white">
                  {project.title}
                </h1>
                <p className="md:leading-8 md:text-medium md:tracking-widest text-stone-300">
                  {project.description}
                </p>
                <div className="flex justify-center border-b md:pb-8">
                  <div className="border-1 border-stone-500 p-2 rounded-full">
                    <IoHeartOutline size={16} />
                  </div>
                </div>
              </div>

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
                // pdfId={project.pdfId}      
                images={project.images}
                mockup={project.mockup} 
                videoLink={null}             
                />

              
            </ModalBody>
            <ModalFooter>
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
