import React from 'react';
import useFirestore from '../hooks/useFirestore'
import { motion } from "framer-motion";

const ImageGridDigitalArt = ({setSelectedImg}) => {
    //const {docs} = useFirestore('images');
    const {docs} = useFirestore('digital_art');

    return(
        <div className="img-grid-digital-art">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{opacity: 0.8}}s
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGridDigitalArt;