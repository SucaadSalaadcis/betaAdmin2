import { useEffect, useState } from 'react'
import { imageDb } from './Config'
import { ref , uploadBytes , listAll , getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

function ImageUpload() {
    const [img,setImg] = useState('')
    const [imgUrl,setImgUrl] = useState([])

    const handleClick = () => {
    const imgRef = ref(imageDb,`files/${v4()}`)
    uploadBytes(imgRef,img)
    }

    useEffect(()=>{
      listAll(ref(imageDb,"files")).then(img=>{
        img.items.forEach(val => {
            getDownloadURL(val).then(url=>{
                setImgUrl(data=>[...data,url])
            })
        });
      })
    },[])

    console.log(imgUrl ,"imgUrl")

  return (
    <div>
        <input type='file' onChange={(e)=>setImg(e.target.files[0])}/>
        <button onClick={handleClick}>upload</button><br/>
        {
            imgUrl.map(dataVal=><div>
                <img src={dataVal} height= '100px' width= '200px'/>
                <br/>
            </div>)
        }
    </div>
  )
}

export default ImageUpload