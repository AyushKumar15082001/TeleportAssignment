import React, { useState } from 'react'
import DropDown from '@atlaskit/icon/glyph/chevron-down'
import Lozenge from '@atlaskit/lozenge';
import Flag from '../public/flag.svg';
import Image from 'next/image'
import styles from '@/styles/List.module.css'
import SubList from '@/components/SubList'

export default function List(props) {
    const [show, setShow] = useState(false);
    return (
        <>
        <div className={styles.list}>
            <div style={{ display: 'flex' }}>
                <span style={{ paddingRight: '18px' }}><Image src={Flag} alt="flag" /></span>
                <div >
                    <span className={styles.country}>
                        United Kingdom (UK)
                    </span>
                    <span className={styles.list_desc}>#T687916281UK</span>
                </div>
            </div>
            <div >
                <span className={styles.names}>
                    <div>
                        <span>A</span>
                        <span>N</span>
                    </div> 
                    <span>
                    Amit & Neha
                    </span>
                </span>
                <span className={styles.list_desc}>
                    Submitted on 14 Dec
                </span>
            </div>
            <div >
                <span className={styles.status}>
                    <Lozenge appearance={props.appearance} >{props.data}</Lozenge>
                </span>
                <span className={styles.list_desc}>
                    As on 14 Dec, 3:35 PM
                </span>
            </div>
            <div className={styles.close} onClick={()=> setShow(!show)}>
                <span className={styles.closeText}>
                    {show?'Close':'See details'}
                </span>
                <span style={show?{transform:'rotateX(180deg)'}:{}}>
                <DropDown />
                </span>
            </div>
        </div>
        {show && <SubList {...props}/>}
        </>
    )
}