import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Status.module.css'
import Clock from '@atlaskit/icon/glyph/editor/recent'
import FormCompleted from '@atlaskit/icon/glyph/media-services/document'
import Processing from '@atlaskit/icon/glyph/portfolio';
import Processed from '@atlaskit/icon/glyph/media-services/spreadsheet';
import Appointment from '@atlaskit/icon/glyph/editor/date';
import Embassy from '@atlaskit/icon/glyph/office-building-filled';
import Approval from '@atlaskit/icon/glyph/question-circle';
import completed from '../public/completed.svg'
export default function Status({ status }) {
    var currPage = 1;
    if (status === "FORM COMPLETED") {
        currPage = 1;
    } else if (status === "PROCESSING") {
        currPage = 2;
    } else if (status === "PROCESSED") {
        currPage = 3;
    } else if (status === "appointment booking") {
        currPage = 4;
    } else if (status === "AT EMBASSY/VFS") {
        currPage = 5;
    } else if (status === "APPROVED" || status === "REJECTED") {
        currPage = 6;
    } else {
        currPage = 0;
    }
    const icons = [<FormCompleted />, <Processing />, <Processed />, <Appointment />, <Embassy />, <Approval />]
    const names = ["Form Completed", "Processing", "Processed", "Appointment Booking", "At Embassy/ VFS", "Approval/ Rejection"]

    return (
        <>
            <div className={styles.conatiner}>
                {
                    icons.map((item, index) => {
                        return <span key={index} className={styles.cont}>
                            <div className={styles.iconCont}>
                                <div className={styles.icon}>
                                    <span className={currPage >= index + 1 ? `${styles.greenIcon}` : ''}>
                                        {item}
                                    </span>
                                    {currPage >= index + 1 && <Image src={completed} alt="complete" className={styles.completedsvg} />}
                                </div>
                                {index + 1 < icons.length && <div className={currPage == index + 1 ? `${styles.activeProgressLine}` : `${styles.progressLine}`}>
                                    {currPage > index + 1 && <div className={styles.progressLineComplete}></div>}
                                    {currPage == index + 1 && <div className={styles.progressLineIncomplete}></div>}
                                </div>}
                                {currPage == index + 1 && <div className={styles.arrow}></div>}
                            </div>
                            <div className={styles.statusName}>
                                <span>
                                    {names[index]}
                                </span>
                            </div>
                            {currPage == index + 1 && <div className={styles.smallDesc}><Desc /></div>}
                        </span>
                    })
                }
            </div>
            <div className={styles.wideDesc}>
                <Desc />
            </div>
        </>
    )
}

export function Desc() {
    return (
        <div className={styles.statusDesc}>
            <span>Our team is filing your application with the embassy We may reach out to you if we have any questions.
            </span>
            <div>
                <Clock />
                Estimated visa arrival date: 29 Jan 2023
            </div>
        </div>
    )
}

