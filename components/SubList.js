import React from 'react'
import Image from 'next/image'
import DropDown from '@atlaskit/icon/glyph/chevron-down'
import styles from '@/styles/SubList.module.css'
import Download from '../public/download.svg'
import WhatsApp from '../public/whatsApp.svg'
import Toggle from '@atlaskit/toggle';
import Lozenge from '@atlaskit/lozenge';
import Status from './Status'

export default function SubList(props) {
    return (
        <div className={styles.conatiner}>
            <div className={styles.actions}>
                <div>
                    <span>View applications</span>
                    <span className={styles.dropdown}><DropDown /></span>
                </div>
                <div>
                    <span>Upload documents</span>
                    <span className={styles.dropdown}>
                        <DropDown />
                    </span>
                </div>
                <div>
                    <Image src={Download} alt='download' width={15} height={15} />
                    <span style={{ marginLeft: '8px' }}>
                        Invoice
                    </span>
                </div>
                <div>
                    <Image src={WhatsApp} alt='whatsApp' />
                    <span style={{ marginLeft: '13px', color: '#254142' }}>
                        Need help?
                    </span>
                </div>
            </div>
            <Status status= {props.data}/>
            <div className={styles.whatsAppUpdate}>
                <Toggle id="toggle-large" size="large" defaultChecked />
                <span>Send status updates on Whatsapp (+91 8800726381)</span>
            </div>
            <div className={styles.individual}>
                <div className={styles.individualStatus}>
                    <div>
                        <span className={styles.avatar}>A</span>
                        <span>Amit Patel</span>
                    </div>
                    <div>27 yrs</div>
                    <div>amitpatel@gmail.com</div>
                    <div><Lozenge appearance={props.appearance} >{props.data}</Lozenge></div>
                    <div>8800726382</div>
                </div>
                <div className={styles.individualStatus}>
                    <div>
                        <span className={styles.avatar}>N</span>
                        <span>Neha Gupta</span>
                    </div>
                    <div>26 yrs</div>
                    <div>nehagupta@gmail.com</div>
                    <div><Lozenge appearance={props.appearance} >{props.data}</Lozenge></div>
                    <div>8563924729</div>
                </div>
            </div>
        </div>
    )
}