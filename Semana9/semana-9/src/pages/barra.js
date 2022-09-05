

import { useState, useRef, useEffect } from 'react';


export default function DownloadBarra() {
  const obj = {
    nome: 'Arquivo',
    downloaded: 0,
    isDownloading: false
  }
  const [dowload, setDowload] = useState(obj)
  const intervalId = useRef();

  function iniciarBarra() {
    intervalId.current = setInterval(() => {
      setDowload(prev => ({
        ...prev,
        isDownloading: true,
        downloaded: prev.downloaded += 1
      }))
    }, 50);
  }

  useEffect(() => {
    if (dowload.isDownloading && dowload.downloaded >= 100) {      
      clearInterval(intervalId.current)
      setDowload(prev => ({
        ...prev,
        downlaoded: 0,
        isDownloading: false
      }))
    }
  }, [dowload])

  return (
    <div className='sistemas'>
        <h4>{dowload.nome} - {dowload.isDownloading}</h4>
        <progress value={dowload.downloaded} min="0" max="100"></progress>
        <button onClick={iniciarBarra}>Download</button>
      </div>
    
  )
}


