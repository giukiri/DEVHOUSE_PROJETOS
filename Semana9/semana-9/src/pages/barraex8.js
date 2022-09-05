import { useState, useRef, useEffect } from 'react';


export default function DownloadBarra2() {
  const obj = [
    {
    nome: 'Arquivo',
    downloaded: 0,
    isDownloading: false,
  },

  {
    nome: 'Arquivo2',
    downloaded: 0,
    isDownloading: false,

  }
]
  const [download, setDownload] = useState([obj])
  const intervalId = useRef();

  function iniciarBarra() {
    intervalId.current = setInterval(() => {
      setDownload(prev => ({
        ...prev,
        isDownloading: true,
        downloaded: prev.downloaded += 1
      }))
    }, 50);
  }

  function pausarBarra() {
    clearInterval(intervalId.current)
}

  useEffect(() => {
    if (download.isDownloading && download.downloaded >= 100) {      
      clearInterval(intervalId.current)
      setDownload(prev => ({
        ...prev,
        downlaoded: 0,
        isDownloading: false
      }))
    }
  }, [download])

  return (
    <div >
        <h4>{download.nome} {download.isDownloading}</h4>
        <progress value={download.downloaded} min="0" max="100"></progress>
        <button onClick={iniciarBarra}>Download</button>
        <button onClick={pausarBarra}>Pausar Download</button>
      </div>
    
  )
}


