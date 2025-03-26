import { ProjectImages } from '@/app/projects/data/data';
import CloudPdfViewer from '@cloudpdf/viewer';

import React, { useEffect, useRef } from 'react'

const ProjectPdf = ({ pdfId } : {pdfId : string}) => {

    const viewer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (viewer.current) {
            CloudPdfViewer(
                {
                    documentId: pdfId,
                    darkMode: true
                },
                viewer.current
            ).then((instance) => {
                instance.setThemeColor("#60a5fa")
            });
        }
    },[])

    return (
        <div className='overflow-hidden rounded-2xl'>
            <div className="viewer h-[500px]" ref={viewer}></div>
            {/* <iframe src={pdfId}></iframe> */}
        </div>
    )
}

export default ProjectPdf