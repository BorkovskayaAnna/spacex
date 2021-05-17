import React from 'react'

import style from './Loading.module.scss'

export const Loading = () => (
    <div className={style.loaderWrap}>
        <div className={style.loaderIcon} />
    </div>
)