"use client"
import React, { useEffect, useState } from 'react'
import styles from './writePage.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill-new'
import "react-quill-new/dist/quill.bubble.css"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const WritePage = () => {
    const {status} = useSession();
    const router = useRouter();

    const [file, setFile] = useState(null);
    const [open, setOpen] = useState(false);

    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");

    useEffect(() => {  
        if(status === "unauthenticated"){
          router.push("/")
        }
      }, [status, router]);

    if(status === "loading"){
        return <div className={styles.loading}>Loading...</div>
    } 

    
    const slugify = (str) =>
        str
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, "");

    const hanldePublish = async () =>{
        
        const res = await fetch("/api/posts", {
            method:"POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: "/p1.jpg",
                slug: slugify(title),
                catSlug: catSlug || "style", //If not selected, choose the general category
            })
        });
        
        if(res.status === 200){
            const data = await res.json();
            router.push(`/posts/${data.slug}`)
        }
    }
    
  return (
    <div className={styles.container}>
        <input type='text' placeholder="Title" className={styles.input} onChange={(e) => setTitle(e.target.value)}/>
        <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
            <option value="style">Style</option>
            <option value="fashion">Fashion</option>
            <option value="food">Food</option>
            <option value="culture">Culture</option>
            <option value="travel">Travel</option>
            <option value="coding">Coding</option>
        </select>
        <div className={styles.editor}>
            <button className={styles.button} onClick={() => setOpen(!open)}>
                <Image src="/plus.png" alt='' width={16} height={16} />
            </button>
            {open && (
                <div className={styles.add}>
                    <input type='file' id="image" onChange={(e) => setFile(e.target.files[0])} style={{display: "none"}}/>
                    <button className={styles.addButton}>
                    <label htmlFor='image'>

                        <Image src="/image.png" alt='' width={16} height={16}/>
                    </label>
                    </button>
                    <button className={styles.addButton}>
                        <Image src="/external.png" alt='' width={16} height={16} />
                    </button>
                    <button className={styles.addButton}>
                        <Image src="/video.png" alt='' width={16} height={16} />
                    </button>
                </div>
            )}
            <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...'/>
        </div>
        <button className={styles.publish} onClick={hanldePublish}>Publish</button>
    </div>
  )
}

export default WritePage