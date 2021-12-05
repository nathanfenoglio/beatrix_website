import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        //THINK THAT YOU MAY NEED TO BE SPECIFIC HERE
        //WHAT collection ARE YOU WANTING, WHICH TAB ARE YOU ON
        //for now just changing to digital_art instead of images
        //const collectionRef = projectFirestore.collection('images'); 
        const collectionRef = projectFirestore.collection('digital_art'); 

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({url, createdAt});
            setUrl(url);
        });
    }, [file]); //[file] is the dependency that any time changes will cause the function to be run

    return {progress, url, error};
}

export default useStorage;